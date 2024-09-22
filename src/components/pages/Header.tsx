import React, { FC, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom' 
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useSelector } from 'react-redux';
const Header: FC = () => {
    const basketLen = useSelector((state: any) => state.basket.basket)
    const input = useRef<any>(null)
    const [inputValue, setInputValue] = useState<any>('')
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand w-sm-100">
                        <Link to="/">E_COMMERCE</Link>                        
                    </div>
                    
                    <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end row-lg" id="nav-collapse">
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" style={{margin: "5px",marginRight: "5px"}}><HiAdjustmentsHorizontal style={{transform: "translateY(-2px)"}} /></button>                        
                        <form action="" className="d-flex col-lg-7">
                            <input type="search" ref={input} className="form-control" style={{marginRight: "5px"}} placeholder='Поиск' onChange={(e: any) => setInputValue((prev: any) => e.target.value)} />
                            <Link to={`/search-title/${inputValue}`} className="btn btn-primary" onClick={() => console.log(input.current?.value)}>Поиск</Link>
                        </form>
                        <ul className="navbar-nav col-lg-4 d-lg-flex justify-content-lg-center">
                            <li className="nav-item"><Link to="/" className="nav-link text-white">Главная</Link></li>
                            <li className="nav-item"><Link to="/basket" className="nav-link text-white" style={{position: "relative"}}>
                                Корзина
                                <span className="position-absolute top-0 start-100 badge rounded-pill bg-danger" style={{fontSize: "9px", transform: "translate(-61%, 19%)"}} >
                                    {basketLen.length}
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link></li>
                            <li className="nav-item"><Link to="/profile" className="nav-link text-white">Профиль</Link></li>
                        </ul>
                    </div>
                    <button className="navbar-toggler bg-dark" data-bs-toggle="collapse" data-bs-target="#nav-collapse" aria-controls="nav-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    )
}

export default Header