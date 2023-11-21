import React,{useEffect,useState} from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom';
const Nav = () => {
    const [show, setShow] = useState(false);

    const transitionNavbar = () => {
        if(window.scrollY > 100){
            setShow(true);
        } 
        else {
            setShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",transitionNavbar);

        return () => window.removeEventListener("scroll",transitionNavbar);
    }, []);
    console.log(show);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
    <div className="nav__contents">
        <Link to="/">
        <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className="nav__logo"></img>
        </Link>
        <Link to="/profile">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className='nav__avatar'></img>
        </Link>
    </div>
    </nav>
  )
}

export default Nav