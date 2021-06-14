import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import dayPlanner from '../assets/images/day-planner.PNG';
import TPG from '../assets/images/TPG.PNG';
import TheField from '../assets/images/TheField.PNG';

function Home() {
    
    return (<>
        <Header />
        <div className="container row justify-content-center">
            <h2 className="txt-darkish">Featured Work:</h2>
            <Project
            title="Work Day Scheduler"
            liveUrl="https://tadhgmc.github.io/work-day-scheduler/"
            gitUrl="https://github.com/TadhgMc/work-day-scheduler"
            img={dayPlanner}
            />
            <Project
            title="Team Profile Generator"
            liveUrl="https://www.youtube.com/watch?v=2NU8j9dBoac"
            gitUrl="https://github.com/TadhgMc/team-profile-generator"
            img={TPG}
            />
            <Project
            title="The Field"
            liveUrl="https://the-field-app.herokuapp.com/"
            gitUrl="https://github.com/ktrudickm/The_Field"
            img={TheField}
            />
        </div>
        <Footer />
        </>
    )
};

export default Home;