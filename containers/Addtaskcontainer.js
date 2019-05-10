import {addtaskAction} from '../actions';
import {connect} from 'react-redux';
import TaskManager from '../components/TaskManager';

const mapStateToProps = (state)=>{
    return{
        //task : state.addtaskreducer ? state.addtaskreducer : []
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onAddtask : (name)=>{
            dispatch(addtaskAction(name));
        }
    }
}

const Addtaskcontainer = connect(mapStateToProps,mapDispatchToProps)(TaskManager);
export default Addtaskcontainer;
