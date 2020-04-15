import React , { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'

class TaskForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            userName : '',
            status : true
        }
    }
    componentWillMount(){
        if(this.props.updateElement && this.props.updateElement.id){
            this.setState({
                id: this.props.updateElement.id,
                userName: this.props.updateElement.userName,
                status: this.props.updateElement.status,
            })
        }else{
            this.setState({
                id: '',
                userName: '',
                status: true,
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.updateElement){
            this.setState({
                id: nextProps.updateElement.id,
                userName: nextProps.updateElement.userName,
                status: nextProps.updateElement.status,
            })
        }else {
            this.setState({
                id: '',
                userName: '',
                status: true,
            })
        }
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        if(name === "status"){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name] : value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state)
        this.onClear();
        this.props.onCloseForm();
    }
    onClear = () => {
        this.setState({
            userName : '',
            status : false
        })
    }
    render () {
        var { onCloseForm } = this.props
        if(!this.props.isDisplayForm) return ''
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title d-flex justify-content-between">
                        {this.state.id ? 'Cap Nhat Cong Viec' : 'Them Cong Viec'}
                    <span onClick = { onCloseForm }><i className="far fa-times-circle "></i></span>
                    </h3>
                    
                </div>
                <div className="panel-body">
                    <form onSubmit = { this.onSubmit }>
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Ten</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name = 'userName'
                            id="exampleInputEmail1" 
                            value = { this.state.userName }
                            onChange ={ this.onChange }
                        />
                        
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Status</label>
                            <select 
                                className="form-control" 
                                name= 'status'
                                id="exampleFormControlSelect1"
                                value = { this.state.status }
                                onChange = { this.onChange }
                            >
                            <option value= {true}>Kich hoat</option>
                            <option value = {false}>An</option>
                            
                            </select>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="submit" className="btn btn-primary" >Luu Lai</button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn btn-danger" onClick = { this.onClear } >Huy Bo</button>
                    </div>
                    </div>
                </div> 
            </div>
        );
    }
}

const mapStateToProps = ( state ) => {
    return {
        isDisplayForm : state.isDisplayForm,
        updateElement : state.updateElement
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task))
        },
        onCloseForm : () => {
            dispatch(actions.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
