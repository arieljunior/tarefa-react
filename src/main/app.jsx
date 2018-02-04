//import 'modules/bootstrap/dist/css/bootstrap.min.css'
//import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import SelectorColor from '../selector_color/selector_color'
import SelectorSize from '../selector_size/selector_size'
import ConfirmPurchase from '../confirm_purchase/confirm_purchase'
import ViewProduct from '../view_product/view_product'
import Popup from '../template/popup'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {size:36}

        this.clickSize = this.clickSize.bind(this)
    }

    clickSize(e){
        this.setState(
            {
                ...this.state,
                size: e.target.value
            }
        )
    }

    render(){
        return (
            <div className='container'>
                <h2>Tênis Puma Tsugi Shinsei Raw</h2>
                <div className='row'>
                    <div className='col col-sm-6' >
                        <ViewProduct />
                    </div>

                    <div className="col col-sm-6 view-options">
                        <SelectorColor />
                        <SelectorSize clickSize={this.clickSize} />
                        <ConfirmPurchase size={this.state.size}/>
                    </div>
                    <Popup title='Compra efetuada com sucesso' mensage={'Tênis Puma tamanho '+this.state.size+' comprado com sucesso'}/>
                </div>
            </div>
        )
    }
}