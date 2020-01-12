import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function ContactPage(props){
    return(
        // anything that goes between content tags is placed between props.children
        <div>
            <Hero title={props.title} />
            <Content>
                <p>yay</p>
            </Content>
        </div>
    );
}

export default ContactPage;