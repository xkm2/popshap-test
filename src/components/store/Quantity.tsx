import React from "react";

interface Quantity {
    Qty: number;
    Inc: any;
    Dec: any;
}
interface Props {
    info: Quantity;
}

export const Quantity: React.FC<Props> = ({ info }) => {
    return (
        <div className="qty">
            <button className="minus" onClick={info.Dec} disabled={info.Qty < 1}>-</button>
            <h3>{info.Qty}</h3>
            <button className="plus" onClick={info.Inc}>+</button>
        </div>
    )
};