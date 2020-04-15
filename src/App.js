import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm'
import Control from './components/Control'
import TaskList from './components/TaskList'
import { connect } from 'react-redux'
import * as actions from './actions/index'

class App extends Component {

onToggleForm = () => {
  if(this.props.updateElement && this.props.updateElement.id !== ''){
    this.props.onOpenForm()
    this.props.onClearForm({
      id: '',
      userName: '',
      status : false
    })
  }else{
    this.props.onToggleForm()
  }
}
render () {
var { isDisplayForm } = this.props
return (
  <div className="container">
    <div className="text-center">
    <h1>Quan Ly Cong Viec</h1>
    <hr />
    </div>
    <div className="row d-flex justify-content-center">
    <TaskForm/>
    <div className={isDisplayForm ?  "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
      <button onClick = { this.onToggleForm }> Them Cong Viec</button>           
      <Control />
      <div className="row"> 
          <TaskList />
      </div>
    </div>     
    </div>
  </div>

  )
}
}
var mapStateToProps = (state) => {
  return {
    isDisplayForm : state.isDisplayForm,
    updateElement : state.updateElement
  }
}

var mapDispatchToProps = ( dispatch, props ) => {
  return{
    onToggleForm : () => {
      dispatch(actions.toggleForm())
    },
    onClearForm : (task) => {
      dispatch(actions.onUpdateElement(task))
    },
    onOpenForm : () => {
      dispatch(actions.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
