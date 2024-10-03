'use client'
import { Fragment, useState } from "react"
import "./navbar.css"
import { Squeeze as Hamburger } from 'hamburger-react'
import Link from "next/link"


const Navbar = () => {

    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
    }

  return (
    <Fragment>
            <nav className="navbar ">
                <h1 className="purelyClean" >
                    <img src="/logo.jpg" className="max-w-24 p-2" />
                </h1>
                <div className="munuBarContainer">
                    <Hamburger toggled={isOpen} toggle={setOpen} size={25} />
                </div>
                {
                    <div className={` navlinkContainer ${isOpen ? '' : 'moveNavbar'}`}>
                        <div className="navLinks">
                            <Link className="linkText" href="/" onClick={handleOpen}>
                                Home
                            </Link>
                            <Link className="linkText" href="/about" onClick={handleOpen}>
                                About
                            </Link>
                            <Link className="linkText" href="/service" onClick={handleOpen}>
                                Services
                            </Link>

                            <Link className="linkText" href="/contact" onClick={handleOpen}>
                                Contact
                            </Link>

                        </div>
                    </div>}
            </nav>
        </Fragment>
  )
}

export default Navbar