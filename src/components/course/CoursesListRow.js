'use strict';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class CoursesListRow extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
       
        let {title = '', id} = this.props.course;

        return (
            <li className='course-item' key={id}>
               <Link to={'/course/'+id}>{title}</Link>
            </li>
        );

    }

}

CoursesListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CoursesListRow;