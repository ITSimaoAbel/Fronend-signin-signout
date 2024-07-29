
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { route } from './routes'
import { StudentProvider } from './components/context/student-context'

export const App = () => {
  return (
    <StudentProvider>

    <RouterProvider router={route}/>

    </StudentProvider>
    
  )
}
export default App
