import React , { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskItem extends Component{
    onUpdateStatus = () => { 
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDeletedTask = () => {
        this.props.onDeletedTask(this.props.task.id)
        this.props.onCloseForm()    
    }
    onUpdateElement = () => {
        this.props.openForm()
        this.props.onUpdateElement(this.props.task)

    }
    render () {
        return (
            <tr>
                <th scope="row">{ this.props.index + 1 }</th>
                <td>{this.props.task.userName} </td>
                <td className="text-center">
                    <span
                        onClick = { this.onUpdateStatus }    
                    >
                        {this.props.task.status ? 'Kich Hoat' : 'An'}
                    </span>
                </td>
                <td className="d-flex">
                    <button className="btn btn-primary" onClick = { this.onUpdateElement }>Sua</button>
                    <button className="btn btn-danger" onClick = { this.onDeletedTask }>Xoa</button>
                </td>
            </tr>   
        );
    }
}

const mapStateToProps = ( state ) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props ) => {
    return {
        onUpdateStatus : (id) => {
            dispatch(actions.updateStatusTask(id))
        },
        onDeletedTask : (id) => {
            dispatch(actions.onDeletedTask(id))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm())
        },
        openForm : () => {
            dispatch(actions.openForm())
        },
        onUpdateElement : (task) => {
            dispatch(actions.onUpdateElement(task))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskItem)
