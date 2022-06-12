import {
    GET_SHOPS,
    SET_LOADING,
    SHOPS_ERROR,
    ADD_SHOP,
    UPDATE_SHOP,
    DELETE_SHOP,
    SET_CURRENT,
    CLEAR_CURRENT,
    SEARCH_SHOPS
} from '../actions/types'

const initialState = {
    shops: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_SHOPS:
            return {
                ...state,
                shops: action.payload,
                loading: false
            };
        case ADD_SHOP:
            return {
                ...state,
                shops: [...state.shops, action.payload],
                loading: false
            }
        case UPDATE_SHOP:
            return {
                ...state,
                shops: state.shops.map((shop)=> shop.id === action.payload.id ? action.payload : shop)
            }
        case SEARCH_SHOPS:
            return {
                ...state,
                shops: action.payload
            }
        case DELETE_SHOP:
            return {
                ...state,
                shops: state.shops.filter((shop)=> shop.id !== action.payload),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case SHOPS_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}