import React from 'react';
import { Accordion } from 'react-bootstrap';
import Banner from '../Banner/Banner';
// import HomePic from '../../Images/photo-1593444285563-4479fb28226e.jpeg'
import faqPic from '../../Images/faq/undraw_Detailed_information_re_qmuc.svg'
import './Home.css'


const Home = () => {

    return (
        <div>
            <Banner></Banner>

            <div className="home-section">
                <div className="mid-section">
                    {/* <h1>Always something new </h1>
                    <h1>to learn</h1>
                    <p>With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p> */}

                    <h2 className="mt-2"> <span className="faq-span"> Frequently </span> Asqued Question</h2>

                    <Accordion className="accordion" defaultActiveKey="">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What Types of Programs Are Available?</Accordion.Header>
                            <Accordion.Body>
                                A broad range of associate's, bachelor's and master's degree programs are available online, offered by both public and private schools, colleges and universities as well as online-only educational institutions. Doctorate degrees and post-graduate certificate programs sometimes have an e-learning option, as well as many vocational diploma and certificate programs. Some schools also offer non-credit adult education classes online.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Who Can Benefit?</Accordion.Header>
                            <Accordion.Body>
                                Online programs can meet the needs of many types of students, depending on their educational and professional needs. Some examples of students who might benefit from e-learning programs include the following:
                                On-campus students looking for scheduling flexibility
                                Off-campus students who do not live near a college or university
                                Adult students with family and/or work obligations
                                Working professionals seeking to boost or change their careers
                                Military personnel
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How Do Online Programs Work?</Accordion.Header>
                            <Accordion.Body>
                                Some programs are a combination of on-campus and online study, while other programs are offered totally online. Often students are allowed to create their own study schedules using class materials, such as taped lectures and slide show presentations, which are accessible 24-7 through an Internet-based portal. Through this platform, students can also find their assignments, upload homework, participate in class discussions and contact their instructors.
                                In some instances, students may be required to log into class at the same time to attend events, such as live webcasts or online chat sessions. In addition, students usually have access to the school library's online databases, where they can view study materials, such as the online editions of academic journals and periodicals. Students in distance-learning programs may be required to complete exams under the supervision of a proctor.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What About In-Person Requirements?</Accordion.Header>
                            <Accordion.Body>
                                Some online programs may integrate practical components. For instance, students in online programs that prepare them for jobs in the health industry may need to complete laboratory courses or clinical internships. Sometimes, these experiences can be set up in approved locations in the student's area. In these cases, students may need to keep a journal of their experience or a video record of their work to submit to their instructors for review. There are also online programs that require students to attend on-campus classes on weekends or complete one or more residency periods at the college.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>


                </div>
                <div className="mid-section-img">
                    <img src={faqPic} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Home;