import React, {Component} from 'react';

class AddItem extends Component{
  state = {
    name: '',
    age: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(e.target.name.value === '' || e.target.age.value === ''){
      return false;
    }else{
      this.props.AddItem(this.state)
      // e.currentTarget.reset();
      this.setState({
        name: '',
        age: ''
      })
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Enter Name..." id="name" onChange={this.handleChange} value={this.state.name} />
        <input type="number" placeholder="Enter Age..." id="age" onChange={this.handleChange} value={this.state.age} />
        <input type="Submit" value="Add" />
      </form>
    )
  }
}

export default AddItem;