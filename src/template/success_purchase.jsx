import React from 'react'

export default props =>(

    
<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="alert alert-success">
        <div className="modal-header">
          <h5 className="alert-heading" id="exampleModalLongTitle">{props.title}</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
          <hr />
          <p className="mb-0">{props.name} - {props.size}</p>
          <p className="mb-0">Codigo do produto: {props.cod}</p>
        
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Confirmar</button>
        </div>
      </div>
    </div>
  </div>
)