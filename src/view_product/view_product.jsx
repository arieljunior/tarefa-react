import React from 'react'

export default props =>{
    
    
    return (
    <figure className="figure">
        <img src={props.path} className="figure-img img-fluid rounded" title={props.title}/>
    </figure>
    )
}
