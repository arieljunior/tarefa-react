import React from 'react'

export default props =>(
    <div className="card">
        <div className="card-body">
            <p className="price">
                <span className="old-price">De: {props.old_price} </span>
                <span className="new-price"> {props.new_price}</span>
            </p>
            <button type="button" className="btn btn-success bt-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                COMPRAR 
                <small className="choices">tamanho: {props.size} cor: {props.color}</small>
            </button>
        </div>
    </div>
)