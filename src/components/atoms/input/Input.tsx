import { IInput } from "./Input.props"

function Input({onChange, placeholder}:IInput) {
  return (
    <input onChange={onChange}className=" p-3 border-amber-600 bg-transparent rounded-l-md  duration-500 border-2"type="text" placeholder={placeholder}/>
  )
}

export default Input