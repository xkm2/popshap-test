import React from 'react';
import { Link } from 'react-router-dom';
import { SectionContainer } from '../components/home/SectionContainer';
import './Home.scss';
const HomePage = () => {
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis."
    return (
        <div className='container' >
            <SectionContainer info={{ title: 'Foo Bar1', description: lorem, color: 'ladylike', bColor: 'pale-seafoam', imgURL: './img/iStock-1218193400 1.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar2', description: lorem, color: 'pale-seafoam', bColor: 'flesh-pink', imgURL: './img/iStock-1131848066 1.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar3', description: lorem, color: 'carousel-pink', bColor: 'cardamom-fragrance', imgURL: './img/iStock-1138438623 1.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar4', description: lorem, color: 'cardamom-fragrance', bColor: 'carousel-pink', imgURL: './img/iStock-1311408791 1.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar5', description: lorem, color: 'ladylike', bColor: 'yellow-wax-paper', imgURL: './img/iStock-665112060- green  bowl-01.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar6', description: lorem, color: 'yellow-wax-paper', bColor: 'blowing-kisses', imgURL: './img/iStock-638367486.jpg' }} />
            <SectionContainer info={{ title: 'Foo Bar7', description: lorem, color: 'placebo-magenta', bColor: 'pale-seafoam', imgURL: './img/iStock-1326092934 1.jpg' }} />
        </div>
    );
};

export default HomePage;