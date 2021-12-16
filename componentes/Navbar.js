import React, { useEffect, useState } from 'react';



export default function Navbar() {

    const [navbar, setNavbar] = useState(false);
    const [buscar, setBuscar] = useState(true);
    const [navlateral, setNavlateral] = useState(true);

    const cambiarFondoNavbar = () => {
        if (window.scrollY > 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', cambiarFondoNavbar);
    }, []);

    const buscarPanel = () => {
        setBuscar(!buscar);
    }

    const navegacionLateral = () => {
        setNavlateral(!navlateral);
    }

    return (
        <>
            <header className={navbar ? 'header active' : 'header'}>

                <a href="#" className="logo"> <i className="fas fa-hiking"></i> travel. </a>

                <nav className={navlateral ? 'navbar' : 'navbar active'}>
                    <div id="nav-close" className="fas fa-times" onClick={navegacionLateral}></div>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#shop">shop</a>
                    <a href="#packages">packages</a>
                    <a href="#reviews">reviews</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars" onClick={navegacionLateral}></div>
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <div id="search-btn" className="fas fa-search" onClick={buscarPanel}></div>
                </div>

            </header>

            <div className={buscar ? 'search-form' : 'search-form active'}>

                <div id="close-search" className="fas fa-times" onClick={buscarPanel}></div>

                <form action="">
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
            </div>

        </>
    )
}
