
import {INCREASE, DECREASE, ADDTASK} from './actiontypes';

export const increaseAction = (step)=>{
    return{
        type : INCREASE,
        step : step
    }
}
export const decreaseAction = (step)=>{
    return{
        type : DECREASE,
        step : step
    }
}
let id = 0;
export const addtaskAction = (name)=>{
    return{
        type : ADDTASK,
        taskname : name,
        taskid : id++
    }
}
