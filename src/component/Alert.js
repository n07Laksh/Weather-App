import React from 'react'

function Alert(props) {
    const txt = (w)=>{
        if(w==="danger") return w = "Error";
    }
    return (
       props.alert && <div className={`alert alert-${props.alert.mode}`} role="alert">
           <b>{txt(props.alert.mode)} </b>  {props.alert.msg}
        </div>
    )
}

export default Alert
