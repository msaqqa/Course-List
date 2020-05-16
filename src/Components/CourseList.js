import React, {Component, Fragment} from 'react';

class CourseList extends Component{
    state = {
        isEdit: false
    }
    renderCourse = () =>{
        return(
            <li>
                <span>{this.props.course.name}</span>
                <button onClick={() => this.toggleState()}>Update</button>
                <button onClick={() => this.props.deleteCourse(this.props.index)}>Delete</button>
            </li>
        )
    }

    toggleState = () =>{
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    renderForm = () => {
        return(
            <form onSubmit={this.renderUpdate}>
                <input type="text" ref={(v) => this.input = v} defaultValue={this.props.course.name} />
                <button>Edit Course</button>
            </form>
          )
    }

    renderUpdate = (e) =>{
        e.preventDefault();
        this.props.updateCourse(this.props.index, this.input.value);
        this.toggleState();

    }

    render(){
        let {isEdit} = this.state;
        return(
            <Fragment>
                {isEdit? this.renderForm() : this.renderCourse()}
            </Fragment>
        )
    }
}

export default CourseList;