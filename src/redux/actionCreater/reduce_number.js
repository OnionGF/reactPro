

import {REDUCE_NUMBER} from '../TYPES'

 const reduce_number=()=>{
    console.log('3、actions里面的reduce方法执行，下一步进入store')
    return {
        type:REDUCE_NUMBER
    }
}

export default reduce_number