'use client';
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">Abdur-Rahman Islam</a>
          <button className="navbar-toggler" type="button" onClick={() => setOpen(!open)} aria-controls="navbarNav" aria-expanded={open} aria-label="Toggle navigation">
            <svg width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z" fill="#6f7380"/><path d="M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z" fill="#6f7380"/><path d="M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z" fill="#6f7380"/></svg>
          </button>
          <div className={`navbar-collapse ${open ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/my-skills">My Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
    );
}