import { BrowserRouter,Routes,Route,Link } from "react-router-dom";

function Routingg(){
   return(
      <>
      
         <BrowserRouter>
            <Link to="/">Home</Link> |
            <Link to="/about"> About</Link>

            <Routes>
               <Route path="/" element={<h3>Home page connected</h3>}></Route>
               <Route path="/about" element={<h3>About page connected</h3>}></Route>
            </Routes>
         </BrowserRouter>
         <hr />
         
      </>
   )
}

export default Routingg;