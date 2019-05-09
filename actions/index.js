
import {INCREASE, DECREASE, ADDFOOD} from './actiontypes';

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
let taskid = 0;
export const addtaskAction = (taskname)=>{
    return{
        type : ADDFOOD,
        taskid : taskid,
        taskname : taskname
    }
}
