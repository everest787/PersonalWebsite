function Projects() { 
    return ( 
        <div className="projects">
            <div className="projects__content">
                <h2 className="projects__heading">Projects</h2>
                <div className="projects__projects">
                    <h2 className="projects__title">This Website + My Old Website</h2>
                    <div className="projects__tech">
                        <h3>React</h3>
                    </div>
                    <ul className="projects__description">
                        <li>
                            Stuff
                        </li>
                    </ul>

                    <h2 className="projects__title">Topics I'm Researching</h2>
                    <div className="projects__research">
                        <h2 className="projects__title">DevOps</h2>
                        <div className="projects__tech">
                            <h3>AWS</h3>
                        </div>
                        <ul className="projects__description">
                            <li>
                                Stuff
                            </li>
                        </ul>

                        <h2 className="projects__title">Machine Learning</h2>
                        <div className="projects__tech">
                            <h3>Python</h3>
                        </div>
                        <ul className="projects__description">
                            <li>
                                Stuff
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="projects__webscraper">
                    <h2 className="projects__title">Web Scraper</h2>
                    <h3 className="projects__description">Scrapy and Playwright with Python</h3>
                    <div className="projects__webscraper__phase1">
                        <button className="projects__webscraper__button">Phase 1</button>
                        <ul className="projects__webscraper__list">
                            <li>
                            Scrape publicly available data through proxies
                            </li>
                            <li>
                            Data pipelined through formatting, filtering, and organizing
                            </li>
                            <li>
                            Saved locally
                            </li>
                            <li>
                            Displayed on simple website
                            </li>
                        </ul>
                    </div>
                    <div className="projects__webscraper__phase2">
                        <button className="projects__webscraper__button">Phase 2</button>
                        <ul className="projects__webscraper__list">
                            <li>
                            Data saved to database hosted on server (maybe AWS)
                            </li>
                            <li>
                            Website hosted on server (possibly the same as above)
                            </li>
                            <li>
                            Website connected through backend API
                            </li>
                        </ul>
                    </div>
                    <div className="projects__webscraper__phase3">
                        <button className="projects__webscraper__button">Phase 3</button>
                        <ul className="projects__webscraper__list">
                            <li>
                            Website Authenticiation and more personalized filtering
                            </li>
                            <li>
                            Machine learning Recommender system to accompany filtering
                            </li>
                            <li>
                            User specific data and models
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default Projects;