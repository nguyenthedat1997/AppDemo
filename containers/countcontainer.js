import {increaseAction, decreaseAction, addfoodAction} from '../actions';
import {connect} from 'react-redux';
import Home from '../components/HomeScreen';
import componentFlatList from '../components/componentFlatList';

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
        },
        onAddfood : (name)=>{
            dispatch(addfoodAction(name));
        }
    }
}

const Countcontainer = connect(mapStateToProps,mapDispatchToProps)(componentFlatList);
export default Countcontainer;