import React from "react";

interface Props {
    select: any;
    value: string;
}

export const SelectNumber: React.FC<Props> = ({ select, value }) => {
    var numList: number[] = [];
    for (var i = 0; i <= 100; i++) {
        numList.push(i)
    }
    return (
        <select name="number" id="number" value={value} onChange={e => select(e.target.value)} >
            <option value="" selected ></option>
            {
                numList.map(num => (
                    <option value={num}>{num}</option>
                ))
            }
        </select>
    )
}



