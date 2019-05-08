
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
export const addfoodAction  = (name,key,arrayfood)=>{
    return{
        type : ADDFOOD,
        arrayfood : arrayfood,
        name : name,
        key : key
    }
}