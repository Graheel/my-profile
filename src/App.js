import React from 'react';
import './App.css';
import profilePic from './port.jpg';
import project1 from './projects/project1.png';
import project2 from './projects/project2.png';
import project3 from './projects/project3.png';
import project4 from './projects/project4.png';
import project5 from './projects/project5.png';
import project6 from './projects/project6.png';
import project7 from './projects/project7.png';
import project8 from './projects/project8.png';
import {
  FaPhoneAlt, FaEnvelope, FaInstagram, FaTelegramPlane,
  FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaNodeJs, FaGitAlt, FaDatabase
} from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">Graheel Upadhyay</h1>
          <p className="text-lg mt-1">B.Tech Student | MERN Stack Developer</p>
        </div>
      </header>

      <main className="main-container">
        <div className="profile-section">
          <img src={profilePic} alt="Graheel Upadhyay" className="profile-image" />
        </div>

        <div className="content-section">
          <section>
            <h2>About Me</h2>
            <p>
              I had recently completed Bachelor of Technology (B.Tech) degree at Chameli Devi Group of Institutions,
              Khandwa Road, Indore.I am passionate about
              learning new technologies and enhancing my development skills.
            </p>
          </section>

          <section>
            <h2>Education</h2>
            <ul>
              <li>Class 1 to 8: St. Paul's Convent Sr. Sec. School, Ujjain</li>
              <li>Class 9 to 12: Mahadaji Scindhiya Higher Secondary School, Ujjain</li>
            </ul>
          </section>
          <section>
  <h2>Strengths & Weaknesses</h2>
  <div><strong>Strength:</strong></div>
  <ul>
    <li>I enjoy exploring and learning new technologies.</li>
    <li>Proactive in planning and organizing tasks ahead of deadlines, contributing to consistent project success and reduced last-minute stress.</li>
  </ul>
  <div><strong>Weakness:</strong></div>
  <ul>
    <li>Naturally analytical; tend to evaluate multiple perspectives before acting, which helps in identifying potential risks and crafting effective solutions.</li>
    <li>Sometimes focus too much on details, which can slightly affect overall speed when working under tight deadlines.</li>
  </ul>
</section>


          <section>
            <h2>Hobbies</h2>
            <ul>
              <li>Playing video games for relaxation and stress relief</li>
              <li>Solving puzzle problems</li>
              <li>Daily participate in sports activities </li>
            </ul>
          </section>
        </div>

        <div className="right-section">
          <section>
            <h2>Technical Skills</h2>
            <ul className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-gray-800">
  <li className="flex items-center gap-2"><FaCode /> C & C++</li>
  <li className="flex items-center gap-2"><FaHtml5 className="text-orange-600" /> HTML</li>
  <li className="flex items-center gap-2"><FaCss3Alt className="text-blue-600" /> CSS</li>
  <li className="flex items-center gap-2"><FaJs className="text-yellow-500" /> JavaScript</li>
  <li className="flex items-center gap-2"><FaDatabase className="text-green-700" /> MongoDB</li>
  <li className="flex items-center gap-2"><FaCode className="text-gray-700" /> Express.js</li>
  <li className="flex items-center gap-2"><FaReact className="text-cyan-500" /> React.js</li>
  <li className="flex items-center gap-2"><FaNodeJs className="text-green-600" /> Node.js</li>

</ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-900 border-b pb-1 mb-2">Projects</h2>
            <p className="leading-relaxed mb-4">
              <strong>Ibus E-Ticket</strong> is a comprehensive web-based bus ticket booking system built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It simplifies the ticket reservation process for passengers while streamlining management tasks for admins and drivers.
            </p>

            <ul className="list-disc list-inside my-2 text-gray-800">
              <li><strong>User Panel:</strong> Allows passengers to register/login, view available buses by route, and book tickets online.</li>
              <li><strong>Admin Panel:</strong> Provides complete control over bus management, route creation and assignment, and driver record management.</li>
              <li><strong>Driver Panel:</strong> Enables drivers to log their trip status (start and end of the route) and report emergencies during travel.</li>
            </ul>

            <p className="mt-2 leading-relaxed">
              The system is designed with a clean UI, proper role-based access control, and a secure backend to ensure a smooth experience for all types of users.
            </p>

            <a
              href="https://i-bus-e-ticket.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-900 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-800 transition mb-4"
            >
              Visit Live Project 🚍
            </a>

            <div className="project-gallery">
              {[project1, project2, project3, project4, project5, project6, project7, project8].map((src, index) => (
                <figure key={index}>
                  <a href={src} target="_blank" rel="noopener noreferrer">
                    <img src={src} alt={`Project Screenshot ${index + 1}`} />
                  </a>
                  <figcaption>
                    {[
                      "Login Page UI", "HomePage interface", "Ticket Booking interface", "Payment portal",
                      "Ticket generated in PDF", "Route Tracking on Admin Panel", "Total Booked ticket info with total revenue", "Driver Dashboard"
                    ][index]}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          <section id="contact" className="mt-10 contact-info">
            <h2 className="text-2xl font-semibold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
              Contact & Socials
            </h2>

            <div className="contact-grid">
              <a href="tel:6266306631" className="contact-link">
                <div className="icon-button"><FaPhoneAlt /></div>
                <span>6266306631</span>
              </a>
              <a href="mailto:graheelupadhyay@gmail.com" className="contact-link">
                <div className="icon-button"><FaEnvelope /></div>
                <span>graheelupadhyay@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/graheelupadhyay/?__pwa=1#" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-button"><FaInstagram /></div>
                <span>Instagram</span>
              </a>
              <a href="https://t.me/Graheel" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="icon-button"><FaTelegramPlane /></div>
                <span>Telegram</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-blue-900 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Graheel Upadhyay. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
