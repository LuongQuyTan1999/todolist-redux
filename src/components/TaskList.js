import React , { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index'


class TaskList extends Component{
    constructor(props){
        super(props)
        this.state = {
            filterName : '',
            filterStatus: -1
        }
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === 'checkbox' ? target.checked : target.value
        var filter = {
            userName : name === 'filterName' ? value : this.state.filterName,   
            status : name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name] : value
        })
    }
    render () {
        var { tasks, onFilter, onSearch, onSort } = this.props;
        if(onFilter.userName){
            tasks = tasks.filter( (task) => {
                return task.userName.toLowerCase().indexOf(onFilter.userName.toLowerCase()) !== -1
            })
        }
        tasks = tasks.filter( (task) => {
            if(onFilter.status === -1){
                return task
            }else{
                return task.status === (onFilter.status === 1 ? true : false)
            }
        })
        if(onSearch.keyword){
            tasks = tasks.filter( (task) => {
                return task.userName.toLowerCase().indexOf(onSearch.keyword.toLowerCase()) !== -1
            })
        }
        if(onSort){
            if(onSort.sortName === 'userName'){
                tasks.sort( (a,b) => {
                    if (a.userName > b.userName) return onSort.sortValue
                    else if (a.userName < b.userName) return -onSort.sortValue
                    else return 0
                })
            }
            if(onSort.sortName === 'status'){
                tasks.sort( (a,b) => {
                    if (a.status < b.status) return onSort.sortValue
                    else if (a.status > b.status) return -onSort.sortValue
                    else return 0
                })
            }
        }
        var elmTasks = tasks.map( (task,index) => {
            return <TaskItem 
                key= { index} 
                index = { index } 
                task = { task }
            />
        })
        return (
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Handle</th>
                    </tr> 
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td><input 
                                type="text" 
                                className="form-control"  
                                name='filterName'
                                onChange = { this.onChange }
                                value = { this.state.filterName }
                            />
                        </td>
                        <td>
                            <select 
                                className="form-control" 
                                id="exampleFormControlSelect1"
                                name="filterStatus"
                                onChange = { this.onChange }
                                value = { this.state.filterStatus }
                            >   
                                <option value= { -1 } >Tat ca</option>
                                <option value= { 0 }>An</option>
                                <option value= { 1 }>Kich Hoat</option>
                                
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    { elmTasks }
                    </tbody>
                </table>
            </div>      
        );
    }
}

var mapStateToProps = (state) => {
    return { 
        tasks : state.tasks,
        onFilter : state.onFilter,
        onSearch : state.onSearch,
        onSort : state.onSort
    }
}
var mapDispatchToProps = (dispatch, props ) => {
    return {
        onFilterTable : (filter) => {
            dispatch(actions.onFilterTable(filter))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)( TaskList );
