import './form.css';
import Dropdown from '../../elements/dropdown/dropdown';
import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

const Form = () => {
    const { checkedItem } = useSelector((state) => state.form)

    const [userInvested, setUserInvested] = useState('')
    const [price, setPrice] = useState(0);
console.log(price)
    useEffect(() => {

        const tradingPair = checkedItem?.id ? checkedItem?.id : 'btcusdt';
        const ws = new WebSocket(`wss://stream.binance.com:9443/ws/${tradingPair}@trade`);console.log(ws)
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const formattedPrice = parseFloat(data.p).toFixed(2); // Format to two decimal places
            setPrice(formattedPrice);
        };

        return () => {
            ws.close();
        };
    }, [checkedItem]);

    function calculateCoinAmount(inrAmount, exchangeRate, btcPrice) {
        // Convert INR to USD
        const usdAmount = inrAmount / exchangeRate;

        // Calculate the BTC amount
        const coinAmount = usdAmount / btcPrice;

        // Round to 6 decimal places
        return coinAmount.toFixed(2);
    }

    // Usage example
    const inrAmount = userInvested; // Amount in INR
    const exchangeRate = 82; // 1 USD = 82 INR

    const coinAmount = calculateCoinAmount(inrAmount, exchangeRate, price);

    return (
        <div className='form_container'>

            <form className='form'>

                <div className='header_logo'>
                    <img src={`${checkedItem?.url ? checkedItem.url : '/img/BITCOIN LOGO.svg'}`} />
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
                        <input onChange={(e) => setUserInvested(e.target.value)} value={userInvested} />
                    </div>
                </div>


                <div className='input_container input_readOnly'>
                    <label className='label'>Estimate Number of ETH You Will Get</label>
                    <input className='input' placeholder='0.00' value={coinAmount} readOnly/>
                </div>

                <input type='submit' value={'Buy'} className='form_button' />
            </form>
        </div>
    );
}

export default Form;