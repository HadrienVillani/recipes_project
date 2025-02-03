import { IButton } from "./Button.props"

export const Button = ({onClick,label, style}:IButton)=>{
    return <button onClick={onClick}className={`cursor-pointer bg-amber-600 hover:bg-amber-500 hover:border-amber-500 duration-500 border-amber-600 border-2 px-5 py-3 uppercase font-bold ${style}`}>{label}</button>
}