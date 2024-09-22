const initialState: any = {
    basket: [

    ]
}

const reduce2 = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT_BASKET": 
            return {...state, basket: [...state.basket, {...action.product, quantity: 1}]}
        case "DELETE_PRODUCT_BASKET":
            return {...state, basket: state.basket.filter((prod: any) => prod.id !== action.id)}
        case "INCREASE":
            return {...state, basket: state.basket.map((el: any) => action.id === el.id ? {...el, quantity: el.quantity + 1} : el) }
        case "DECREASE":
            const productToDecrease = state.basket.find((el: any) => el.id === action.id);
            if (productToDecrease && productToDecrease.quantity - 1 >= 0) {
                return {
                    ...state,
                    basket: state.basket.map((el: any) => action.id === el.id ? {...el, quantity: el.quantity - 1} : el)
                        };
                    }
            else {
                return {
                    ...state,
                    basket: state.basket.map((el: any) => action.id === el.id ? {...el, quantity: 0} : el)
                        };
            }
        default: 
            return state
    }
}

export default reduce2