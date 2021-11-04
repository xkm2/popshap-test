import React from "react";

interface Props {
    select: any;
    value: string;
}

export const SelectDate: React.FC<Props> = ({ select, value }) => {
    var dates: any[] = [];
    for (var i = 4; i < 30; i++) {
        dates.push(i.toString() + '/11/2021')
    }
    return (
        <select name="date" id="date" value={value} onChange={e => select(e.target.value)} >
            {
                dates.map((date, index) => (
                    <option key={index} value={date}>{date}</option>
                ))
            }
        </select>
    )
}