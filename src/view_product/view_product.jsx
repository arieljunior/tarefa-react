import React from 'react'

export default props =>(
    <div className="card">
        <div className="card-body">
            <img src={props.path} alt="imagem do produto" title={props.title}/>
        </div>
    </div>
)