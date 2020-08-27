import React from 'react';
import './CourseData.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFighterJet} from '@fortawesome/free-solid-svg-icons';

const courseData = (props) => {
    const course = props.course;
    return (
        <div className="courseDataArea">
            <div className="courseImg">
                <img src={course.image} alt="" />
            </div>
            <div className="courseTitle">
                <h1 className="title">{course.CourseName}</h1>
                <h5>Trainer: {course.trainer}</h5>
                <h5>Contact Us: {course.email}</h5>
                <h5>Course Fee: {course.Coursefree} Tk</h5>
                <button onClick={ () => props.HandleBtn(course)} className="enrollBtn">Enroll Now <FontAwesomeIcon icon={faFighterJet} /></button>
            </div>
        </div>
    );
};

export default courseData;