import { useState } from "react"

const useInput = (validationRule) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const enteredValueIsValid = validationRule(enteredValue)
  const valueIsInValid = !enteredValueIsValid && isTouched

  const onChangeValue = (e) => {
    setEnteredValue(e.target.value)
  }

  const onBlurValue = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredValue('')
    setIsTouched(false)
  }

  return {enteredValue, onChangeValue, reset, valueIsInValid, onBlurValue}
}

export default useInput