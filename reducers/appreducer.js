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
}
*/
const addfoodreducer = (arrayfood = [],key = 0, action)=>{
    switch (action.type) {
        case ADDFOOD: {
            let array = action.arrayfood;
                array.push({
                    foodname : action.name,
                    key : action.key+key+''
                });
                return arrayfood=array;
            }      
        default: return arrayfood;
    }
}
export default addfoodreducer;