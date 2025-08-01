
import './App.css'
import { Button } from './components/Button'

function App() {
  

  return (
    <>
     
     <Button
  variant="primary"
  text="Share"
  size="md"
  onClick={() => console.log("add click")}
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
