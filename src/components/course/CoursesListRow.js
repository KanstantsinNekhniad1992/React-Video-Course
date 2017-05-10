'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class CoursesListRow extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.deleteCourse = this.deleteCourse.bind(this);
    }
    
     deleteCourse (courseId) {
        this.props.actions.deleteCourse(courseId);
    }

    render() {
       
        let {title = '', id} = this.props.course;

        return (
            <li className='course-item' key={id}>
               <a href="javascript:void(0)" onClick={()=>this.deleteCourse(id)}>Delete</a>
               <Link to={'/course/'+id} className='course-item-link'>{title}</Link>
            </li>
        );

    }

}

CoursesListRow.propTypes = {
    course: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListRow);