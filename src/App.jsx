import './App.css'
import About from './Components/About/About'
import Contatct from './Components/Contatct/Contatct'
import Home from './Components/Home/Home'
import{ createBrowserRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './Components/Portfolio/Portfolio'
import Notfound from './Components/Notfound/Notfound '
import Layout from './Components/Layout/Layout'

let route = createBrowserRouter([
  {path:'/' , element:<Layout/> , children:
    [
    {index:true, element:<Home/>},
      {path:'about' , element:<About/>},
        {path:'Contact' , element:<Contatct/>},
          {path:'portfolio' , element:<Portfolio/>},
          {path:'*' , element:<Notfound/>},
  ],},
])
function App(){
  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}
export default App
