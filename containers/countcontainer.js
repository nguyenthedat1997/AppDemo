import {increaseAction, decreaseAction, addfoodAction} from '../actions';
import {connect} from 'react-redux';
import Home from '../components/HomeScreen';

const mapStateToProps = (state)=>{
    return{
        times : state.countreducer ? state.countreducer : 0,
        arrayfood : state.addfoodreducer ? state.addfoodreducer : []
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

const Countcontainer = connect(mapStateToProps,mapDispatchToProps)(Home);
export default Countcontainer;
