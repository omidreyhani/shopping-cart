import React from 'react';


const CartItem =  ({name,price, picture,removeItem,count})=>(

        <div className='col-xs-6 col-md-3'>
<div className="panel panel-info">
  <div className="panel-heading text-center">
    <h3 className="panel-header"><strong>{name}</strong></h3>
  </div>
  <div className="panel-body"><img alt={name} style={{width:'200px'}} className="center-block" src={picture || 'no_image_available.png'}/></div>
  <div className="panel-footer">
    <div className="">Price:{price}</div>
    <div className="">Count:{count}</div>
    <div className=""><span>Remove from cart</span><button onClick={removeItem} style={{marginLeft:'6px'}}> <i className="glyphicon glyphicon-remove"></i></button>
            </div>


  </div>
      </div>
            </div>
);
export default CartItem;
