
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
