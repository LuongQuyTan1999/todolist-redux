import * as types from './../constants/ActionTypes';
import randomstring from 'randomstring'

var data = JSON.parse(localStorage.getItem('tasks'));
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach( (task, index) => {
        if(task.id === id){
            return result = index
        }
    })
    return result
}
var initialState = data ? data : []

var tasksReducer = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL://*************  Show all list
            return state;
        case types.ADD_TASK: //*************  Add task list
            var task = {
                id : action.task.id,
                userName : action.task.userName,
                status : action.task.status
            }
            if(!task.id){
                task.id = randomstring.generate()
                state.push(task)
            }else{
                var index = findIndex(state, task.id)
                state[index] = task
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state];
        case types.UPDATE_STATUS_TASK: //*************  Update status
            var id = action.id
            var index = findIndex(state,id)
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
            
        case types.DELETED_TASK://*********************  Delate task
            var id = action.id
            var index = findIndex(state, id)
            state.splice(index,1)
            localStorage.setItem('tasks', JSON.stringify(state))
            return [...state]
        default: return state
    }
} 

export default tasksReducer