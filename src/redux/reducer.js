
// import {ADD_NUMBER,REDUCE_NUMBER,RANDOM,MULTIPLY} from './TYPES'


const defaultState={
    num : 1
}
//reducer的作用就是接收一个state，返回一个新的state
const reducer = (state=defaultState,action) =>{
    let new_state = Object.assign({},state)
    switch(action.type){
      
    }

}

export default reducer