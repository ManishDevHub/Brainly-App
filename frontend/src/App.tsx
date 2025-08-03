
import './App.css'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {
  

  return (
    <>
     
     <Button
  variant="primary"
  text="Share"
  size="sm"
  onClick={() => console.log("add click")}
  startIcon={<PlusIcon size='md'/>}
/>
<Button
  variant="secondary"
  text="Add content"
  size="md"
  onClick={() => console.log("Add clicked")}
/>
    </>
  )
}

export default App
