import maya from '../img/PuppoHatesStudying.jpg';
import besties from '../img/MeAndMaya.jpg';
import winter from '../img/WinterLandscape.jpg';
import autumn from '../img/AutumnLandscapeMaya.jpg';

function AboutMe() { 
    return (  
        <div className="aboutme">
            <div className="aboutme__line aboutme__line--top"></div>
            <div className="aboutme__line aboutme__line--right"></div>
            <div className="aboutme__line aboutme__line--bottom"></div>
            <div className="aboutme__line aboutme__line--left"></div>
            <div className="aboutme__content">
                <h2 className="aboutme__heading">About Me</h2>
                <div className="aboutme__container">
                    <div className="aboutme__section aboutme__section1">
                        <figure className="aboutme__figure">
                            <img src={maya} alt="Dog" className="aboutme__photo"/>
                        </figure>
                    </div>
                    <div className="aboutme__section aboutme__section2">
                        <h3 className="aboutme__section__heading">
                            I have a dog named Maya
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section3">
                        <figure className="aboutme__figure">
                            <img src={besties} alt="Maya and I" className="aboutme__photo"/>
                        </figure>
                    </div>
                    <div className="aboutme__section aboutme__section4">
                        <h3 className="aboutme__section__heading">
                            I can lick my elbow
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section5">
                        <h3 className="aboutme__section__heading">
                            I have a Bachelor of Engineering Science in Software Engineering
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section6">
                        <h3 className="aboutme__section__heading">
                            Factorio is my favourite video game
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section7">
                        <figure className="aboutme__figure">
                            <img src={winter} alt="Winter Landscape" className="aboutme__photo"/>
                        </figure>
                    </div>
                    <div className="aboutme__section aboutme__section8">
                        <h3 className="aboutme__section__heading">
                            I enjoy hiking and nature photography
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section9">
                        <figure className="aboutme__figure">
                            <img src={autumn} alt="Autumn" className="aboutme__photo"/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;