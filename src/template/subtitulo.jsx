import React from 'react'

export default props => (
    <div className="">
        <h5 className="border-bottom">
            <span className="circle">{props.number}</span>
            {props.titulo}
        </h5>
    </div>
)