import React from 'react';

function Header () {

    return (    
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-redish">
                <div class="container-fluid">
                <a class="navbar-brand fw-bold fs-4 txt-darkish" href="/">Tadhg McIntyre's Portfolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link fs-5 active txt-darkish" aria-current="page" href="/work">Completed Work</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fs-5 txt-darkish" href="/aboutme">About Me</a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;