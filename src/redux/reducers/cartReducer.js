import { ADD_TO_CART, REMOVE_FORM_CART } from "../actions/cartAction";

const initialState={
    cart:[],
    products:[
         { name: 'lenovo laptop',id: 1 },
    { name: 'Asus laptop',id: 2 },
    { name: 'HP laptop',id: 3 },
    { name: 'Dell laptop',id: 4 },
    { name: 'Toshiba laptop',id: 5 }
]

}

const cardReducer =(state = initialState,action) =>{

    switch(action.type){
        case ADD_TO_CART :
            console.log(action)
            const newItem={
                productId: action.id,
                name:action.name,
                cartId:state.cart.length+1
            }
            const newCart =[...state.cart,newItem]
            return{
                ...state,
                cart :newCart
                           
            };
        case REMOVE_FORM_CART :
            const id =action.id;
            const remainingCart =state.cart.filter(item=>item.cartId !==id)
            return  {...state,cart: remainingCart}
        default:
            return state;
    }

}
export default cardReducer;