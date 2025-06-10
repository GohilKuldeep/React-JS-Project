import './App.css'
import COuterComponent from './COuterComponent'
import UserCrudComponent from './CrudToolKIt/UserCrudComponent'
import CounterComponent from './RTK/CounterComponent'

function App() {

  return (
    <>
      <h1>Redux toolkit Example</h1>
      {/* <CounterComponent /> */}
      <UserCrudComponent />
    </>
  )
}

export default App
