import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaBasketShopping } from 'react-icons/fa6'
const Product: FC<any> = ({ el }) => {
    const addProductBasket = (el: any) => {
        dispatch({type: "ADD_PRODUCT_BASKET", product: el})
        dispatch({type: "ADD_PRODUCT_IN_BASKET", id: el.id})
    }
    const deleteProductBasket = (id: any) => {
        dispatch({type: "DELETE_PRODUCT_BASKET", id: id})
        dispatch({type: "DELETE_PRODUCT_IN_BASKET", id: id})
    }
    const dispatch = useDispatch()
    const [basketActive, setBasketActive] = useState<boolean>(false)
    useEffect(() => {
        console.log(basketActive)
    })
    return (    
        <div className="col h-270">
            <div className="card text-bg-dark border-dark">
                <img src={el.image} alt="product-image" className="card-img-top"  style={{height: "290px"}} />
                <div className="card-body">
                    <Link to={`/product/${el.id}`} className="card-title" style={{fontSize: "20px", cursor: "pointer"}}>{el.title}</Link>
                    <h1 className="card-title" style={{margin: "7px 0"}}>{el.price} ₽   <span style={{color: "gray", fontSize: "12px"}} className="text-decoration-line-through">{el.lastPrice} ₽</span></h1>
                    <p className="card-text d-inline-block text-truncate" style={{maxWidth: "207px"}}>{el.description}</p>
                    <FaBasketShopping title="Добавить в корзину" style={{position: "absolute", top: "313px", cursor: "pointer", left: "207px", fill: el.isBasket || basketActive ? "red" : ""}} onClick={() => {
                        console.log('Корзина')
                        if (el.isBasket) {
                            deleteProductBasket(el.id)
                            setBasketActive(false)
                        }
                        else {
                            addProductBasket(el)
                            setBasketActive(true)
                        }
                    }} />
                </div>
                <div className="card-footer bg-danger" style={{cursor: "pointer"}}>
                    {/* <button className="btn btn-danger">Заказать</button> */}
                    <h1 className='text-center' style={{height: "23px", margin: "0"}}>Заказать</h1>
                </div>
            </div>
        </div>
    )
}

export default Product