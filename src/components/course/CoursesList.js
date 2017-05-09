'use strict';

import React, {PropTypes} from 'react';
import CoursesListRow from './CoursesListRow';

class CoursesList extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render () {

        let {courses = []} = this.props;

        return (
            <div className='courses-holder'>
                <h1>Courses</h1>
                <ul className='courses-list'>
                    {courses.map(course => 
                        <CoursesListRow course={course}></CoursesListRow>
                    )}
                </ul>
            </div>
        );

    }

};

CoursesList.propTypes = {
    courses: PropTypes.array.isRequired
};

export default CoursesList;