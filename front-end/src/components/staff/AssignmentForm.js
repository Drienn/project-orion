import React from 'react';
import { Field, reduxForm } from 'redux-form';

let AssignmentForm = props => {

  const { handleSubmit } = props;

  return (
    <form onSubmit={ handleSubmit } className="form-horizontal">
      <fieldset>
        <div className="form-group">
          <label htmlFor="title" className="col-lg-2 control-label">Title:</label>
          <div className="col-lg-10">
            <Field name="title" component="input" type="text" className="form-control" placeholder="Enter a title for the assignment" autoComplete="off" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="description" className="col-lg-2 control-label">Description:</label>
          <div className="col-lg-10">
            <Field name="description" component="input" type="text" className="form-control" placeholder="Enter a description for the assignment" autoComplete="off" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-10 col-lg-offset-2">
            <button type="reset" className="btn btn-default">Cancel</button> &nbsp;
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </fieldset>
    </form>
  )

}

AssignmentForm = reduxForm({
  form: 'assignment'
})(AssignmentForm)

export default AssignmentForm;
