import Sidebar from './components/Sidebar'
import WebtoonList from './components/WebtoonList'
import './index.css'

function App() {

  return (
    <div className='min-h-screen min-w-screen grid grid-cols-[auto_1fr] bg-white'>
     <Sidebar />
     <WebtoonList />
    </div>
  )
}

export default App
