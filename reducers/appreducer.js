import {INCREASE, DECREASE} from '../actions/actiontypes';


const countreducer = (times=0, action)=>{
    switch (action.type) {
        case INCREASE :
            return times += action.step;
        case DECREASE :
            return times -= action.step;
        default : return times
    }
}

export default countreducer;