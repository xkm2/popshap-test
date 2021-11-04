import { MenuItem } from '../components/store/MenuItem';
import { default as data } from './Store.json';
import './Store.scss';
interface Product {
    title: string;
    description: string;
    price: number;
    size: number;
    imgURL: string;
}
interface Sections {
    title: string;
    description: string;
    products: Product[];
}
interface Props {
    p: Product[];
}



const StorePage = () => {
    const sections: Sections[] = data.sections;
    return (
        <div className='container' >
            {
                sections.map(section => (
                    <div className='section-container'>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        <SectionProducts p={section.products} />
                    </div>
                ))
            }
        </div>
    );
};

const SectionProducts: React.FC<Props> = ({ p }) => {
    const products: Product[] = p;
    return (
        <div className='products'>
            {
                products.map(product => (
                    <div className='product'>
                        <MenuItem info={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default StorePage;