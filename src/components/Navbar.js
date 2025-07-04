  import React from 'react'
  import { Link,useNavigate } from 'react-router-dom'
  export default function Navbar() {
    const navigate=useNavigate()
    let handlelogout=()=>{
      localStorage.removeItem("authtoken")
      navigate('/')
    }
    return (
      <> 
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
    <div className="container-fluid">
      <Link className="navbar-brand fs-1 fsi-italic" to="/">FOOD ZONE</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mt-2">
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
          </li>
          {(localStorage.getItem("authtoken"))?
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
          </li>:""}
        </ul>
        {(localStorage.getItem("authtoken"))?
      <div className='d-flex'>
        <div>
        <Link className="btn bg-white mx-1 text-success" to="/">My Cart</Link>
        <Link className="btn bg-white mx-1 text-success"  onClick={handlelogout}>Logout</Link>
        </div>
      </div>:
        <div>
          <Link className="btn bg-white mx-1 text-success" to="/login">Login</Link>
          <Link className="btn bg-white mx-1 text-success" to="/createuser">Signup</Link>
        </div>
      }
      </div>
    </div>
  </nav>  
      </div>
      </>
    )
  }
