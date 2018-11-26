import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {

  constructor(props){
      super(props);
      this.state = {
          term :''
      }
      this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
      this.setState({   
          term : e.target.value
      })
  }

  onFormSubmit(e){
    e.preventDefault();
  }
  render() {
    return (
      <div>
          <form className="input-group" onSubmit={this.onFormSubmit}>
                <input type="text" className="form-control" placeholder="Enter City to search" aria-label="search-input" aria-describedby="search-input" onChange= {this.onInputChange} value={this.state.term} />
                <div className="input-group-btn">
                    <button className="btn btn-outline-secondary" type="submit">Button</button>
                </div>
            </form >
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather : fetchWeather},dispatch);
}

export default  connect(mapDispatchToProps)(SearchBar) ;