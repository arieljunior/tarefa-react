import '../../node_modules/jquery/dist/jquery'
import '../../node_modules/bootstrap/dist/js/bootstrap.min'
import '../../node_modules/jquery/src/jquery'

import React from 'react'

import SelectorColor from '../selector_color/selector_color'
import SelectorSize from '../selector_size/selector_size'
import Purchase from '../purchase/purchase'
import ViewProduct from '../view_product/view_product'
import Popup from '../template/success_purchase'
import Title from '../template/title'


import Data from '../../products_json/tenis_puma.json'


export default class App extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            field: {
                sizeSelected: Data.skus[0].dimensions["Tamanho"],
                idSelected: Data.skus[0].sku
            },
            sizes: Data.dimensionsMap["Tamanho"],
            withoutStock: [35, 40],
            colorField:{
                colorSelected: 'bege',
                colors: ['azul', 'preto', 'bege']
            }
        }
        
        this.handleChangeColor = this.handleChangeColor.bind(this)
        this.handleChangeSize = this.handleChangeSize.bind(this)
    }
    
    handleChangeSize(event){
        
        var sizeValue = event.target.value
        var index = this.state.sizes.indexOf(sizeValue.toString())
        
        this.setState({...this.state, field:{sizeSelected: sizeValue, idSelected: Data.skus[index].sku} })
        
    }

    handleChangeColor(event){
        this.setState({...this.state, colorField:{colorSelected: event.target.value, colors: this.state.colorField.colors} })
    }
    

    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col col-sm-6' >
                        <ViewProduct path={Data.skus[0].image} title={Data.name} />
                    </div>

                    <div className="col col-sm-6 view-options">
                        <Title name={Data.name} id={Data.productId}/>
                        <div className="choose">
                            <SelectorColor colors={this.state.colorField.colors} 
                                colorSelected={this.state.colorField.colorSelected} handleChangeColor={this.handleChangeColor}/>

                            <SelectorSize handleChangeSize={this.handleChangeSize} sizes={this.state.sizes} 
                            sizeSelected= {this.state.field.sizeSelected} withoutStock={this.state.withoutStock}/>
                        </div>
                        <Purchase size={this.state.field.sizeSelected}
                            old_price={Data.skus[0].listPriceFormated}
                            new_price={Data.skus[0].bestPriceFormated}
                            color={this.state.colorField.colorSelected}
                        />
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
