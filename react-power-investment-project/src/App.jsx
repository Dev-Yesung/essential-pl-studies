import { useState } from "react";
import Header from "./components/header/Header.jsx"
import UserInput from "./components/input/UserInput.jsx"
import Results from "./components/table/Results.jsx";

const INITIAL_USER_INPUT_STATE = {
  "initialInvestment": 10000,
  "annualInvestment": 1200,
  "expectedReturn": 6,
  "duration": 10
};

function isInputValid(userInput) {
  return userInput.initialInvestment > 0 && userInput.annualInvestment > 0 && userInput.expectedReturn > 0 && userInput.duration > 0; 
}

function App() {
  const [userInput, setUserInput] = useState(INITIAL_USER_INPUT_STATE);
  function handleInputChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleInputChange} />
      {isInputValid(userInput) ? <Results userInput={userInput} /> : <p className="center">Please enter values greater than zero.</p>}
    </>
  )
}

export default App
