import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='container-fluid p-3'>
        <div className='row'>
            <div className='col-md-3 text-success'>
            <Link to="/"><h3><i class="fa-sharp fa-solid fa-book" style={{color: "#63E6BE"}}></i>Ebooks</h3></Link>
            </div>
            <div className='col-md-6'>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>

            <div className='col-md-3'>
                <Link to="/login" className='btn btn-success'><i className='fas fa-sign-in-alt'></i> Login</Link><span>&nbsp;&nbsp;</span>
                <Link to="/register" className='btn btn-primary'><i className='fas fa-user-plus'></i> Register</Link>
            </div>

        </div>
    </div>
    </>
  )
}
