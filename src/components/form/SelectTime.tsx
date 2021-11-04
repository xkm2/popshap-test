import React from "react";

interface Props {
    select: any;
    value: string;
}

export const SelectTime: React.FC<Props> = ({ select, value }) => {
    var am: any[] = [];
    var pm: any[] = [];
    for (var i = 0; i < 12; i++) {

        am.push({ value: i.toString() + ':00', display: i == 0 ? '12:00 AM' : i.toString() + ':00 AM' })
        am.push({ value: i.toString() + ':30', display: i == 0 ? '12:30 AM' : i.toString() + ':30 AM' })
        let j = i + 12;
        pm.push({ value: j.toString() + ':00', display: i == 0 ? '12:00 PM' : i.toString() + ':00 PM' })
        pm.push({ value: j.toString() + ':30', display: i == 0 ? '12:30 PM' : i.toString() + ':30 PM' })
    }
    var timeList: any[] = am.concat(pm);
    return (
        <select name="time" id="time" value={value} onChange={e => select(e.target.value)} >
            <option value="" selected ></option>
            {
                timeList.map(time => (
                    <option value={time.value}>{time.display}</option>
                ))
            }
        </select>
    )
}