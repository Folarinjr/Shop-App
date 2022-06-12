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
} from './types'

//Get shops from backend
export const getShops = () => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/shops');
        const data = await res.json();

        dispatch({
            type: GET_SHOPS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPS_ERROR,
            payload: error.response.data
        })
    }
}

//Add shop to the backend and Ui
export const addShop = (shop) => async dispatch => {
    try {
        setLoading();
        const res = await fetch('/shops', {
            method: 'POST',
            body: JSON.stringify(shop),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_SHOP,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPS_ERROR,
            payload: error.response.data
        })
    }
}

//Delete Shop
export const deleteShop = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`/shops/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_SHOP,
            payload: id
        });
    } catch (error) {
        dispatch({
            type: SHOPS_ERROR,
            payload: error.response.data
        })
    }
}


//Update Shop on backend and ui
export const updateShop = (shop) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/shops/${shop.id}`, {
            method: 'PUT',
            body: JSON.stringify(shop),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: UPDATE_SHOP,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPS_ERROR,
            payload: error.response.data
        })
    }
}

//Search Shops
export const searchShops = (text) => async dispatch => {
    try {
        setLoading();
        const res = await fetch(`/shops?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_SHOPS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SHOPS_ERROR,
            payload: error.response.data
        })
    }
}

//set current shop
export const setCurrent = shop => {
    return {
        type: SET_CURRENT,
        payload: shop
    }
}

//Clear current shop
export const clearCurrent = shop => {
    return {
        type: CLEAR_CURRENT
    }
}

//set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
}