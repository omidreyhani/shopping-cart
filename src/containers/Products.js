import React, {PureComponent} from 'react';
import Item from '../components/Item';
import PropTypes from 'prop-types';
import {addItem} from '../actions';
import {connect} from 'react-redux';

class Products extends PureComponent
{
    render(){
        const {products, addItem} = this.props;
        return (<div className='row'>
            {products && products.map(item=><Item key={item.id} {...item} addItem={()=> addItem(item)} />)}
            </div>);
    }
}

Products.propsType={
    items:PropTypes.array.isRequired,
    addItem:PropTypes.array.isRequired
}

const mapStateToProps=(state)=> ({products:state.products});
const mapDispatchToProps=(dispatch)=> ({addItem:(id)=>addItem(id)(dispatch)});

export default connect(mapStateToProps,mapDispatchToProps)(Products);
