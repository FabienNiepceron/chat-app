import React from 'react';
import './Contact.css';


function Contact () {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar"/>
            <p className="name">Fabien</p>
            <p className="name">Niepceron</p>
             <section className="status">
             <p class="status status-online"></p>
             <p class="status status-text">Online</p>
             </section>
        </div>
    );
}
                 

 
            
export default Contact ;