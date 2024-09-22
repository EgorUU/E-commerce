import React, { FC, useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from './Product'
import BasketProduct from './BasketProduct'
import { Link } from 'react-router-dom'
const Basket: FC = () => {
    const dispatch = useDispatch()
    const basket = useSelector((state: any) => state.basket.basket)
    // const [finalPrice, setFinalPrice] = useState<number>(0)
    // const [amountGoods, setAmountGoods] = useState<number>(0)
    const input = useRef<any>(null)
    const input2 = useRef<any>(null)

    const finalPrice = useSelector((state: any) => 
        state.basket.basket.reduce((total: any, el: any) => total + (el.quantity * el.price), 0)
      ); 
      const amountGoods = useSelector((state: any) => 
        state.basket.basket.reduce((total: any, el: any) => total + (el.quantity), 0)
      ); 
    
    return (
        <section className='main'>
            <div className="main-container" style={{display: "flex", justifyContent: "space-between", padding: "20px 60px", alignItems: "start"}}>            
                <div className="row row-cols-1 row-cols-md-1 g-4" style={{maxWidth: "500px"}}>
                    {
                        basket.map((el: any) => (
                            <BasketProduct el={el} />
                        ))
                    }
                </div>
                <div className="basket-manage">
                <div className="card bg-dark" style={{width: "300px"}}>
                        <div className="card-header">
                            <h1 className="text-white">Меню</h1>
                        </div>
                        <div className="card-body">
                            <ul className="list-group bg-dark">
                                <li className="list-group-item bg-dark d-flex justify-content-between">
                                    <h1 className="text-white" style={{margin: "0"}}>Товары</h1>
                                    <h2 className="text-white" style={{margin: "0"}}>{amountGoods} шт</h2>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer d-flex justify-content-between">
                            <h1 className="text-white">Итого</h1>
                            <h2 className='text-white'>{finalPrice} ₽</h2>
                        </div>
                    </div>
                    <button className="btn btn-info" style={{width: "100%", marginTop: "7px"}}>Заказать</button>

                </div>
            </div> 
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
        </section>
    )
}

export default Basket