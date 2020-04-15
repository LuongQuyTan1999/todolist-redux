import React , { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from './../actions/index'
class Sort extends Component{
    onClick = (sortName, sortValue) => {
        var sort = {
            sortName : sortName,
            sortValue : sortValue
        }
        this.props.onSort(sort)
    }
    render () {
        return (
            // {/* {Sort} */}
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                    >
                        Tu A - Z
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a 
                        className="dropdown-item" 
                        href="#"
                        onClick = { () => this.onClick('userName' , 1) }
                    >Tu A - Z</a>
                    <a 
                        className="dropdown-item" 
                        href="#"
                        onClick = { () => this.onClick('userName' , -1)}
                    >Tu Z - A</a>
                    <a 
                        className="dropdown-item" 
                        href="#"
                        onClick = { () => this.onClick('status' , 1)}
                    >Trang Thai Kich Hoat</a>
                    <a 
                        onClick = { () => this.onClick('status' , -1)}
                        className="dropdown-item" 
                        href="#"
                    >Trang Thai An</a>
                    </div>
                </div>
            </div>
        );
    }
}
var mapStateToProps = (state) =>{
    return {

    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onSort : (sort) => {
            dispatch(actions.onSort(sort))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
