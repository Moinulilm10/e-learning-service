import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css'


const Courses = () => {

    const [courses, setCourses] = useState([])
    const [searchCourses, setsearchCourses] = useState("")

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handleOnChange = (e) => {
        const searchText = e.target.value
        setsearchCourses(searchText)
    }

    return (
        <div className="team-container">
            <h1><span style={{ color: '#0dcaf0' }}>Our</span> course</h1>
            <div className="search-box">
                <input onChange={handleOnChange} type="text" className="p-2" />
                <button className="btn btn-primary p-2 ml-2">Search</button>
            </div>
            <div className="teams">
                <div className="row">
                    {
                        courses.map(course => (<div className="mt-4 col-md-4">
                            <div className="card w-75">
                                <div className="img-card">
                                    <img className="w-100" src={course.cThumb} alt="" />
                                </div>
                                <p className="mt-3 fw-bold">Course Name: <small> {course.cName}</small></p>
                                <p>Course Instructor: <small>{course.teacher}</small> </p>
                                <p>Course Type: <small>{course.ctype}</small></p>
                                <p>Price: <small>$ {course.price}</small></p>
                                <Link to={`/details/${course.cId}`}>
                                    <button className="details-button btn btn-primary">Details</button>
                                </Link>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;