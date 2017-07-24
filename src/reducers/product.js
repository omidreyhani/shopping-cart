import * as actionTypes from '../constants/actionTypes';

export const productReducer= (state=null, action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEM:
            return state;
        default:
            return state;
    }
    return state;
}

