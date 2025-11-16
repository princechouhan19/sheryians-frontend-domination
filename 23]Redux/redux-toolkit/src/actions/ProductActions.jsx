import axios from 'axios';
import { getproducts } from '../store/reducers/ProductReducer';
import { useDispatch } from 'react-redux';


export const asyncgetproducts = ()=> async (dispatch , getState) =>{
    console.log('Current State:', getState());
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        // console.log('Fetch successful:', response.data);
        dispatch(getproducts(response.data));
    } catch (error) {
        console.log('Fetch error:', error);
    }
}