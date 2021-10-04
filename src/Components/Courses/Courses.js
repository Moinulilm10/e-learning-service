import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './Courses.css'


const Courses = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses])
    return (


        <div className="team-container">
            <h1>Our course</h1>
            <div className="search-box">
                <input type="text" className="p-2" placeholder="Enter course name..." />
                <button className="btn btn-primary p-2">Search</button>
            </div>
            <div className="teams">
                <div className="row">
                    {
                        courses.map(course => (<div className="mt-4 col-md-4">
                            <div className="card w-75">
                                <div className="img-card">
                                    <img className="w-100" src={course.cThumb} alt="" />
                                </div>
                                <h5>Course Name: <small> {course.cName}</small></h5>
                                <p>Course Instructor: <small>{course.teacher}</small> </p>
                                <p>Course Type: <small>{course.ctype}</small></p>
                                <p>Price: <small>$ {course.price}</small></p>
                                <button className="details-button btn btn-primary">Details</button>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>


    );
};

export default Courses;