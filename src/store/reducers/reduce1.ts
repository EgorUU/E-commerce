const initialState = {
    products: [
        {
            id: 1,
            title: "Iphone 11",
            price: 27764,
            lastPrice: 47000,
            description: "Ноутбук для работы и учебы",
            image: "https://basket-14.wbbasket.ru/vol2073/part207324/207324839/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 2,
            title: "Ноутбук 15.6",
            price: 27663,
            lastPrice: 99999,
            description: "Ноутбук 15.6 IPS 4-Ядра RAM 16G",
            image: "https://basket-13.wbbasket.ru/vol1960/part196048/196048385/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 3,
            title: "MacBook Pro 16 M1",
            price: 137298,
            lastPrice: 189563,
            description: "MacBook Pro 16 M1 Pro 16 512 (S",
            image: "https://basket-15.wbbasket.ru/vol2265/part226518/226518722/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 4,
            title: "Iphone 11",
            price: 49999,
            lastPrice: 65999,
            description: "It`s nice Phone!",
            image: "https://basket-16.wbbasket.ru/vol2597/part259702/259702754/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 5,
            title: "Н15И i5",
            price: 28667,
            lastPrice: 50702,
            description: "Ноутбук Н15И i5 10210U, 8 ГБ, 2",
            image: "https://basket-15.wbbasket.ru/vol2373/part237326/237326648/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 6,
            title: "SPARK 20 PRO",
            price: 12683,
            lastPrice: 15990,
            description: "SPARK 20 PRO 8+256GB Black",
            image: "https://basket-15.wbbasket.ru/vol2220/part222046/222046251/images/c516x688/3.webp",
            isBasket: false
        },
        {
            id: 7,
            title: "SPARK Go",
            price: 7417,
            lastPrice: 8170,
            description: "Смартфон SPARK Go 2024 4 128",
            image: "https://basket-15.wbbasket.ru/vol2212/part221214/221214759/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 8,
            title: "POVA 6 Neo",
            price: 14725,
            lastPrice: 17990,
            description: "POVA 6 Neo 256+8, Comet Green",
            image: "https://basket-16.wbbasket.ru/vol2422/part242268/242268755/images/c516x688/1.webp",
            isBasket: false,
        },
        {
            id: 9,
            title: "SPARK 20C",
            price: 70999,
            lastPrice: 19670,
            description: "SPARK 20C 8+128GB White",
            image: "https://basket-15.wbbasket.ru/vol2220/part222021/222021324/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 10,
            title: "Redmi Note 13",
            price: 15519,
            lastPrice: 18760,
            description: "Смартфон Redmi Note 13 8GB+2!",
            image: "https://basket-15.wbbasket.ru/vol2220/part222036/222036453/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 11,
            title: "POVA 6 Neo",
            price: 12340,
            lastPrice: 21880,
            description: "POVA 6 Neo 256+8, Comet Green",
            image: "https://basket-16.wbbasket.ru/vol2422/part242268/242268755/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 12,
            title: "Игровая приставка",
            price: 2160,
            lastPrice: 6800,
            description: "Игровая приставка для детей Gam",
            image: "https://basket-12.wbbasket.ru/vol1883/part188364/188364481/images/c516x688/1.webp"
        },
        {
            id: 13,
            title: "A Pods Pro 2",
            price: 1499,
            lastPrice: 3850,
            description: "Наушники беспроводные A Pods Pro 2 для",
            image: "https://basket-13.wbbasket.ru/vol2045/part204577/204577998/images/c516x688/2.webp",
            isBasket: false
        },
        {
            id: 14,
            title: "K55",
            price: 685,
            lastPrice: 1990,
            description: "Беспроводные наушники K55 ",
            image: "https://basket-15.wbbasket.ru/vol2401/part240143/240143133/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 15,
            title: "Наушники Xiaomi",
            price: 706,
            lastPrice: 9900,
            description: "Беспроводные наушники Bluetooth",
            image: "https://basket-12.wbbasket.ru/vol1710/part171064/171064186/images/c516x688/1.webp",
            isBasket: false
        },
        {
            id: 16,
            title: "MILLIANT ONE",
            price: 977,
            lastPrice: 2617,
            description: "Беспроводные вакуумные наушники",
            image: "https://basket-03.wbbasket.ru/vol408/part40836/40836819/images/c516x688/3.webp",
            isBasket: false
        }
    ]
}

const reduce1 = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_PRODUCT_IN_BASKET":
            return {...state, products: state.products.map((el: any) => el.id === action.id ? { ...el, isBasket: true } : el)}            
        case "DELETE_PRODUCT_IN_BASKET":
            return {...state, products: state.products.map((el: any) => el.id === action.id ? { ...el, isBasket: false } : el)}
        default: 
            return state;
    }
}

export default reduce1