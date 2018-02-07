import React from 'react'

export default props =>(
    <div className="title">
        <h3 className="h3">{props.name}</h3>
        <p className="product-id">ID: {props.id}</p>
    </div>
)