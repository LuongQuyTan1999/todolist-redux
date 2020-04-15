import * as types from './../constants/ActionTypes'

var initialState = {
    userName : '',
    status : -1
}

var onFilter = (state = initialState, action) => {
        switch (action.type) {
            case types.ONFILTER_TABLE:
                var filter = {
                    userName : action.filter.userName,
                    status : parseInt(action.filter.status)
                }
                return state = filter
            default: 
                return state
        }
}
export default onFilter