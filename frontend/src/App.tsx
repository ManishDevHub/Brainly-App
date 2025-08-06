
import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { CreateContnetModal } from './components/CreateContnetModal'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'
import { Sidebar } from './components/Sidebar'

function App() {
  const [modalOpen, setModalOpen] = useState(true);


  return (
    <div >
      <Sidebar />
      <div className='p-4 ml-72 min-h-screen bg-gray-100 border-2'>
      <CreateContnetModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className='flex justify-end gap-4'>
     
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
  onClick={() => {
    setModalOpen(true)
  }}
  startIcon={<PlusIcon size='md'/>}
   
/>
</div>
<div className='flex gap-4'>



<Card type='twitter' link ="https://x.com/ramuk13476/status/1950637137164222855" title='First post' />
<Card type='youtube' link ="https://www.youtube.com/watch?v=p8gvGCDQpgo" title='First video' />
</div>
</div>
    </div>

    
  )
}

export default App
