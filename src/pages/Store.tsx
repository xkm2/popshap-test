import React from "react";
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
        <div className='store-container' >
            {
                sections.map((section, index) => (
                    <div key={index} className='section-container'>
                        <h2>{section.title}</h2>
                        <p>{section.description}</p>
                        <ProductsSection p={section.products} />
                    </div>
                ))
            }
        </div>
    );
};

const ProductsSection: React.FC<Props> = ({ p }) => {
    const products: Product[] = p;
    return (
        <div className='products'>
            {
                products.map((product, index) => (
                    <div key={index} className='product'>
                        <MenuItem info={product} />
                    </div>
                ))
            }
            <div className='product'>
                <div
                    className='menu-item'
                    style={{ backgroundImage: "url('./img/Frame 216.jpg')" }}>
                </div>
            </div>
        </div>
    )
}

export default StorePage;