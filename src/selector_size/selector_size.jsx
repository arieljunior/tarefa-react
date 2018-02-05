import React from 'react'
import Subtitulo from '../template/subtitulo'

export default props => {

    //console.log(props.sizes)
    

    var indents = [];

    for (var i = 0; i < props.sizes.length; i++) {
        indents.push(
            <li className="list-inline-item" key={i}>
                <button type="button" className="btn btn-outline-secondary" value={props.sizes[i]} onClick={props.handleChangeSize}>
                    {props.sizes[i]}
                </button>
            </li>
        );
    }


    return (
        <div className="col-11 selector-size">
            <Subtitulo titulo="Selecione um tamanho"/>

            <ul className="list-inline">
                {indents}
            </ul>
        </div>
    )
}