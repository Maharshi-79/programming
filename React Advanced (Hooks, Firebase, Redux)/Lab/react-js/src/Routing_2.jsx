import { BrowserRouter,Routes,Route,Link, Router } from "react-router-dom";
import './Routing_2.css';

function Home(){
    return(
    <h2>Home Page</h2>
    )
}

function About(){
    return(
    <h2>About Page</h2>
    )
}

function Contact(){
    return(
    <h2>Contact Page</h2>
    )
}

function Nav(){
    return(
    <>
        <BrowserRouter>
            <nav>
                <Link to="/" className="link">Home</Link> { " " }
                <Link to="/About" className="link">About</Link> { " " }
                <Link to="/Contact" className="link">Contact</Link> 
            </nav>

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
        <hr />
    </>
    )
}

export default Nav;