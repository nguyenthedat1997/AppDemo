import {INCREASE, DECREASE, ADDFOOD} from '../actions/actiontypes';

/*
const countreducer = (times=0, action)=>{
    switch (action.type) {
        case INCREASE :
            return times += action.step;
        case DECREASE :
            return times -= action.step;
        default : return times
    }
}*/
export const addfoodreducer = (name = '',action)=>{
    switch (action.type) {
        case ADDFOOD:
                name = action.foodnames;
        default:
            return name;
    }
}
export default addfoodreducer;