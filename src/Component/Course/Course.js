import React from 'react';
import fakeData from '../../fakeData/fakeData.json';
import { useState } from 'react';
import './course.css';
import CourseData from '../../CourseData/CourseData';


const Course = () => {
    const [course, setCourse] = useState(fakeData);
    const [click, setClick] = useState([]);
    const HandleBtn = (course) => {
        const newClick = [...click, course]
        setClick(newClick);
    }
    return (
        <div className="courseArea">

            <div className="courseSection">
                {
                    course.map(course => <CourseData HandleBtn={HandleBtn} course={course}></CourseData> )
                }
            </div>
            
            <div className="EnrollCourse">
                this is cart
            </div>

        </div>
    );
};

export default Course;