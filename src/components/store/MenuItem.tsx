import React, { useState } from "react";
import { Quantity } from "./Quantity"
import { Link } from 'react-router-dom';

interface Info {
    title: string;
    description: string;
    price: number;
    size: number;
    imgURL: string;
}
interface Props {
    info: Info;
}

export const MenuItem: React.FC<Props> = ({ info }) => {
    const [price, setPrice] = useState(info.price);
    const [qty, setQty] = useState(1);
    const inc = () => {
        setPrice(price + info.price)
        setQty(qty + 1)
    }
    const dec = () => {
        setPrice(price - info.price)
        setQty(qty - 1)
    }

    return (
        <div className='menu-item'>
            <img src={info.imgURL} alt='' />
            <div className='info-top'>
                <div className='top'>
                    <h4>{info.title}</h4>
                    <h5>${price}</h5>
                </div>
                <p>{info.description}</p>
            </div>
            <div className='info-bottom'>
                <Quantity info={{ Qty: qty, Dec: dec, Inc: inc }} />
                <Link to='/form' className='btn'> Add to Cart </Link>
                <div className='sizes'>
                    <p>Choose Your Size!</p>
                    <div className='size'>
                        <h5>{info.size}</h5>
                        <h6>oz</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}