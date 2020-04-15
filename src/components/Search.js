import React , { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'


class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            keyword : ''
        }
    }
    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }
    onSearch = () => {
        this.props.onSearch(this.state)
    }

    render () {
        return (
                // {/* Search */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control"   
                            name ='keyword'
                            onChange = { this.onChange }
                            value = { this.state.keyword }
                        />
                        <div className="input-group-append">
                            <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick = { this.onSearch }
                            >Tim Kiem</button>
                        </div>
                    </div>
                </div>
        );
    }
}

var mapStateToProps = (state) => {
    return {
    }
}
var mapDispatchToProps = (dispatch, props) => {
    return {
        onSearch : (filter) => {
            dispatch(actions.onSearch(filter))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
