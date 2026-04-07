import { Link } from "react-router"

function Header() {
    return(
        <>
         <h1>Xudoyshukur</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
           <li>
            <Link to={"/projects"}>Projects</Link>
          </li>
           <li>
            <Link to={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
        </>
    )
}

export default Header;