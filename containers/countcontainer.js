import {increaseAction, decreaseAction} from '../actions';
import {connect} from 'react-redux';
import Home from '../components/HomeScreen';
import countreducer from '../reducers/countreducer';

const mapStateToProps = (state)=>{
    return{
        times : state.countreducer ? state.countreducer : 0
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        onIncrease : (step)=>{
            dispatch(increaseAction(step));
        },
        onDecrease : (step)=>{
            dispatch(decreaseAction(step));
        }
    }
}

const countcontainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default countcontainer;