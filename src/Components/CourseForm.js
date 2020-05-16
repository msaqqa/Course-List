import React from 'react';

const CoursForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <input type="text" onChange={props.handleChange} value={props.current} />
            <button>Add Course</button>
        </form>
      )
}
  
export default CoursForm;
