import React from 'react'
import { Link } from "react-router-dom";
import './Style/PageProd.css'

function PageProd(props) {
    return (
        <section className="pageProd">
          <div className="title">
            <h1>Mi carrito</h1>
            {/* <i class="fas fa-cart-arrow-down"></i> */}
          </div>
    
          <div className="message-container">
            <div className="message">
              <h2>Recuerda:</h2>
              <p>Tu orden será enviada a nuestro whatsapp en donde hablaremos sobre la entrega y el pago.</p>
            </div>
          </div>
    
          <div className="articles">
            {props.shopList.map((item, idx) => {
                return (
                <div className="article-container" key={item.id}>
                    <article>
                        <figure style={item.styles}></figure>
                            <div className="contents">
                                <h4>{item.name}</h4>
                                {/* <p>{item.ingredients}</p> */}
                                <p>$ {item.price}</p>
                                <p>{props.carValues[idx]}</p>
                            </div>
                            <div className="button button-left" onClick={props.deduct} data-product={item.id}>
                            <div className="circle" data-product={item.id}>-</div>
                            </div>
                            <div className="button button-right" onClick={props.add} data-product={item.id}>
                            <div className="circle" data-product={item.id}>+</div>
                            </div>
                    </article>
                </div>
          )
        })}
          </div>
    
          <div className="resume">
            <div>
              <Link  to="/menu">
                <p>Agregar más productos</p>
              </Link>
            </div>
      
            <div>
              {/* <div className="row">
                <p>Envío ()</p>
              </div> */}
              <div className="row">
                <p>Total (Sin envío)</p>
                <p>$ {props.total}</p>
              </div>
            </div>
      
            <div>
              <a href={`https://api.whatsapp.com/send?phone=${props.phone}&text=${props.order}`}>
                <p>Confirmar orden</p>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
        </div>
      </section>
    )
}

export default PageProd;
