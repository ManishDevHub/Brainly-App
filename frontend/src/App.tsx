
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  

  return (
    <>
     
     <Button
  variant="primary"
  text="Share brain"
  size="sm"
  onClick={() => console.log("add click")}
  startIcon={<ShareIcon/>}
/>
<Button
  variant="secondary"
  text="Add content"
  size="md"
  onClick={() => console.log("Add clicked")}
  startIcon={<PlusIcon size='md'/>}
   
/>

<Card/>
    </>

    
  )
}

export default App
