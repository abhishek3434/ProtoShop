import React from 'react';
import "./HomePage.scss"
import Directory from '../../Resulable_components/Directory/Directory'

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
               <Directory/>
            </div>
        </div>
      );
}
 
export default HomePage;