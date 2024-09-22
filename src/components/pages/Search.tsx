import React, { FC, useState, useEffect, useRef } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux'
import Product from './Product';
import { Link, useParams } from 'react-router-dom';

const Search: FC = () => {
    const dispatch = useDispatch(
    )
    const params: any = useParams()
    const input = useRef<any>(null)
    const input2 = useRef<any>(null)
    useEffect(() => {
        console.log(params)
    }, [])
    const products = useSelector((state: any) => state.products.products)
    return (
        <section className='main'>
            <div className="main-container" style={{display: "flex", justifyContent: "center", padding: "20px", alignItems: "start"}}>
            <div className="offcanvas offcanvas-start bg-dark" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title text-white" id="offcanvasScrollingLabel">Фильтр</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <h1 className='text-white'>Цена В Рублях</h1>                    
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-white">От<input type="number" ref={input} className="bg-dark" style={{resize: "none", marginLeft: "60px", height: "100%"}}/></li>
                                <li className="list-group-item bg-dark text-white">До<input type="number" ref={input2} className="bg-dark" style={{resize: "none", marginLeft: "60px", height: "100%"}}/></li>
                            </ul>

                            <h1 className='text-white' style={{marginTop: "30px"}}>Срок Доставки</h1>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                    4-5 Дней
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                    2 Дня
                                </label>
                                </div>
                            </div>
                            <Link to={`/search/${Number(input.current?.value)}/${Number(input2.current?.value)}`} className="btn btn-warning">Искать</Link>
                        </div>
                        <div className="offcanvas-footer">
                            
                        </div>
                <div className="row row-cols-1 row-cols-md-4 g-4" style={{maxWidth: "1060px"}}>
                    {
                        products.map((el: any) => 
                            el.price >= params.arg1 && el.price <= params.arg2 && <Product el={el} /> 
                        )
                    }20 100
                </div>
            </div>
            
        </section>
    )
}

export default Search