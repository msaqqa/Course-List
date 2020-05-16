import React, {Component} from 'react';
import CourseList from './Components/CourseList';
import CourseForm from './Components/CourseForm';

class App extends Component{
  state = {
    courses: [
      {name: 'HTML'},
      {name: 'CSS'},
      {name: 'Js'}
    ],
    current: ''
  }
  
  handleChange = (e) =>{
    this.setState({
      current: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.current === ''){
      return false;
    } else {
      let {courses} = this.state;
    courses.push({name: this.state.current})
    this.setState({courses, current: ''})
    }
  }

  deleteCourse = (index) =>{
    let {courses} = this.state;
    courses.splice(index, 1)
    this.setState({courses})
  }

  updateCourse = (index, value) =>{
    let {courses} = this.state;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses})
  }

  render(){
    let {courses} = this.state;
    let length = courses.length;
    let courseList = (length > 0) ?
    courses.map((course, index) =>{
      return(
        <CourseList course={course} key={index} index={index} deleteCourse={this.deleteCourse} updateCourse={this.updateCourse} />
      )
    })
    : (<p>No Items To Show</p>)

    return(
      <div className="App">
        <h2>Add Course</h2>
        <CourseForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} current={this.state.current} />
        <ul>{courseList}</ul>
      </div>
    )
  }
}

export default App;