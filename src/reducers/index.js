import { combineReducers } from 'redux';
import tasks from './tasks'
import isDisplayForm from './isdisplayForm'
import updateElement from './onUpdateElement'
import onFilter from './onFilterTable'
import onSearch from './onSearch'
import onSort from './onSort'

const myReducer = combineReducers({
    tasks,
    isDisplayForm,
    updateElement,
    onFilter,
    onSearch,
    onSort
})  

export default myReducer