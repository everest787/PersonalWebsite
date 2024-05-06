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
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            JavaScript
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            TypeScript
                            </li>
                        </ul>
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
                            Azure
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            AWS
                            </li>
                        </ul>
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            Jira
                            </li>
                        </ul>
                    </div>
                    
                    <div className={"workhistory__job-desc " 
                        + ((jbd) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickjbd()}>
                        <h3>Responsibilities</h3>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Wrote code and tests, resolved issues, and maintained documentation.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Upheld software quality standards 
                            <ul>
                                <li>Optimization of database queries </li>
                                <li>Refinement of software performance</li>
                                <li>Analyzed bottlenecks</li>
                                <li>Managed systems</li>
                            </ul>
                            </li>
                        </ul>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Lead developer on data upload feature.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Maintained / monitored CI/CD software.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Led monthly team retrospective meetings.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Communicated with cross-functional teams, integration partners, and team members.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Created user flow diagrams and project plans.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="workhistory__job">
                    <h2 className={"workhistory__job__title " 
                        + ((qaa) ? "workhistory__job__title__opened" : "workhistory__job__title__closed")}>Quality Assurance Analyst</h2>
                    <div className="workhistory__job__stack">
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            Java
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            MySQL
                            </li>
                        </ul>
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            Jira
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            Excel
                            </li>
                        </ul>
                    </div>

                    <div className={"workhistory__job-desc " 
                        + ((qaa) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickqaa()}>
                        <h3>Responsibilities</h3>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Conducted software testing for robustness, reliability, and adherence to quality standards.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Wrote / maintained functional and technical requirement documentation.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Documenting features, testing outcomes, product issues, and areas for improvement.
                            </li>
                        </ul>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Created and monitored Jira tickets for features or issues.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Planned new testing processes.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Communicated with cross-functional teams about software features and issues. 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="workhistory__job">
                    <h2 className={"workhistory__job__title " 
                        + ((qaaai) ? "workhistory__job__title__opened" : "workhistory__job__title__closed")}>Quality Assurance Automation Analyst, Intern</h2>
                    <div className="workhistory__job__stack">
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            Java
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            Selenium
                            </li>
                        </ul>
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            MySQL
                            </li>
                        </ul>
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            Junit
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            Gradle
                            </li>
                        </ul>
                        <ul className="workhistory__job__stack__list">
                            <li className="workhistory__job__stack__list__item">
                            HTML5
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            XML
                            </li>
                            <li className="workhistory__job__stack__list__item">
                            JSON
                            </li>
                        </ul>
                    </div>

                    <div className={"workhistory__job-desc " 
                        + ((qaaai) ? "workhistory__job-desc__opened" : "workhistory__job-desc__closed")} 
                        onClick={() => handleClickqaaai()}>
                        <h3>Responsibilities</h3>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Developed, maintained, and updated behaviour driven test automation. 
                            </li>
                            <li className="workhistory__job-desc__item">
                                Managed the execution of automated test scripts, providing demonstrations and explanations when necessary.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Documenting features, testing outcomes, product issues, and areas for improvement.
                            </li>
                        </ul>
                        <ul>
                            <li className="workhistory__job-desc__item">
                                Planned new testing processes.
                            </li>
                            <li className="workhistory__job-desc__item">
                                Communicated with cross-functional teams about technical implementation and issues. 
                            </li>
                        </ul>
                    </div>
                    
                </div>
                    
                </div>
            </div>
        </div>
    );
}

export default WorkHistory;