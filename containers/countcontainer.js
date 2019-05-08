import {increaseAction, decreaseAction, addfoodAction} from '../actions';
import {connect} from 'react-redux';
import Home from '../components/HomeScreen';
import ComponentFlatList from '../components/ComponentFlatList';

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
        },
        onAddfood : (name,key,arrayfood)=>{
            dispatch(addfoodAction(name,key,arrayfood));
        }
    }
}

const Countcontainer = connect(mapStateToProps,mapDispatchToProps)(ComponentFlatList);
export default Countcontainer;