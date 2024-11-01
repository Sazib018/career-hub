import { Toaster } from 'react-hot-toast'
import './App.css'
import MainLayout from './components/common/Layout/MainLayout'


function App() {


  return (
    <>
    <MainLayout></MainLayout>
    <Toaster
      position="top-right"
     ></Toaster>
    </>
  )
}

export default App
