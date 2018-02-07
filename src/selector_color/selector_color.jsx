import React from 'react'
import Subtitulo from '../template/subtitulo'

export default props => {

    var indents = [];

    for (var i = 0; i < props.colors.length; i++) {
            
            if(props.colors[i] === props.colorSelected){
                indents.push(
                    <li className="list-inline-item" key={i}>
                        <button type="button" className="btn btn-sm active" value={props.colors[i]} onClick={props.handleChangeColor}>
                            {props.colors[i]}
                        </button>
                    </li>
                )
            }else{
                indents.push(
                    <li className="list-inline-item" key={i}>
                        <button type="button" className="btn bt-hover btn-sm" value={props.colors[i]} onClick={props.handleChangeColor} >
                            {props.colors[i]}
                        </button>
                    </li>
                )
            }
        
    }


    return (
        <div className="col">
            <Subtitulo titulo="Selecione a cor" number={1}/>
            <ul className="list-inline">
                {indents}
            </ul>
        </div>
    )
}