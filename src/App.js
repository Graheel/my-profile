import React from 'react';
import './App.css';
import profilePic from './profile pic.jpg';
import project1 from './projects/project1.png';
import project2 from './projects/project2.png';
import project3 from './projects/project3.png';
import project4 from './projects/project4.png';
import project5 from './projects/project5.png';
import project6 from './projects/project6.png';
import project7 from './projects/project7.png';
import project8 from './projects/project8.png';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

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
              I am currently pursuing a Bachelor of Technology (B.Tech) degree at Chameli Devi Group of Institutions,
              Khandwa Road, Indore. I am in my 4th and final year, currently in the 8th semester. I am passionate about
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
            <p><strong>Strength:</strong> I enjoy exploring and learning new technologies.</p>
            <p><strong>Weakness:</strong> I tend to overthink minor issues.</p>
          </section>

          <section>
            <h2>Hobbies</h2>
            <ul>
              <li>Playing video games for relaxation and stress relief</li>
              <li>Solving the Rubik's Cube regularly</li>
            </ul>
          </section>
        </div>

        <div className="right-section">
          <section>
            <h2>Technical Skills</h2>
            <p>
              C, C++, HTML, CSS, JavaScript, and the full MERN stack (MongoDB, Express.js, React.js, Node.js)
            </p>
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

            {/* Project Screenshots */}
            <div className="project-gallery">
  <figure>
    <a href={project1} target="_blank" rel="noopener noreferrer">
      <img src={project1} alt="Project Screenshot 1" />
    </a>
    <figcaption>Login Page UI</figcaption>
  </figure>

  <figure>
    <a href={project2} target="_blank" rel="noopener noreferrer">
      <img src={project2} alt="Project Screenshot 2" />
    </a>
    <figcaption>HomePage interface</figcaption>
  </figure>

  <figure>
    <a href={project3} target="_blank" rel="noopener noreferrer">
      <img src={project3} alt="Project Screenshot 3" />
    </a>
    <figcaption>Ticket Booking interface</figcaption>
  </figure>

  <figure>
    <a href={project4} target="_blank" rel="noopener noreferrer">
      <img src={project4} alt="Project Screenshot 4" />
    </a>
    <figcaption>Payment portal</figcaption>
  </figure>

  <figure>
    <a href={project5} target="_blank" rel="noopener noreferrer">
      <img src={project5} alt="Project Screenshot 5" />
    </a>
    <figcaption>Ticket genrated in PDF</figcaption>
  </figure>

  <figure>
    <a href={project6} target="_blank" rel="noopener noreferrer">
      <img src={project6} alt="Project Screenshot 6" />
    </a>
    <figcaption>Route Tracking on Admin Panel</figcaption>
  </figure>

  <figure>
    <a href={project7} target="_blank" rel="noopener noreferrer">
      <img src={project7} alt="Project Screenshot 7" />
    </a>
    <figcaption>Total Booked ticket info with total revenue</figcaption>
  </figure>

  <figure>
    <a href={project8} target="_blank" rel="noopener noreferrer">
      <img src={project8} alt="Project Screenshot 8" />
    </a>
    <figcaption>Driver Dashboard</figcaption>
  </figure>
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
