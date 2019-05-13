import {INCREASE, DECREASE, ADDTASK} from '../actions/actiontypes';


const countreducer = (times=0, action)=>{
    switch (action.type) {
        case INCREASE :
            return times += action.step;
        case DECREASE :
            return times -= action.step;
        default : return times
    }
}

const addtaskreducer = (task = [], action)=>{
    switch (action.type) {
        case ADDTASK: 
            return [
              ...task,
              {
                taskname: action.taskname,
                id: action.taskid
              }
            ]
        default : return task;
    }
}
export default addtaskreducer;
