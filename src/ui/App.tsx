import './App.css'
import Chat from './home/chat'
import Files from './home/files'
import Group from './home/group'
import Side_Bar from './home/side_bar'

function App() {

  return (
    <div className='flex flex-row '>
      <Side_Bar />
      <Group></Group>
      <Chat></Chat>
      <Files></Files>
    </div>
  )
}

export default App
