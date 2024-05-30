import { useState } from 'react';

function WorkHistory() { 
    const [jbd, setjbd] = useState(false);
    const [qaa, setqaa] = useState(false);
    const [qaaai, setqaaai] = useState(false);

    function handleClickjbd() {
        setjbd(prevjbd => !prevjbd);
    }
    function handleClickqaa() {
        setqaa(prevqaa => !prevqaa);
    }
    function handleClickqaaai() {
        setqaaai(prevqaaai => !prevqaaai);
    }

    return (  
        <div className="workhistory">
            <div className="workhistory__line workhistory__line--top"></div>
            <div className="workhistory__line workhistory__line--right"></div>
            <div className="workhistory__line workhistory__line--bottom"></div>
            <div className="workhistory__line workhistory__line--left"></div>
            <div className="workhistory__content">
                <h2 className="workhistory__heading">Work History</h2>
                <div className="workhistory__desc-container">

                <div className="workhistory__job">
                    <h2 className={"workhistory__job__title " 
                        + ((jbd) ? "workhistory__job__title__opened" : "workhistory__job__title__closed")} >Junior Backend Developer</h2>
                    <div className="workhistory__job__stack">
                        <div className="workhistory__job__stack__container">
                            <h3>Languages</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    JavaScript
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    TypeScript
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="workhistory__job__stack__container">
                            <h3>Technologies</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Node.js
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    React.js
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    MongoDB
                                    </li>
                                </ul>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    REST API
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    AWS
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    Jira
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className={"workhistory__job-desc " 
                        + ((jbd) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickjbd()}>
                        <h3>Key Responsibilities</h3>
                        <div className="workhistory__job-desc__list">
                            <ul>
                                <li className="workhistory__job-desc__item">
                                    Feature Development
                                </li>
                                <li className="workhistory__job-desc__item">
                                    Issue Tracking and Resolving
                                </li>
                            </ul>
                            <ul>
                                <li className="workhistory__job-desc__item">
                                    Writing and Maintaining Documentation
                                </li>
                                <li className="workhistory__job-desc__item">
                                    Refinement of Database Queries and Software Performance
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="workhistory__job">
                    <h2 className={"workhistory__job__title " 
                        + ((qaa) ? "workhistory__job__title__opened" : "workhistory__job__title__closed")}>Quality Assurance Analyst</h2>
                    <div className="workhistory__job__stack">
                        <div className="workhistory__job__stack__container">
                            <h3>Languages</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Java
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    MySQL
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="workhistory__job__stack__container">
                            <h3>Technologies</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Jira
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    Excel
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"workhistory__job-desc " 
                        + ((qaa) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickqaa()}>
                        <h3>Key Responsibilities</h3>
                        <div className="workhistory__job-desc__list">
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Manual and Automated Software Testing
                            </li>
                            <li className="workhistory__job-desc__item">
                                Creating and Tracking Tickets for Features and Issues
                            </li>
                        </ul>
                        <ul>
                            <li className="workhistory__job-desc__item workhistory__job-desc__item_2">
                                Writing and Maintaining Documentation Including:

                                <ul>
                                    <li>
                                        Features
                                    </li>
                                    <li>
                                        Testing Outcomes
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Product Issues
                                    </li>
                                    <li>
                                        Areas for Improvement
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="workhistory__job">
                    <h2 className={"workhistory__job__title " 
                        + ((qaaai) ? "workhistory__job__title__opened" : "workhistory__job__title__closed")}>Quality Assurance Automation Analyst, Intern</h2>
                    <div className="workhistory__job__stack">
                        <div className="workhistory__job__stack__container">
                            <h3>Languages</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Java
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    MySQL
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="workhistory__job__stack__container">
                            <h3>Technologies</h3>
                            <div>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Junit
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    Selenium
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    REST API
                                    </li>
                                </ul>
                                <ul className="workhistory__job__stack__list">
                                    <li className="workhistory__job__stack__list__item">
                                    Gradle
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    XML
                                    </li>
                                    <li className="workhistory__job__stack__list__item">
                                    JSON
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={"workhistory__job-desc " 
                        + ((qaaai) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickqaaai()}>
                        <h3>Key Responsibilities</h3>
                        <div className="workhistory__job-desc__list">
                            <ul>
                                <li className="workhistory__job-desc__item">
                                    Test Automation Development and Maintenance
                                </li>
                                <li className="workhistory__job-desc__item">
                                    Managed Execution of Test Scripts
                                </li>
                            </ul>
                            <ul>
                                <li className="workhistory__job-desc__item workhistory__job-desc__item_2">
                                    Writing and Maintaining Documentation Including:

                                    <ul>
                                        <li>
                                            Features
                                        </li>
                                        <li>
                                            Testing Outcomes
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            Product Issues
                                        </li>
                                        <li>
                                            Areas for Improvement
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WorkHistory;