import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Project from '../components/Project';
import dayPlanner from '../assets/images/day-planner.PNG';
import passWordGen from '../assets/images/PW-Gene.PNG';
import trippin from '../assets/images/trippin.PNG';
import TPG from '../assets/images/TPG.PNG';
import EmpTra from '../assets/images/EmpTra.PNG';
import TheField from '../assets/images/TheField.PNG';

function CompletedWork() {

    return (<>
        <Header />
        <div className="container row justify-content-center">
            <Project
            title="Work Day Scheduler"
            liveUrl="https://tadhgmc.github.io/work-day-scheduler/"
            gitUrl="https://github.com/TadhgMc/work-day-scheduler"
            img={dayPlanner}
            />
            <Project
            title="Password Generator"
            liveUrl="https://tadhgmc.github.io/PassWord_Gene/"
            gitUrl="https://github.com/TadhgMc/PassWord_Gene"
            img={passWordGen}
            />
            <Project
            title="Trippin' Around Columbus"
            liveUrl="https://tadhgmc.github.io/Project-1/"
            gitUrl="https://github.com/TadhgMc/Project-1"
            img={trippin}
            />
            <Project
            title="Team Profile Generator"
            liveUrl="https://www.youtube.com/watch?v=2NU8j9dBoac"
            gitUrl="https://github.com/TadhgMc/team-profile-generator"
            img={TPG}
            />
            <Project
            title="Employee Tracker"
            liveUrl="https://www.youtube.com/watch?v=nzGJAwBC2E4"
            gitUrl="https://github.com/TadhgMc/employee-tracker"
            img={EmpTra}
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

export default CompletedWork;