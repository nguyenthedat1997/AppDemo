import TaskList from '../components/TaskList';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>{
    return{
         task: state.addtaskreducer ? state.addtaskreducer : []
    }
}
const TaskListcontainer = connect(mapStateToProps)(TaskList);
export default TaskListcontainer;