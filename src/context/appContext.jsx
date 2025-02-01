import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider =(props)=>{
    const phone = '+916295000750';
    const name = 'Arijit Kabiraj';
    return(
        <AppContext.Provider value={[phone, name]}>
        {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider;