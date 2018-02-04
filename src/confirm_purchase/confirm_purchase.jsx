import React from 'react'

export default props =>(
    <div className="card">
        <div className="card-body">
            <button type="button" className="btn btn-success bt-lg btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                COMPRAR <small>tamanho {props.size}</small>
            </button>
        </div>
    </div>
)