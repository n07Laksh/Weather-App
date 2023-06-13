import React from 'react'

function Spinner() {
    return (
        <div style={{margin: "10px 0 0 -300px"}}>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Spinner
