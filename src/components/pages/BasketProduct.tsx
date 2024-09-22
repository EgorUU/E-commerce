import React, { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaBasketShopping } from 'react-icons/fa6'
import { HiArchiveBoxXMark } from "react-icons/hi2"
const BasketProduct: FC<any> = ({ el }) => {
    const addProductBasket = (el: number) => {
        dispatch({type: "ADD_PRODUCT_BASKET", product: el})
    }
    const deleteProductBasket = (id: any) => {
        dispatch({type: "DELETE_PRODUCT_BASKET", id: id})
    }
    const dispatch = useDispatch()
    const [basketActive, setBasketActive] = useState<boolean>(false)     
    return (
        <div className="card mb-3 text-bg-dark border-dark" style={{paddingLeft: "0"}}>
            <div className="row g-0" style={{padding: "0"}}>
                <div className="col-md-4"><img style={{height: "100%"}} className="img-fluid rounded-start" src={el.image} alt="product-image" /></div>
                <HiArchiveBoxXMark style={{position: "absolute", top: "22px", left: "444px", width: "20px", cursor: "pointer" }} onClick={() => {
                    dispatch({type: "DELETE_PRODUCT_BASKET", id: el.id})
                    dispatch({type: "DELETE_PRODUCT_IN_BASKET", id: el.id})
                }} />
                <div className="card-body col-md-8">
                    <b className="card-title" style={{fontSize: "20px"}}>{el.title}</b>
                    <h1 className="card-title" style={{margin: "7px 0"}}>{el.price} ₽   <span style={{color: "gray", fontSize: "12px"}}className="text-decoration-line-through">{el.lastPrice} ₽</span></h1>
                    <p className="card-text">{el.description}</p>
                </div>
                <div className="card-footer col-md-12 d-flex justify-content-center">
                    <div className="badge bg-dark card-title" style={{margin: 0, cursor: "pointer"}} onClick={() => {
                        dispatch({type: "DECREASE", id: el.id})

                    }}><h1 style={{margin: "0", fontSize: "20px"}}>-</h1></div>
                    <div className="card-title" style={{margin: "0", display: "flex", alignItems: "center"}}><h1 className="text-white" style={{margin: "0 30px", fontSize: "20px"}}>{el.quantity}</h1></div>
                    <div className="badge bg-dark card-title" style={{margin: 0, cursor: "pointer", fontSize: "20px"}} onClick={() => {
                        dispatch({type: "INCREASE", id: el.id})
    
                    }}><h1 style={{margin: "0", fontSize: "20px"}}>+</h1></div>
                </div>
            </div>
        </div>
    )
}

export default BasketProduct


// if (basketActive) {
//     deleteProductBasket(el.id)
//     setBasketActive(false)
// }
// else {
//     addProductBasket(el)
//     setBasketActive(true)
// }