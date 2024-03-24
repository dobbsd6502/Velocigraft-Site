import React from 'react';
import './footer.css'; // import the CSS file


const footer = () => {
    const handleLinkClick = (event, url) => {
        event.preventDefault();
        window.open(url, '_blank');
    };

    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="column">
                        <h3>About Us</h3>
                        <p>Velocigraft is a revolutionary skin meshing device intended for limited-resource healthcare settings in Sub-Saharan Africa.</p>
                    </div>
                    <div className="column">
                        <h3>Contact</h3>
                        <p>Email: velocigraft@gmail.com</p>
                        <p>Phone: 724-766-9724</p>
                    </div>
                    <div className="column">
                        <h3>Follow Us</h3>
                        <div className="socialIcons">
                            <a href="/" className="icon" onClick={(event) => handleLinkClick(event, 'INSERT_INSTAGRAM_LINK_HERE')}>Instagram</a>
                            <a href="/" className="icon" onClick={(event) => handleLinkClick(event, 'https://www.linkedin.com/company/velocigraft/')}>Linkedin</a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="bottomBar">
                <p>&copy; {new Date().getFullYear()} Velocigraft. All rights reserved.</p>
            </div>
        </div>
    );
};

export default footer;