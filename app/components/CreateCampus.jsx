'use strict';
import React, { Component } from 'react';
import {writeCampus, postCampus} from '../store';
import {withRouter, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

// export default class CreateCampus extends Component{
//   constructor(props){
//     super(props);
//     this.state = store.getState();
//   }

//   componentDidMount() {
//     //store.dispatch(fetchCampuses());
//     this.unsubscribe = store.subscribe(() => {this.setState(store.getState())})
//   }

//   componentWillUnmount() {
//     this.unsubscribe();

//   }

//   render() {

//     return (
//       <div>
//         <h2>CREATE NEW CAMPUS</h2>
//         <form>
//             <fieldset>
//               <legend>Create Campus</legend>
//               <div>
//                 <label htmlFor="">Campus Name: </label>
//                 <input type="text" name="campusName"/>
//               </div>
//               {/*<div>
//                 <label htmlFor="">Campus Image: </label>
//                 <input type="text" name/>
//               </div>*/}
//               <div>
//                 <label htmlFor="">Campus Description: </label>
//                 <input type="text" name="campusDescription"/>
//               </div>
//               <div>
//                 <input type="submit" value="Submit Campus"/>
//               </div>
//             </fieldset>
//           </form>
//       </div>
//     )
//   }
// }


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // handleChange (e) {
    //   let campusName = e.target.campusName.value || '';
    //   let campusDescription = e.target.campusDescription.value || '';

    //   dispatch(writeCampus({campusName, campusDescription}));
    // },
    handleSubmit (e) {
      e.preventDefault();
      let campusName = e.target.campusName.value || '';
      let campusDescription = e.target.campusDescription.value || '';

      dispatch(postCampus({campusName, campusDescription}));
      dispatch(writeCampus({}));
    }
  }
}
