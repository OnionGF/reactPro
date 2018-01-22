

import add_number from './actionCreater/add_number'
import reduce_number from './actionCreater/reduce_number'
import random from './actionCreater/random'
import store from './store'
const actions = {

        addNumber(){
            //创建action 并传入reducer
            console.log('2、点击加好按钮后，调用actions里面的add方法')
            let action = add_number();
            store.dispatch(action)
        },
        reduceNumber(){
            //创建action 并传入reducer
            console.log('2、点击减号按钮后，调用actions里面的reduce方法')
            let action = reduce_number();
            store.dispatch(action)
        },
        random_number(){
            let ran=Math.random();
            console.log('2、点击减号按钮后，调用actions里面的reduce方法')
            store.dispatch(random(ran))
        }
}

export default actions