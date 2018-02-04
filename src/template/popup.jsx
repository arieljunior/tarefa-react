import React from 'react'

export default props =>(
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border border-success">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">{props.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>{props.mensage}</p>
                </div>
            </div>
        </div>
    </div>
)