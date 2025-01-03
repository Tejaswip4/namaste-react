import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    // let btnName = "Login"

    let [login, setlogin] = useState('Login')
    return (
        <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact US</li>
                <li>Cart</li>
                <button className="login" 
                        onClick={() => {
                        // btnName = 'logout';
                        login === 'Login' ? setlogin('logout') : setlogin('Login')
                        // console.log(btnName);
                }}>{login}</button>
            </ul>
        </div>
        </div>
        
    )
}

export default Header;