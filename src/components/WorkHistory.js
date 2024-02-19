function WorkHistory() { 
    return (  
        <div className="workhistory">
            <div className="workhistory__content">
                <h2 className="workhistory__heading">Work History</h2>
                <div className="workhistory__desc-container">

                <div className="workhistory__job1">
                    <h2 className="workhistory__title">Junior Backend Developer</h2>
                    <ul className="workhistory__job-desc">
                        <li className="workhistory__job-desc__item">Designed and developed scheduling 
                        based software, including handling complex design issues with comprehensive 
                        solutions.</li>
                        <li className="workhistory__job-desc__item">Produced detailed user flow diagrams and project plans 
                        for software features.</li>
                        <li className="workhistory__job-desc__item">Prepared demonstrations of newly implemented features and 
                        technologies.</li>
                        <li className="workhistory__job-desc__item">Examined and maintained software quality through monitoring 
                        of internal data analytics.</li>
                    </ul>
                </div>
                <div className="workhistory__job2">
                    <h2 className="workhistory__title">Quality Assurance Analyst</h2>
                    <ul className="workhistory__job-desc">
                        <li className="workhistory__job-desc__item">Analyzed user / business needs to 
                        produce detailed functional and technical requirements.</li>
                        <li className="workhistory__job-desc__item">Created software change documentation
                         for features.
                            <ul className="workhistory__job-desc">
                                <li className="workhistory__job-desc__item">Reported results, elevated issues, and maintained formal 
                            documentation.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="workhistory__job3">
                    <h2 className="workhistory__title">Quality Assurance Automation Analyst, Intern</h2>
                    <ul className="workhistory__job-desc">
                        <li className="workhistory__job-desc__item">Utilized business and technical 
                        requirements to develop behaviour driven test automation.</li>
                        <li className="workhistory__job-desc__item">Demonstrated recently integrated 
                        automation features to management and other teams.</li>
                    </ul>
                </div>

                <div className="workhistory__technologies">
                    <h2 className="workhistory__technologies__text">Ingredients</h2>
                </div>
                    
                <div className="workhistory__job1-stack">
                    <ul className="workhistory__stacklist">
                        <li className="workhistory__stacklist__item">
                        Javascript, NodeJs, TypeScript, React, Azure, AWS, Jira, MongoDB, GitHub, API, Agile
                        </li>
                    </ul>
                </div>
                <div className="workhistory__job2-stack">
                    <ul className="workhistory__stacklist">
                        <li className="workhistory__stacklist__item">
                        Java, MySQL, Micro-services, Test Cases, Jira, GitHub
                        </li>
                    </ul>
                </div>
                <div className="workhistory__job3-stack">
                    <ul className="workhistory__stacklist">
                        <li className="workhistory__stacklist__item">
                        Java, MySQL, Selenium, GitHub, Gherkin, Micro-services, Junit, Gradle, HTML5, Agile
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
}

export default WorkHistory;