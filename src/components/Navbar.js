import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { baseUrl } from '..'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to={baseUrl + "/"}>
                  <img className='mx-1' src="./logo192.png" alt="logo" style={{height:'25px'}}/>
                  NewsShark
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link" aria-current="page" to={baseUrl + "/"}>Home</Link>
                    </li>
                    <li className="nav-item dropdown" data-bs-theme='dark'>
                      <Link className="nav-link dropdown-toggle" to={baseUrl + "/categories"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={baseUrl + "/business"}>Business</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/entertainment"}>Entertainment</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/health"}>Health</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/science"}>Science</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/sports"}>Sports</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/technology"}>Technology</Link></li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown" data-bs-theme='dark'>
                      <Link className="nav-link dropdown-toggle" to={baseUrl + "/categories"} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Country
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to={baseUrl + "/aus"}>Australia</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/in"}>India</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/nz"}>New Zealand</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/uk"}>United Kingdom</Link></li>
                        <li><Link className="dropdown-item" to={baseUrl + "/usa"}>United States</Link></li>
                      </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
