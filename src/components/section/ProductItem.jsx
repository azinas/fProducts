import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class ProductItem extends Component {
    render ()
    {
        const { product } = this.props
        return (
            <div className='col-lg-4' style={{ marginBottom: 20 }}>
                <div className='card'>
                    <img className='card-img-top' style={{height: 200}} src={product.image} alt="card cap"></img>
                    <div className='card-body'>
                        <h4 className='card-title'>{product.title}</h4>
                        <p className='card-text'>{product.body.substr(0,100)}...</p>
                        <Link className='btn btn-primary' to={`product/${product.id}`}>ادامه مطلب ...
                        </Link>
                    </div>
                </div>

                


                
            </div>
        )
    }
}

export default ProductItem
