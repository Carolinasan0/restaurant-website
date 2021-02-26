import React from 'react';
import { Link } from 'react-router-dom';
import './Style/Menu.css';

function MenuF(props) {

    return (
        
        <section className="menu">
        <form action="" className="form" onSubmit={e => e.preventDefault()}>
          <label htmlFor="search" className="label">
            <input id="search" type="text" name="search" onChange={props.handleChange} placeholder="Buscar"/>
            <i className="fas fa-search"></i>
          </label>
        </form>
  
        {/* <div className="container-general-articles">
          <div className="general-articles"> */}
            {/* <div className="arrow"><i className="fas fa-chevron-left"></i></div> */}
            {/* <div className="articles">
              {props.list.map(e => {
                return (
                  <figure onClick={props.clickProducts} data-name={e.name} key={e.id}>
                    <div style={e.styles} data-name={e.name}></div>
                    <figcaption data-name={e.name}>{e.name}</figcaption>
                  </figure>
                )
              })}
            </div> */}
            {/* <div className="arrow"><i className="fas fa-chevron-right"></i></div> */}
          {/* </div>
        </div> */}
  
        <div className="list-of-items">
          {props.list.map(e => {
            return (
              <article key={e.id}>
                <figure style={e.styles}></figure>
                <div className="contents">
                  <h4>{e.name}</h4>
                  <p>{e.ingredients}</p>
                  <p>$ {e.price}</p>
                  <p>{props.amount[e.id]}</p>
                </div>
                <div className="button button-left" onClick={props.deduct} data-product={e.id}>
                  <div className="circle" data-product={e.id}>-</div>
                </div>
                <div className="button button-right" onClick={props.add} data-product={e.id}>
                  <div className="circle" data-product={e.id}>+</div>
                </div>
              </article>
            )
          })}
        </div>
        
        <div>
          <Link to="/send" className='to-shop-car'>
            <i className='fas fa-cart-arrow-down'></i>
            <p className="quantity">{props.totalAmount}</p>
          </Link>
        </div>
      </section>
    )
}

export default MenuF;
