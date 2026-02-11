export const categoryitem =[
    {
        img:"/phones/iphone.png",
        title:"Mobiles",
        id:1,
    },
    {
        img:"/phones/notebook.png",
        title:"Laptops",
        id:2,
    },
    {
        img:"/phones/headsphone.png",
        title:"Headphones",
        id:3,
    }
    ,
    {
        img:"/phones/headsphone.png",
        title:"Headphones",
        id:4,
    }
    ,
    {
        img:"/phones/headsphone.png",
        title:"Headphones",
        id:5,
    }
]


export const categoryItems2 =[
    {
        img:"/products/trainers2.png",
        title:"Nike, Adidas",
        description:"MIN 40% OFF",
        id:1,
    },
    {
        img:"/products/game2.png",
        title:"PlayStation 5",
        description:"MIN 25% OFF",
        id:2,
    }
]

export interface CategoryItemType2{
    img:string;
    title:string;
    description:string;
    id:number;
}




export interface CategoryItemType {
    img:string;
    title:string;
    id:number
}





export const products =[
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:1,
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:2
    }
    ,
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:3
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:4
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:5
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:6
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:7
    },
    {
        img:"/phones/iphone.png",
        title:"Magnetic Case",
        discounted_price:"$13.49",
        original_price:"$18.99",
        rate: 4.5,
        id:8
    }
]


export interface ProductType extends CategoryItemType {
    rate:number;
    discounted_price:string;
    original_price:string;
}