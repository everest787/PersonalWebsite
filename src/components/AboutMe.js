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
                        <div className="aboutme__section__card">
                            <div className="aboutme__section__card__side aboutme__section__card__side--front">
                                <figure className="aboutme__figure">
                                    <img src={maya} alt="Dog" className="aboutme__photo"/>
                                </figure>
                            </div>
                            <div className="aboutme__section__card__side aboutme__section__card__side--back">
                                <div className="aboutme__section__card__side--back__body">
                                    <h3>Things I like:</h3>
                                    <div>
                                        <ul>
                                            <li>
                                            Reading
                                            </li>
                                            <li>
                                                Thunderstorms
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                            Ice Cream
                                            </li>
                                            <li>
                                               Camping 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutme__section aboutme__section2">
                        <h3 className="aboutme__section__heading">
                            I have a dog named Maya
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section3">
                        <div className="aboutme__section__card">
                            <div className="aboutme__section__card__side aboutme__section__card__side--front">
                                <figure className="aboutme__figure">
                                    <img src={besties} alt="Maya and I" className="aboutme__photo"/>
                                </figure>
                            </div>
                            <div className="aboutme__section__card__side aboutme__section__card__side--back">
                            <div className="aboutme__section__card__side--back__body">
                                    <h3>Things I dislike:</h3>
                                    <div>
                                        <ul>
                                            <li>
                                            Tomatoes
                                            </li>
                                            <li>
                                            Mosquitoes
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                            Stilettos
                                            </li>
                                            <li>
                                            Manifestos
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                        <div className="aboutme__section__card">
                            <div className="aboutme__section__card__side aboutme__section__card__side--front">
                                <figure className="aboutme__figure">
                                    <img src={winter} alt="Winter Landscape" className="aboutme__photo"/>
                                </figure>
                            </div>
                            <div className="aboutme__section__card__side aboutme__section__card__side--back">
                            <div className="aboutme__section__card__side--back__body">
                                    <h3>Books I am Reading:</h3>
                                    <div>
                                        <ul className="books">
                                            <li>
                                            The Three-Body Problem
                                                <h3>by Liu Cixin</h3>
                                            </li>
                                            <li>
                                            The Phoenix Project
                                                <h3>by Gene Kim, George Spafford, and Kevin Behr</h3>
                                            </li>
                                        </ul>
                                        <ul className="books">
                                            <li>
                                            Frames of Mind
                                                <h3>by Howard Gardner</h3>
                                            </li>
                                            <li>
                                            One Hundred Years of Solitude
                                                <h3>by Gabriel García Márquez</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aboutme__section aboutme__section8">
                        <h3 className="aboutme__section__heading">
                            I enjoy hiking and nature photography
                        </h3>
                    </div>
                    <div className="aboutme__section aboutme__section9">
                        <div className="aboutme__section__card">
                            <div className="aboutme__section__card__side aboutme__section__card__side--front">
                                <figure className="aboutme__figure">
                                    <img src={autumn} alt="Autumn" className="aboutme__photo"/>
                                </figure>
                            </div>
                            <div className="aboutme__section__card__side aboutme__section__card__side--back">
                            <div className="aboutme__section__card__side--back__body">
                                    <h3>Places I Would Like to Visit:</h3>
                                    <div>
                                        <ul>
                                            <li>
                                            North Macedonia
                                            </li>
                                            <li>
                                            India
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                            South Carolina
                                            </li>
                                            <li>
                                            Alpha Centauri 
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;