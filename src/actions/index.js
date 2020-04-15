import * as types from './../constants/ActionTypes'

export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
}
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}
export const updateStatusTask = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
}

export const onDeletedTask = (id) => {
    return {
        type: types.DELETED_TASK,
        id
    }
}
export const onUpdateElement = (task) => {
    return {
        type: types.ONUPDATE_ELEMENT,
        task
    }
}
export const onFilterTable = (filter) => {
    return {
        type: types.ONFILTER_TABLE,
        filter
    }
}
export const onSearch = (key) => {
    return {
        type: types.ON_SEARCH,
        key
    }
}
export const onSort = (sort) => {
    return {
        type: types.ON_SORT,
        sort
    }
}