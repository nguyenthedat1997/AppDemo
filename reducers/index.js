import countreducer from './appreducer';
import addtaskreducer from './appreducer';
import {combineReducers} from 'redux';

const allreducers = combineReducers({
    addtaskreducer,
});
export default allreducers;