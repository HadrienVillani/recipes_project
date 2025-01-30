import { IInput } from "./Input.props"

function Input({placeholder}:IInput) {
  return (
    <input type="text" placeholder={placeholder}/>
  )
}

export default Input