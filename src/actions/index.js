import * as actionTypes from '../constants/actionTypes';

export const addItem=(item)=>(dispatch,getState)=>{
    console.log(arguments);
       dispatch({
            type:actionTypes.ADD_ITEM,
            item:item
        });
}

