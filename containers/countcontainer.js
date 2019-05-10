import {increaseAction, decreaseAction, addtaskAction} from '../actions';
import {connect} from 'react-redux';
import Home from '../components/HomeScreen';
import TaskManager from '../components/TaskManager';
const mapStateToProps = (state)=>{
    return{
        //times : state.countreducer ? state.countreducer : 0,
        task : state.addtaskreducer ? state.addtaskreducer : []
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onIncrease : (step)=>{
            dispatch(increaseAction(step));
        },
        onDecrease : (step)=>{
            dispatch(decreaseAction(step));
        },
        onAddtask : (name)=>{
            dispatch(addtaskAction(name));
        }
    }
}

const Countcontainer = connect(mapStateToProps,mapDispatchToProps)(TaskManager);
export default Countcontainer;
