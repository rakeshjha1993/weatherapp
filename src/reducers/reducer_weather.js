import {FETCH_WEATHER} from '../actions/index';

export default function(state = [] , action){
    console.log(state)
    switch(action.payload){
        case FETCH_WEATHER : 
        
            return [action.payload.data, ...state];
    }


    return state;
}