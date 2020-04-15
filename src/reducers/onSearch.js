import * as types from './../constants/ActionTypes'

var initialState = {
    key : ''
}

var onSearch = (state = initialState, action) => {
        switch (action.type) {
            case types.ON_SEARCH:
                state = action.key
                return state
            default: 
                return state
        }
}
export default onSearch