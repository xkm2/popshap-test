import React, { useState } from "react";
import { SelectState } from "./SelectState";
import { SelectNumber } from "./SelectNumber";
import { SelectPrice } from "./SelectPrice";
import { SelectTime } from "./SelectTime";
import { SelectDate } from "./SelectDate";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [qty, setQty] = useState("");
    const [price, setPrice] = useState("");
    const [comment, setComment] = useState("");


    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        let submission = {
            FirstName: name,
            LastName: lastName,
            Email: email,
            PhoneNumber: phone,
            City: city,
            State: state,
            ZipCode: zip,
            Date: date,
            Time: time,
            Quantity: qty,
            Price: price,
            Comment: comment
        }
        console.log(submission)
        alert("Form Submitted!");
        setName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCity('');
        setState('');
        setZip('');
        setDate('');
        setTime('');
        setQty('');
        setPrice('');
        setComment('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='row'>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </label>
            </div>
            <div className='row'>
                <label>
                    Email:
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
            </div>
            <div className='row'>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                </label>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='row'>
                        <label>
                            City:
                            <input
                                type="text"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='row'>
                        <label >
                            Date:
                            <SelectDate select={setDate} value={date} />
                        </label>
                    </div>
                    <div className='row'>
                        <label >
                            Pick a Number:
                            <SelectNumber select={setQty} value={qty} />
                        </label>
                    </div>
                </div>
                <div className='col'>
                    <div className='row'>
                        <label>
                            State:
                            <SelectState select={setState} value={state} />
                        </label>
                        <label>
                            Zip Code:
                            <input
                                type="text"
                                value={zip}
                                onChange={e => setZip(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className='row'>
                        <label >
                            Time:
                            <SelectTime select={setTime} value={time} />
                        </label>
                    </div>
                    <div className='row'>
                        <label >
                            Pick a Price:
                            <SelectPrice select={setPrice} value={price} />
                        </label>
                    </div>
                </div>
            </div>
            <div className='row'>
                <label>
                    Anything we should know?
                    <textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                    />
                </label>
            </div>
            <div className='row submit'>
                <input className="submit" type="submit" value="Send" />
            </div>

        </form>
    );
}