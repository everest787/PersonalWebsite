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
    return ( 
        <div className="projects">
            <div class="projects__line projects__line--top"></div>
            <div class="projects__line projects__line--right"></div>
            <div class="projects__line projects__line--bottom"></div>
            <div class="projects__line projects__line--left"></div>
            <div className="projects__content">
                <h2 className="projects__heading">Projects</h2>
                <div className="projects__projects">
                    <div className="projects__project">
                        <h2 className="projects__title">This Website + My Old Website</h2>
                        <div className="projects__tech">
                            <h3>React</h3>
                        </div>
                        <ul className="projects__description">
                            <li>
                                Continuously designing and enhancing a personal React-based website to serve as a professional portfolio.
                            </li>
                            <li>
                                This new version of the website is new, so please forgive any weirdness that I have yet to wrinkle out.
                            </li>
                        </ul>
                    </div>

                    <h2 className="projects__title">Topics I'm Researching</h2>
                    <div className="projects__research">
                        <div className="projects__project">
                            <h2 className="projects__title">DevOps</h2>
                            <div className="projects__tech">
                                <h3>AWS</h3>
                            </div>
                            <ul className="projects__description">
                                <li>
                                    Studying AWS and DevOps to support future projects, including server hosting and data pipeline management for my current personal website.
                                </li>
                            </ul>
                        </div>

                        <div className="projects__project">
                            <h2 className="projects__title">Machine Learning</h2>
                            <div className="projects__tech">
                                <h3>Python</h3>
                            </div>
                            <ul className="projects__description">
                                <li>
                                    Passionately studying machine learning for future project integration.
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="projects__webscraper">
                    <h2 className="projects__webscraper__title">Web Scraper</h2>
                    <h3 className="projects__webscraper__subtitle">Scrapy and Playwright with Python</h3>
                    <h3 className={"projects__webscraper__description " + ((component===0) ? "visible" : "hidden")}>Developing a Python-based web scraper for efficient data gathering, filtering, and organizing.</h3>
                    <div className={"projects__webscraper__phase projects__webscraper__phase1 " + ((component===1) ? "active" : "inactive")}>
                        <button className="projects__webscraper__button" onClick={() => handleClick(1)}>Phase 1</button>
                        <ul className={"projects__webscraper__list " + ((component===1) ? "visible" : "hidden")}>
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
                    <div className={"projects__webscraper__phase projects__webscraper__phase2 " + ((component===2) ? "active" : "inactive")}>
                        <button className="projects__webscraper__button" onClick={() => handleClick(2)}>Phase 2</button>
                        <ul className={"projects__webscraper__list " + ((component===2) ? "visible" : "hidden")}>
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
                    <div className={"projects__webscraper__phase projects__webscraper__phase3 " + ((component===3) ? "active" : "inactive")}>
                        <button className="projects__webscraper__button" onClick={() => handleClick(3)}>Phase 3</button>
                        <ul className={"projects__webscraper__list " + ((component===3) ? "visible" : "hidden")}>
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