import React from 'react';

const Resume = () => {
    return (
        <div className='bg-custom-black mt-0'>
            <div className="mt-20 p-10 bg-custom-blue mx-auto text-white max-w-4xl shadow-lg rounded-lg">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-2xl font-bold">MD. TOWHIDUL ISLAM</h2>
                        <p>Dhaka, Bangladesh</p>
                        <p>Phone: +8801749525227</p>
                        <p>Email: <a href="mailto:towhidulsislam@gmail.com" className="text-blue-400">towhidulsislam@gmail.com</a></p>
                        <div className="flex space-x-4 mt-2 ml-12">
                            <a href="#" className="text-blue-400 hover:text-blue-300">GitHub</a>
                            <a href="#" className="text-blue-400 hover:text-blue-300">LinkedIn</a>
                        </div>
                    </div>
                    <div className="transform -rotate-6">
                        <img
                            src="../../video/towhidul.png"
                            alt="Profile"
                            className="w-36 h-36 border-4 border-white rounded-full"
                        />
                    </div>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Objective Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Objective</h3>
                    <p className="mt-2 text-justify">
                        Highly skilled and results-driven Software Engineer with 2 years of experience in designing, developing,
                        and maintaining software applications. Proficient in various programming languages and technologies,
                        with a strong focus on delivering high-quality solutions to meet business needs.
                        Seeking opportunities to leverage my expertise in a dynamic and innovative software development environment.
                    </p>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Education Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Education</h3>
                    <p className="mt-2">Bachelor of Science in Computer Science and Engineering</p>
                    <p>National University, Bangladesh</p>
                    <p>Graduation Year: 2023</p>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Skills Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Skills</h3>
                    <ul className="list-disc list-inside mt-2 pl-8">
                        <li>Programming Languages: PHP, JavaScript, C, C++</li>
                        <li>Frameworks: Laravel, Node.js, Express.js, Socket.io</li>
                        <li>Database Management: SQL, PostgreSQL, MongoDB</li>
                        <li>DevOps: Deploy and Maintenance of Ubuntu server, CI/CD tools</li>
                        <li>Version Control: Git</li>
                        <li>Software Development Life Cycle (SDLC)</li>
                        <li>Problem-solving and Analytical Skills</li>
                        <li>Strong Communication and Collaboration</li>
                    </ul>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Experience Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Experience</h3>

                    {/* Experience 1 */}
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Software Developer</h4>
                        <p className="italic text-gray-300">Innova Infosys, Dhaka, Bangladesh</p>
                        <p className="text-gray-300 mb-2">October 2022 - June 2023</p>
                        <ul className="list-disc list-inside mt-2 pl-8">
                            <li>Developed and maintained software applications in accordance with project requirements.</li>
                            <li>Collaborated with cross-functional teams to design and implement scalable and efficient solutions.</li>
                            <li>Conducted code reviews and provided feedback to team members to ensure code quality and adherence to best practices.</li>
                            <li>Implemented continuous integration and deployment processes to streamline development and deployment workflows.</li>
                        </ul>
                    </div>

                    {/* Experience 2 */}
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">Software Engineer</h4>
                        <p className="italic text-gray-300">bdCalling IT LTD, Dhaka, Bangladesh</p>
                        <p className="text-gray-300 mb-2">July 2022 - Present</p>
                        <ul className="list-disc list-inside mt-2 pl-8">
                            <li>Designed and implemented RESTful APIs for internal and external use, ensuring performance and scalability.</li>
                            <li>Worked closely with product managers to understand requirements and translate them into technical specifications.</li>
                            <li>Troubleshooted and resolved software defects in a timely manner, maintaining high levels of reliability and user satisfaction.</li>
                            <li>Contributed to the development of technical documentation and training materials for internal and external stakeholders.</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Project Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Project</h3>
                    <div className="mt-4">
                        <h4 className="text-lg font-semibold">RunWey</h4>
                        <p className="italic text-gray-300">Short-form Video Content and Innovative Features</p>
                        <ul className="list-disc list-inside mt-2 pl-8">
                            <li><span className='font-bold'>Short-form Video Creation: </span>Create videos from 15 to 60 seconds, encouraging creativity and showcasing talents.</li>
                            <li><span className='font-bold'>Video Editing Tools: </span>Advanced tools to edit videos, enhancing creativity.</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Certifications Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Certifications</h3>
                    <ul className="list-disc list-inside mt-2 pl-8">
                        <li><span className='font-bold'>Bachelor of Computer Science and Engineering, </span>National University, Bangladesh, 2024</li>
                    </ul>
                </div>

                <hr className="border-t-2 border-white my-6" />

                {/* Languages Section */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold">Languages</h3>
                    <ul className="list-disc list-inside mt-2 pl-8">
                        <li>Fluent in English, Bangla</li>
                    </ul>
                </div>

                {/* Download Resume Button */}
                <div className="flex justify-center mt-10">
                    <button className='bg-white text-custom-blue h-10 w-48 rounded-md hover:bg-gray-200 transition ease-in-out delay-150'>
                        Download Resume
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
