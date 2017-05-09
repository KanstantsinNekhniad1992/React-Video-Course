'use strict';

import React, {PropTypes} from 'react';
import CourseForm from './CourseForm';
import {connect} from 'react-redux';
import * as authorsActions from '../../actions/authorsActions';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';

class ManageCourse extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        let course = this.state.course;
        course[event.target.name] = event.target.value;
        return this.setState({course: course});
    }

    redirect() {
        this.context.router.push('/courses');
    }

    saveCourse(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course)
            .then( () => this.redirect());
    }

    componentWillReceiveProps(nextProp) {
        if (this.props.course.id != nextProp.course.id) {
            this.setState({course: Object.assign({}, nextProp.course)});
        }
    }

    render() {

        return (
            <div>
                <h1>ManageCourse</h1>
                <CourseForm 
                    course = {this.state.course}
                    errors = {this.state.errors}
                    allAuthors = {this.props.authors}
                    onChange = {this.updateCourseState}
                    onSave = {this.saveCourse}
                />
            </div>
        );
    }
}

ManageCourse.contextTypes = {
    router: PropTypes.object
}

function getCourseById(courses, courseId) {
    let course = courses.filter(course => {
        return course.id === courseId;
    });
    if (course.length) return course[0];
    return null;
}

function mapStateToProps (state, ownProps) {
    let courseId = ownProps.params.id;
    let course = {
        id: '',
        title: '',
        watchHref: '',
        authorId: '',
        length: '',
        category: ''
    };

    if (courseId) {
        course = getCourseById(state.courses, courseId);
    }

    const formatedAuthors = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: formatedAuthors
    }
}

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, authorsActions, courseActions), dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);