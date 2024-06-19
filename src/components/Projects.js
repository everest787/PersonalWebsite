import { useState } from 'react';
function Projects() { 
    const [component, setComponent] = useState(0);

    function handleClick(value) {
        if (component === value){
        setComponent(0);
        }
        else{
        setComponent(value);
        }
    }
    function Research() {
        return (
            <div className="projects__content__desc">
                <h3 className="projects__content__desc__type">Personal</h3>
                <h3 className="projects__content__desc__date">2023-2024</h3>
                <h1 className="projects__content__desc__header">Personal Research</h1>
                <h2 className="projects__content__desc__tech">Machine Learning, DevOps, Web Design</h2>
                <div className="projects__content__desc__res">
                    <ul>
                        <li>
                        Researched foundations on Pandas, Matplotlib, Seaborn, Scikit Learn and other Python 
                        libraries including TensorFlow and Keras for use in Kaggle competitions
                        </li>
                        <li>
                        Read François Chollet's Deep Learning with Python, Second Edition.
                        </li>
                        <li>
                        Studied Stephen Grider's Docker and Kubernetes course on Udemy.
                        </li>
                        <li>
                        Practised and studied AWS Labs tutorials. 
                        </li>
                        <li>
                        Created an EC2 instance on AWS, set up CodeDeploy for continuous deployment.
                        </li>
                    </ul>
                </div> 
            </div>
            
        );
    }
    function Item({ name, tech, desc, link, git, date, type }) {
        return (
            <div className="projects__content__desc">
                <h3 className="projects__content__desc__type">{type}</h3>
                <h3 className="projects__content__desc__date">{date}</h3>
                <h1 className="projects__content__desc__header">{name}</h1>
                <h2 className="projects__content__desc__tech">{tech}</h2>
                <p className="projects__content__desc__desc">{desc}</p>
                {(link) ? 
                <div className="projects__content__desc__git">
                    <h2 className="projects__content__desc__git__label">GitHub: </h2>
                    <a href={link} target="_blank" rel="noreferrer" className="projects__content__desc__git__link">{git}</a>
                </div>
                : null}
                
            </div>
            
        );
    }
    return ( 
        <div className="projects">
            <div className="projects__line projects__line--top"></div>
            <div className="projects__line projects__line--right"></div>
            <div className="projects__line projects__line--bottom"></div>
            <div className="projects__line projects__line--left"></div>
            <div className={"projects__content "+ ((component===0) ? "projects__content__closed" : "projects__content__opened")}>
                <div className={"projects__content__tabs projects__content__tabs__left " + ((component===0) ? "projects__content__tabs__closed" : "projects__content__tabs__opened")}>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(1)}>
                        <h2 className="projects__content__tabs__title">Websites</h2>
                        <h3 className="projects__content__tabs__tech">React, SCSS, HTML, JavaScript</h3>
                    </div>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(2)}>
                        <h2 className="projects__content__tabs__title">Data Upload Feature</h2>
                        <h3 className="projects__content__tabs__tech">JavaScript, Node.js, AWS, React.js, MongoDB</h3>
                    </div>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(3)}>
                        <h2 className="projects__content__tabs__title">Banished Wizards of The Opal Isles</h2>
                        <h3 className="projects__content__tabs__tech">Unity, C#, Trello</h3>
                    </div>
                </div>
                <div className="projects__content__middle">
                    {(component===1) ? 
                        <Item 
                            name="Websites" 
                            tech="React.js, SCSS, JavaScript"
                            desc="This website! I have been designing and developing personal websites using React and SCSS. 
                            This is the second personal website I have created from scratch."
                            link="https://github.com/everest787/PersonalWebsite"
                            git="Personal Website"
                            date="2023-2024"
                            type="Personal"
                        />
                    : null}
                    {(component===2) ? 
                        <Item 
                            name="Data Upload Feature" 
                            tech="JavaScript, Node.js, AWS, React.js, MongoDB"
                            desc="Developed specialized script to upload CSV information to MongoDB collections. 
                            Authenticated and adjusted uploaded data to fit collection format. Integrated script with 
                            external data import software for improved customer experience."
                            link={false}
                            git={false}
                            date="2022-2023"
                            type="Professional"
                        />
                    : null}
                    {(component===3) ? 
                        <Item 
                            name="Banished Wizards of The Opal Isles" 
                            tech="Unity, C#, Trello"
                            desc="A platform game developed in Unity using C#. 
                            You play as a wizard, fighting enemies and collecting rare stones to 
                            increase your power! Worked with team to design each level to be unique 
                            and fun for the player."
                            link={false}
                            git={false}
                            date="2021"
                            type="Academic"
                        />
                    : null}
                    {(component===4) ? 
                        <Item 
                            name="Filter Application" 
                            tech="Python, Scrapy, Playwright, MongoDB, React.js, JavaScript, Keras, Firebase"
                            desc="Application to collect data through a Python-based web scraper using Scrapy 
                            and Playwright, organize and filter it, then present it in a React application.
                            My future hopes for this include website authentication and more personalized 
                            filtering with user specific data and models."
                            link={false}
                            git={false}
                            date="2023-2024"
                            type="Personal"
                        />
                    : null}
                    {(component===5) ? 
                        <Item 
                            name="Virtual Reality Emotion Tracking Toolkit" 
                            tech="Python, TensorFlow, Neural Network, Unity, VR"
                            desc="The intention of the toolkit was to offer a way for VR games to interpret gestures 
                            from a player as either indicative of a target emotion or not, and to relay that information 
                            back to the game as an input. A long short-term memory neural network was used to analyze 
                            time series data retrieved from VR equipment from players."
                            link={false}
                            git={false}
                            date="2020-2021"
                            type="Academic"
                        />
                    : null}
                    {(component===6) ? 
                        <Research/>
                    : null}
                </div>
                <div className={"projects__content__tabs projects__content__tabs__right " + ((component===0) ? "projects__content__tabs__closed" : "projects__content__tabs__opened")}>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(4)}>
                        <h2 className="projects__content__tabs__title">Filter Application</h2>
                        <h3 className="projects__content__tabs__tech">Python, Scrapy, Playwright, MongoDB, React.js, JavaScript</h3>
                    </div>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(5)}>
                        <h2 className="projects__content__tabs__title">Virtual Reality Emotion Tracking Toolkit</h2>
                        <h3 className="projects__content__tabs__tech">Python, TensorFlow, Neural Network, Unity</h3>
                    </div>
                    <div className="projects__content__tabs__project" onClick={() => handleClick(6)}>
                        <h2 className="projects__content__tabs__title">Personal Research</h2>
                        <h3 className="projects__content__tabs__tech">Machine Learning, DevOps, Web Design</h3>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Projects;