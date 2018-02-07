import React from 'react'
import Subtitulo from '../template/subtitulo'
import Info from '../template/info'

export default props => {
    
    var indents = [];

    for (var i = 0; i < props.sizes.length; i++) {

        if(props.withoutStock.indexOf(parseInt(props.sizes[i])) > -1){
            indents.push(
                <li className="list-inline-item" key={i}>
                
                    <button type="button" className="btn hover-info-btn" value={props.sizes[i]} onClick={props.handleChangeSize} disabled>
                        {props.sizes[i]}
                    </button>
                    <Info />
                </li>
            )
        }else{
            
            if(props.sizes[i] === props.sizeSelected){
                indents.push(
                    <li className="list-inline-item" key={i}>
                        <button type="button" className="btn bt-hover active" value={props.sizes[i]} onClick={props.handleChangeSize}>
                            {props.sizes[i]}
                        </button>
                    </li>
                )
            }else{
                indents.push(
                    <li className="list-inline-item" key={i}>
                        <button type="button" className="btn bt-hover" value={props.sizes[i]} onClick={props.handleChangeSize} >
                            {props.sizes[i]}
                        </button>
                    </li>
                )
            }
        }
        
    }


    return (
        <div className="col">
            <Subtitulo titulo="Tamanho" number={2}/>
            <ul className="list-inline">
                {indents}
            </ul>
        </div>
    )
}