

import {ADD_NUMBER} from '../TYPES'

 const add_number=()=>{
    console.log('3、actions里面的add方法执行，下一步进入store')
    return {
        type:ADD_NUMBER
    }
}

export default add_number