
import {ADD_NUMBER,REDUCE_NUMBER,RANDOM,MULTIPLY} from './TYPES'


const defaultState={
    num : 1
}
//reducer的作用就是接收一个state，返回一个新的state
const reducer = (state=defaultState,action) =>{
    let new_state = Object.assign({},state)
    switch(action.type){
        case ADD_NUMBER:
            console.log('4、进入store后，进入到reducer里面执行加法修改数据输出此时的num：'+new_state.num)
            new_state.num++;
            console.log('5、进行数据修改后，输出此时的num值：'+new_state.num) 
            return new_state;break;

        case REDUCE_NUMBER:
            console.log('4、进入store后，进入到reducer里面执行减法修改数据输出此时的num：'+new_state.num)
            new_state.num--;
            console.log('5、进行数据修改后，输出此时的num值：'+new_state.num)        
            return new_state;break; 
        
        case RANDOM:
            new_state.num=action.ran;
            console.log('random'+new_state.num)
            return new_state;break;

        case MULTIPLY:
            new_state.num*2;
            return new_state;break;


        default:
            return state;
    }

}

export default reducer