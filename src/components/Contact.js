function Contact() { 
    return (  
        <div className="contact">
            <div className="contact__content">
                <h2 className="contact__heading">Contact Me</h2>
                <div className="contact__desc-container">
                    <div className="contact__email">
                        <h2 className="contact__title">Email:</h2>
                        <h1 className="contact__value">chelseaeverest8@gmail.com</h1>
                    </div>
                    <div className="contact__linkedin">
                        <h2 className="contact__title">LinkedIn:</h2>
                        <h1 className="contact__value">
                            <a href="https://www.linkedin.com/in/chelsea-everest/">chelsea-everest</a>
                        </h1>
                    </div>
                    <div className="contact__github">
                        <h2 className="contact__title">Github:</h2>
                        <h1 className="contact__value">
                            <a href="https://github.com/everest787">everest787</a>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;