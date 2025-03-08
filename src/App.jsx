import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Output from "./Components/Output"
import {useState} from "react"

function App() {

  const [inputValues, setInputValue] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,    
      })
      
      function handleInput (inputId, newValue){
        setInputValue(previnputValues => {
            return{
                ...previnputValues,
                [inputId]: +newValue, //o simbolo "+" antes do valor, certifica que ele é convertido para numero
            }
        })
    }    

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInput} currValues={inputValues} />
      <Output inputData={inputValues} />

    </>
    
  )
}

export default App
