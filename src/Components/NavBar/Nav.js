import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"

const Nav = ({cart}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/Bienvenidos">Bienvenidos</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Guitarras
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/guitarras/electricas">Electrica</Link></li>
                  <li><Link className="dropdown-item" to="/guitarras/acusticas">Acustica</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/guitarras/criollas">Criollas</Link></li>
                </ul>
              </li>
            </ul>
            <CartWidget cart={cart}/> 
          </div>
        </div>
      </nav>
    )
}

export default Nav

