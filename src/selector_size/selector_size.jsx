import React from 'react'
import Subtitulo from '../template/subtitulo'

export default props => (
    <div className="col-11 selector-size">
        <Subtitulo titulo="Selecione um tamanho"/>

        <ul className="list-inline">
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="36" onClick={props.clickSize}>36</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="37" onClick={props.clickSize}>37</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="38" onClick={props.clickSize}>38</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="39" disabled>39</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="40" onClick={props.clickSize}>40</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="41" disabled>41</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="42" onClick={props.clickSize}>42</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="43" onClick={props.clickSize}>43</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="44" disabled>44</button>
            </li>
            <li className="list-inline-item">
                <button type="button" className="btn btn-outline-secondary" value="45" disabled>45</button>
            </li>
        </ul>
    </div>
)