import React from 'react';


export default class Item extends React.Component
{
    render(){
        const {name,price, picture,addItem} = this.props;

        return <div className='col-xs-6 col-md-3'>
<div className="panel panel-info">
  <div className="panel-heading text-center">
    <h3 className="panel-header"><strong>{name}</strong></h3>
  </div>
  <div className="panel-body"><img alt={name} style={{width:'200px'}} className="center-block" src={picture || 'no_image_available.png'}/></div>
  <div className="panel-footer">
    <div className="">Price:{price}</div>
    <div className=""><span>Add to cart</span><button onClick={ addItem} style={{marginLeft:'6px'}}> <i className="glyphicon glyphicon-plus"></i></button>
            </div>


  </div>
      </div>
            </div>;
    }
}

