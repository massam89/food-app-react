import useInput from '../hooks/useInput'
import styles from './Form.module.css'

const Form = (props) => {

  const {
    enteredValue: enteredName,
    onChangeValue: onChangeName,
    reset: resetName,
    valueIsInValid: nameIsInValid,
    onBlurValue: onBlurName,
  } = useInput((value) => value.trim() !== "");
  
  const {
    enteredValue: enteredAddress,
    onChangeValue: onChangeAddress,
    reset: resetAddress,
    valueIsInValid: addressIsInValid,
    onBlurValue: onBlurAddress,
  } = useInput((value) => value.trim() !== "");

  const onCancelHandler = () => {
    props.onCancel()
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    resetAddress()
    resetName()

    props.onConfirm({name: enteredName, address: enteredAddress})
  }

  const formIsValid = !nameIsInValid && !addressIsInValid

  return (
    <form onSubmit={onSubmitHandler} className={styles.form}>
      <label htmlFor='name'>Name: {nameIsInValid && <span>Name is not valid</span>}</label>
      <input id='name' type='text' value={enteredName} onBlur={onBlurName} onChange={onChangeName} />
      <label htmlFor='address'>Address: {addressIsInValid && <span>Address is not valid</span>}</label>
      <input id='address' type='text' value={enteredAddress} onBlur={onBlurAddress} onChange={onChangeAddress} />

      <div className={styles.cancelConfirm}>
        <button onClick={onCancelHandler}>Cancel</button>
        {formIsValid && <button>Confirm</button>}
      </div>
    </form>
  )
}

export default Form