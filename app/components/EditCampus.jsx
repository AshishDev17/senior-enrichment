'use strict';
import React, { Component } from 'react';
import { editCampus } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

function EditCampus(props) {
  const campus = props.campus;

  if (campus) {
    return (
      <div>
        <div className="heading"><h2>Edit Campus {campus.name}</h2></div>
        <div className="row">
          <div className="col-xs-offset-3 form-width">
            <form onSubmit={props.handleSubmit}>
              <fieldset>
                <div className="form-group">
                  <label>Campus Name: </label>
                  <input type="text" className="form-control" name="campusName" defaultValue={campus.name} />
                </div>
                <div className="form-group">
                  <label>Campus Description: </label>
                  <input type="text" className="form-control" name="campusDescription" defaultValue={campus.description} />
                </div>
                <div>
                  <input type="submit" className="btn btn-primary" value="Submit Campus" />
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <div></div>
  }

  /*
    It looks like the if else statement is here because the initial state for campus is an empty object. Instead of handling this with an if-else statement, I recommend creating variable names for campus name and desription:

    let name = campus && campus.name
    let description = campus && campus.name

    This way, your form won't error out when campus is undefined. However, it appears that the input fields don't re-render with the updated defaultValues. This could be problematic, but since you most likely should incorporate local state in your forms for validation, you can initialize a local state with the campus name and description, and then have a value prop in the input fields equal to your name and description in state.
  */

}

const mapStateToProps = function (state, ownProps) {
  const campusId = ownProps.match.params.campusId;

  /*
    This pattern works, but it doesn't exactly follow separation of concerns in my opinion - usually I'll use mapStateToProps just to get the information that this particular component needs, rather than implement any kind of logic.

    Instead, I might create something like selectedCampus as part of the campuses reducer. I would then make this component a stateful component (you'd probably make it stateful anyways in order to include local form validation). On componentDidMount, you can dispatch a thunk that will set the selectedCampus to be the campus matching the id of ownProps.match.params.campusId - something like that.
  */

  return {
    campus: state.campuses.find(campus => campus.id === +campusId)
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  const campusId = ownProps.match.params.campusId;

  return {
    handleSubmit(e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';

      dispatch(editCampus(campusId, { name: campusName, description: campusDescription }, ownProps.history));
    }
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCampus));
