'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CoursesList from './CoursesList';
import * as courseActions from '../../actions/courseActions';
import {Link} from 'react-router';

class CoursesPage extends React.Component {
	constructor(props, context) {
		super(props, context);
	}
	
	render() {

		return (
			<div className='wrapper'>
				<Link to='/course' className='btn btn-primary'>Add Course</Link>
				<CoursesList courses={this.props.courses}></CoursesList>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: React.PropTypes.array.isRequired,
	actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		courses: state.courses
	};
}

function mapToDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(courseActions, dispatch)
	};
}

export default connect(mapStateToProps, mapToDispatchToProps)(CoursesPage);