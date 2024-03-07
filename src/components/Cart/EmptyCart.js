import React from 'react'
import cat from './lauf.jpg'
export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                  <h1>Your cart is currently empty!!</h1> 
                    <img src={cat} alt='cat' width={200}></img>
                  </div>
            </div>
        </div>
    );
}
