import { SectionContainer } from '../components/home/SectionContainer';
import { default as data } from './Home.json';
import './Home.scss';

const HomePage = () => {
    const sections = data.sections;
    return (
        <div className='home-container' >
            {
                sections.map((section, index) => (
                    <SectionContainer key={index} index={index} info={section} />
                ))
            }
            <div
                className='row'
                style={{ backgroundImage: "url('./img/iStock-1002878308 1.jpg')" }}>
                <img src='./img/iStock-1002878308.jpg' alt='' />
                <div className='info' >
                    <h2>Foo Bar10</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis eros nisl. Curabitur id efficitur felis. </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;