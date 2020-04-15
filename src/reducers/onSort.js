import * as types from './../constants/ActionTypes';
var initialState = {
    sortName : 'userName',
    sortValue : 1
}

var onSort = (state = initialState, action) => {
    switch(action.type){
        case types.ON_SORT:
            return {
                sortName : action.sort.sortName,
                sortValue : action.sort.sortValue
            }
        default: return state
    }
} 

export default onSort