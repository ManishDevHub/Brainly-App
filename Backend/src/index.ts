import express from "express";

import {JWT_PASSWORD } from "./config";
import jwt from "jsonwebtoken";
import { ContentModal, LinkModal, UserModal } from "./db";
import { UserMiddleware } from "./middleware";
import { random } from "./utils";
console.log("🔐 JWT_PASSWORD loaded as:", JWT_PASSWORD);

const app = express();
app.use(express.json());

app.post("/api/v1/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    await UserModal.create({
      username: username,
      password: password,
    });
    res.json({
      message: "User signed up",
    });
  } catch (error) {
    res.status(411).json({ message: "User already exists" });
  }
});
app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserModal.findOne({
    username,
    password,
  });
  if (existingUser) {
    const token = jwt.sign(
      {
        id: existingUser._id,
      },
      JWT_PASSWORD
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      message: "Incorrect credentials",
    });
  }
});

app.post("/api/v1/content",UserMiddleware,  async (req, res) => {
  const link = req.body.link;
  const type = req.body.type;
  await ContentModal.create({
    link,
    type,
    //@ts-ignore
    userId: req.userId,
    tags:[]
  })
   res.json({
    message:"content added"
  })
});
app.get("/api/v1/content",UserMiddleware, (req, res) => {
    //@ts-ignore
    const userId = req.userId;
    const content = ContentModal.find({
        userId:userId
    }).populate("userId" , "username")
    res.json({
        content
    })
});
app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;
    await ContentModal.deleteMany({
        contentId,
        //@ts-ignore
        userId: req.userId
    })
    res.json({
        message: "Content deleted"
    })
});
app.post("/api/v1/brain/share", UserMiddleware,  async (req, res) => {
  const share = req.body.share;
 if(share) {
   const existingLink = await LinkModal.findOne({
    //@ts-ignore
    userId: req.userId
  })
if(existingLink){
  res.json({
    hash: existingLink.hash
  })
  return;
}

  const hash = random(10)
 await LinkModal.create({
    //@ts-ignore
    userId:req.userId,
    hash: hash
  })
  res.json({
    message: "/share/" + hash
  })
  }else{
   await LinkModal.deleteOne({
      //@ts-ignore
      userId: req.userId
    });
 }

 res.json({
  message: "Removed link"
 })
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModal.findOne({ hash });

  if (!link) {
    return res.status(411).json({
      message: "Sorry incorrect input"
    });
  }

  
  const content = await ContentModal.find({
    userId: link.userId
  });


  const user = await UserModal.findOne({
    _id: link.userId
  });

  if (!user) {
    return res.status(411).json({
      message: "User not found, error should ideally not happen"
    });
  }

  res.json({
    username: user.username,
    content: content
  });
});
