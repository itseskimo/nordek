import './App.css'
import Navbar from './components/navbar/navbar'
import Form from './components/form/form'
import Cryptosearch from './components/cryptosearch/cryptosearch'

const App = () => {

  return (
    <div>
      <Navbar />
      <Form />
      <Cryptosearch />
    </div>
  )
}

export default App