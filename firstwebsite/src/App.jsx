import { Routes,Route } from 'react-router'
import ApiComponent from './ApiComponent'
import './App.css'
import BasicForm from './BasicForm'
import Crud from './Crud'
import Home from './Home'
import LifecycleClass from './LifecycleClass'
import LifecycleFunction from './LifecycleFunction'
import NavBar from './NavBar'
import UseContextExample from './UseContextExample'
import UseMemoExample from './UseMemoExample'
import UserCrud from './UserCrud'
import UseRefExample from './UseRefExample'

// lazy loading example
// import { lazy, Suspense } from 'react'
// const Home = lazy(() => import('./Home'))

function App() {
  return (
    <>
     <NavBar />
     {/* <BrowserRouter> */}
     <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/features' element={<BasicForm />}>
      <Route path='features1' element={<UserCrud />} />
      <Route path='features2' element={<ApiComponent />} />
      </Route>
      <Route path='/pricing' element={<Crud />} />
      </Routes>
     {/* </BrowserRouter> */}
     {/* <Suspense fallback={<div>Loading...</div>}>
     <Home />
     </Suspense> */}
     {/* <LifecycleClass /> */}
     {/* <LifecycleFunction /> */}
     {/* <Crud /> */}
     {/* <BasicForm /> */}
     {/* <UserCrud /> */}
     {/* <UseRefExample/> */}
     {/* <UseContextExample /> */}
     {/* <UseMemoExample /> */}
     {/* <ApiComponent /> */}
    </>
  )
}

export default App
