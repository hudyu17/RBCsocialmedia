import React from 'react';

import Hero from '../components/Hero';
// using props means pages are function-based to display data, not class-based 

function HomePage(props){
    return(
        <div>
            <Hero title={props.title} subTitle={props.subTitle}/>
        </div>
        );
}

export default HomePage;