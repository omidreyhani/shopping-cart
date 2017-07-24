import * as actionTypes from '../constants/actionTypes';

export const cartReducer=(state=null, action)=>{
    switch(action.type){
        case actionTypes.ADD_ITEM:
            if(exist)
            {
                return  state.map(item){
                    if(item.id == action.item.id)
                    {
                        return item;
                    }
                    return item;
                }

            }
            return [...state, action.item];

        default:
            return state;
    }

}
