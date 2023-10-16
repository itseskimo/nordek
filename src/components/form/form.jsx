import './form.css';
import Dropdown from '../../elements/dropdown/dropdown';
import React, { useState, useEffect } from "react";

const Form = () => {


    const [price, setPrice] = useState(0);

    useEffect(() => {

        const ws = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@trade");

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const formattedPrice = parseFloat(data.p).toFixed(2); // Format to two decimal places
            setPrice(formattedPrice);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <div className='form_container'>

            <form className='form'>

                <div className='header_logo'>
                    <img src='/img/ETH LOGO.svg' />
                </div>

                <div className='form_title'>
                    <span>Current value</span>
                    <span>$ {price}</span>
                </div>


                <Dropdown />


                <div className='input_container'>
                    <label className='label'>Amount you want to invest</label>
                    <div className='input_writable'>
                        <span>INR</span>
                        <input />
                    </div>
                </div>


                <div className='input_container input_readOnly'>
                    <label className='label'>Estimate Number of ETH You Will Get</label>
                    <input className='input' placeholder='0.00' />
                </div>

                <input type='submit' value={'Buy'} className='form_button' />
            </form>
        </div>
    );
}

export default Form;