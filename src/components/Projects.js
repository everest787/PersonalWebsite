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

    function Item({ name, tech, desc, link, git }) {
        return (
            <div className="projects__content__desc">
                <h1 className="projects__content__desc__header">{name}</h1>
                <h2 className="projects__content__desc__tech">{tech}</h2>
                <p className="projects__content__desc__desc">{desc}</p>
                <div className="projects__content__desc__git">
                    <h2 className="projects__content__desc__git__label">GitHub: </h2>
                    <a href={link} target="_blank" rel="noreferrer" className="projects__content__desc__git__link">{git}</a>
                </div>
                
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
                <div className={"projects__content__items projects__content__items__left " + ((component===0) ? "projects__content__items__closed" : "projects__content__items__opened")}>
                    <div className="projects__content__items__project" onClick={() => handleClick(1)}>
                        <h2 className="projects__content__items__title">Websites</h2>
                        <h3 className="projects__content__items__tech">React, SCSS, HTML, JavaScript</h3>
                    </div>
                    <div className="projects__content__items__project"></div>
                    <div className="projects__content__items__project"></div>
                    <div className="projects__content__items__project"></div>
                </div>
                <div className="projects__content__middle">
                    {(component===1) ? 
                        <Item 
                            name="Websites" 
                            tech="React.js, SCSS, JavaScript"
                            desc="Designing and developing personal websites using React and SCSS. 
                            This is the second personal website I have created from scratch, with a 
                            completely different design idea from my first design."
                            link="https://github.com/everest787/PersonalWebsite"
                            git="Personal Website"
                        />
                    : null}
                </div>
                <div className={"projects__content__items projects__content__items__right " + ((component===0) ? "projects__content__items__closed" : "projects__content__items__opened")}>
                    <div className="projects__content__items__project"></div>
                    <div className="projects__content__items__project"></div>
                    <div className="projects__content__items__project"></div>
                    <div className="projects__content__items__project"></div>
                </div>
            </div>
        </div> 
    );
}

export default Projects;