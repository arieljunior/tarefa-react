import React from 'react'

export default props =>{
    
    
    return (
    <figure className="figure">
        <img src={props.path} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure." title={props.title}/>
    </figure>
    )
}