import React, {PureComponent} from 'react';
import CartItem from '../components/CartItem';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addItem} from '../actions';

class Cart extends PureComponent
{
    render(){
        const {cart,addItem} = this.props;
        return (<div className='row'>
            {cart && cart.map(item=><CartItem key={item.id} {...item}  addItem={()=> addItem(item)}/>) }
            </div>);
    }
}

Cart.propsType={
    items:PropTypes.array.isRequired
}

const mapStateToProps=(state)=> ({cart:state.cart}); const mapDispatchToProps=()=>({addItem});

export default connect(mapStateToProps,mapDispatchToProps)(Cart);
