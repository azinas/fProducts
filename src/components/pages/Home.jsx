import React, { Component } from 'react';
import Axios from 'axios';
import ProductItem from '../section/ProductItem'
import InfiniteScroll from 'react-infinite-scroller';

class Home extends Component
{
   constructor( props )
   {
      super(props);
      this.state= {
         articles: [],
         nextPage: 2,
         hasMore: true
      }
   }




   loadFunc = () =>
   {
      Axios.get( `http://roocket.org/api/products?page=${this.state.nextPage}` )
         .then( res =>
         {
            const { current_page, last_page, data } = res.data.data;
            this.setState( prevState =>({
               articles: [...prevState.articles, ...data],
               hasMore: current_page === last_page ? false : true,
               nextPage: current_page + 1   
            } ))
         } )
         .catch( err =>
         {
            console.log( err );
         } )
      
   }

    render() {
        return (
            <div>
                <div className=' jumbotron rtl'> 
                    <h1> محصولات</h1>
                     <hr></hr>
                 <p></p>
              </div>

              
            <InfiniteScroll
                    className='col row rtl'
                    pageStart={1}
                    loadMore={this.loadFunc}
                    hasMore={this.state.hasMore}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                 >
                    {this.state.articles.map( ( product, index ) => <ProductItem product={product} key={index} /> )}
            </InfiniteScroll>   
                
            </div>
            
        )
    }
}

export default Home
