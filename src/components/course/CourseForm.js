'use strict;'

import React, {PropTypes} from 'react';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

const CourseForm = ({allAuthors, onSave, onChange, course, loading, errors}) => {

    return (
        <form >
            <TextInput
                name = 'title'
                label = 'Title'
                onChange = {onChange}
                error = {errors.title}
                value = {course.title}/>

            <SelectInput
                name = 'authorId'
                label = 'Author'
                value = {course.authorId}
                defaultOption = 'Select Option'
                options = {allAuthors}
                onChange = {onChange}
                error = {errors.authorId}/>

            <TextInput
                name = 'category'
                label = 'Category'
                onChange = {onChange}
                error = {errors.category}
                value = {course.category}/>

            <TextInput
                name = 'length'
                label = 'Length'
                onChange = {onChange}
                error = {errors.length}
                value = {course.length}/>

            <input 
                type='submit'
                disabled = {loading}
                value = {loading ? 'Saving' : 'Save'}
                onClick = {onSave}/>
        </form>
    );
}

CourseForm.propTypes = {
    allAuthors: PropTypes.array,
    onSave: PropTypes.func,
    onChange: PropTypes.func,
    course: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    errors: PropTypes.object
};

export default CourseForm;