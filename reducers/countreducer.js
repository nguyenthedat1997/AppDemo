import {INCREASE, DECREASE} from '../actions/actiontypes';


const countreducer = (times=0, action)=>{
    switch (action.type) {
        case INCREASE :
            return ++times;
        case DECREASE :
            return --times;
        default:
            return times;
    }
}

export default countreducer;