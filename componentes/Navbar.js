
export default function Navbar() {
    return (
        <>
            <header className="header">

                <a href="#" className="logo"> <i className="fas fa-hiking"></i> travel. </a>

                <nav className="navbar">
                    <div id="nav-close" className="fas fa-times"></div>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#shop">shop</a>
                    <a href="#packages">packages</a>
                    <a href="#reviews">reviews</a>
                    <a href="#blogs">blogs</a>
                </nav>

                <div className="icons">
                    <div id="menu-btn" className="fas fa-bars"></div>
                    <a href="#" className="fas fa-shopping-cart"></a>
                    <div id="search-btn" className="fas fa-search"></div>
                </div>

            </header>

            <div className="search-form">

                <div id="close-search" className="fas fa-times"></div>

                <form action="">
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label htmlFor="search-box" className="fas fa-search"></label>
                </form>
            </div>

        </>
    )
}
