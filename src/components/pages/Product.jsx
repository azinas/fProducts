import React, { Component } from 'react';
import axios from 'axios'


class Product extends Component
{
    constructor( props )
    {
        super( props );
        this.state = {
            article:{}
        }
    }

    componentDidMount ()
    {
        const { params } = this.props.match;
        axios.get( `http://roocket.org/api/products/${params.id}` )
            .then( res =>
            {
                this.setState( {
                    article:res.data.data,
                })
            } )
            .catch( err => {console.log( err )} )
        
    }

    render ()
    {
        const { article } = this.state;
        return (

            <div>
                <h2>عنوان مطلب : {article.title}</h2>
                <p>{article.body}</p>
            </div>
        )
    }
}

export default Product
