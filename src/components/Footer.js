import React from 'react';
import resume from '../assets/images/Tadhg McIntyre Resume.pdf'

function Footer () {

    return (
        <div id="contact " className="card w-25 txt-redish bg-redish fw-bold position-absolute bottom-0 start-50 translate-middle-x">
            <div>
                <h5 className="fs-4">Contact Info</h5>
                <ul className="list-group fs-5 list-group-flush">
                    <li className="list-group-item text-primary bg-redish">
                        Email: mcintyretadhg@gmail.com
                    </li>
                    <li className="list-group-item bg-redish text-primary">
                        GitHub: <a href="https://github.com/TadhgMc" target="_blank" rel="GitHub Account">TadhgMc</a>
                    </li>
                    <li className="list-group-item bg-redish text-primary">
                    LinkedIn: <a href="https://www.linkedin.com/in/tadhg-mcintyre-1505746b/"  target="_blank" rel="LinkedIn Account">Tadhg McIntyre</a>
                    </li>
                    <li className="list-group-item bg-redish text-primary">
                    <a href={resume} target="_blank" rel="Resume">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    
    )
};

export default Footer;