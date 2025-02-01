import { useContext } from "react";
import { AppContext } from "../context/appContext";


function Footer(){
    const [phone, name] = useContext(AppContext);
    return(
        <>
        <h1>Footer</h1>
        <h3>Phone: {phone}</h3>
        <h3>Name: {name}</h3>
        </>
    )
}

export default Footer;