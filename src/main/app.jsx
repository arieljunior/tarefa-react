import '../../node_modules/jquery/dist/jquery'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/jquery/src/jquery'
import React from 'react'

import SelectorColor from '../selector_color/selector_color'
import SelectorSize from '../selector_size/selector_size'
import ConfirmPurchase from '../confirm_purchase/confirm_purchase'
import ViewProduct from '../view_product/view_product'
import Popup from '../template/popup'

import Data from '../../products_json/tenis_puma.json'


export default class App extends React.Component {
    constructor(props){
        super(props)
        console.log(Data.dimensionsMap["Tamanho"]);
        
        this.state = {
            field: {
                sizeSelected: Data.skus[0].dimensions["Tamanho"],
                idSelected: Data.skus[0].sku            
            },
            sizes: Data.dimensionsMap["Tamanho"]
        }
        
        this.handleChangeSize = this.handleChangeSize.bind(this)
    }

    handleChangeSize(event){
        var sizeValue = event.target.value
        var index = this.state.sizes.indexOf(sizeValue.toString())

        this.setState({...this.state, field:{sizeSelected: sizeValue, idSelected: Data.skus[index].sku} })
        //this.setState({...this.state, sizeSelected: sizeValue})
    }


    render(){
        return (
            <div className='container'>
                <h2>{Data.name}</h2>
                <small>Produto ID: {Data.productId}</small>
                <div className='row'>
                    <div className='col col-sm-6' >
                        <ViewProduct path={Data.skus[0].image} title={Data.name} />
                    </div>

                    <div className="col col-sm-6 view-options">
                        <SelectorColor />
                        <SelectorSize handleChangeSize={this.handleChangeSize} sizes={this.state.sizes}/>
                        <ConfirmPurchase size={this.state.field.sizeSelected}/>
                    </div>
                     
                    <Popup title='Compra efetuada com sucesso' 
                        name={Data.name } 
                        size={this.state.field.sizeSelected} 
                        cod={this.state.field.idSelected } />
                </div>
            </div>
        )
    }
}