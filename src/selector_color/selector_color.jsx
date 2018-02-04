import React from 'react'
import Subtitulo from '../template/subtitulo'

export default props => (
    <div className="col-11 selector-color">
        <Subtitulo titulo="Selecione uma cor"/>
        <ul className="list-inline">
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-primary btn-sm">azul</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-dark btn-sm">preto</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-warning btn-sm">Amarelo</button>
            </li>
        </ul>
    </div>
)