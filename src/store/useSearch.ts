import {create} from 'zustand'

interface State {
    searchData : string,
    searchDone:string
}

interface Action {
    onChange : (searchData:State['searchData']) => void
    onSubmit : (searchDone:State['searchDone']) => void
}

export const useSearch = create<State & Action>((set)=>({
    searchData: "",
    searchDone:"",
    onChange: (searchData)=> set(()=>({searchData : searchData})),
    onSubmit: (searchDone)=>set(()=>({searchDone : searchDone}))
}))