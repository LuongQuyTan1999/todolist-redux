import * as types from './../constants/ActionTypes';
var initialState = {
    id : '',
    userName : '',
    status : false
}

var updateElement = (state = initialState, action) => {
    switch(action.type){
        case types.ONUPDATE_ELEMENT:
            state = action.task
            return state
        default: return state
    }
} 

export default updateElement