import { IButton } from "./Button.props"

export const Button = ({label}:IButton)=>{
    return <button className="cursor-pointer bg-amber-600 hover:bg-transparent duration-500 border-amber-600 border-2 px-5 py-4 rounded-r-md uppercase font-bold">{label}</button>
}