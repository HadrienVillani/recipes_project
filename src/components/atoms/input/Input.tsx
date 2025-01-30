import { IInput } from "./Input.props"

function Input({placeholder}:IInput) {
  return (
    <input className="p-4 bg-amber-600 rounded-l-md hover:bg-transparent duration-500 border-amber-600 border-2"type="text" placeholder={placeholder}/>
  )
}

export default Input