import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const MainProduct: FC = () => {
    const products = useSelector((state: any) => state.products.products)
    const params = useParams()
    useEffect(() => {
        console.log(params.id)
        console.log(products)
        
    }, [])
    return (
        <section className="main-product">
            <div className="main-product-container">
                {
                    products.map((el: any) =>
                        el.id == params.id && (
                            <div className="card mb-3 bg-dark" style={{maxWidth: '1250px', margin: "40px"}}>
                                <div className='row g-0'>
                                    <div className="card-header col-6" style={{padding: "0"}}>
                                        <div className="card-img">
                                            <img src={el.image} style={{height: "688px"}}/>
                                        </div>
                                    </div>
                                    <div className="card-body col-4" style={{paddingLeft: "30px"}}>
                                        <h1 className="text-white" style={{marginBottom: "30px", fontSize: "50px"}}>{el.title}</h1>
                                        <h1 className="text-white fs-3" style={{marginBottom: "30px"}}>{el.price} ₽   <span style={{color: "gray", fontSize: "17px"}} className="text-decoration-line-through">{el.lastPrice} ₽</span></h1>
                                        <h1 className="text-white fs-5" style={{marginBottom: "30px"}}>{el.description}</h1>
                                        <Link to="/order" className="btn btn-danger btn-lg">Заказать</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </section>
    )
}

export default MainProduct