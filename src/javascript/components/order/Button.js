

import React from 'react'

//无状态组件
//需要引入react   因为下面写的是jsx语法
const Button = (props)=>{
    return <button onClick={props.handler||function(){}}>{props.children||'按钮'}</button>
}


export default Button