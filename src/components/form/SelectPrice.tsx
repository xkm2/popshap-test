import React from "react";

interface Props {
    select: any;
    value: string;
}

export const SelectPrice: React.FC<Props> = ({ select, value }) => {
    var numList: number[] = [];
    for (var i = 0; i <= 100; i++) {
        numList.push(i)
    }
    return (
        <select
            name="price"
            id="price"
            value={value}
            onChange={e => select(e.target.value)} >
            {
                numList.map((num, index) => (
                    <option
                        key={index}
                        value={num}>
                        ${num}.00
                    </option>
                ))
            }
        </select>
    )
}



