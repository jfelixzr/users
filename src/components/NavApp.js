import React from 'react'
import {Link} from 'react-router-dom'
const NavApp = ({searchMovie}) => {
    return (
        <>
        <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
 
  <button ClassName="navbar-toggler" type="button" data-toggle="collapse" data-target="anavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span ClassName="navbar-toggler-icon"></span>
  </button>

  <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
    <ul ClassName="navbar-nav mr-auto">
      <li ClassName="nav-item active">
        <Link ClassName="nav-link" to="/">Mostrar Usuarios </Link>
      </li>
      <li ClassName="nav-item">
        <Link ClassName="nav-link" to="/add">Agregar Usuarios</Link>
      </li>
     
     
     
     
    </ul>
  
  </div>
</nav>
</>
    )
}

export default NavApp