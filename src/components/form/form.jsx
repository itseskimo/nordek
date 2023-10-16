import React, { useState, useRef, useEffect } from 'react';

import './form.css';


const Dropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (

        <main className='dropdown_container' >
            <label className=''>Select Asset</label>

            <section id='listField1' ref={dropdownRef} onClick={toggleDropdown}>

                <section className=''>
                    <p id='selectText1'>{selectedOption}</p>
                    <svg className={`dropdown_state ${isOpen && 'dropdown_rotate'}`} id='dropdownField1' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0H0L7 7L14 0Z" fill="#6E56F8" />
                    </svg>
                </section>


                <ul className={` ${isOpen ? '' : 'hidden'}`} id='hideTxtField1' >
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>

            </section>
        </main>
    );
};

const Form = () => {



    const assetOptions = ['ETH', 'BTC']; // Add more options as needed


    return (
        <div className='form_container'>
            <form className='form'>




                <div className='form_title'>
                    <span>Current value</span>
                    <span>₹ 323</span>
                </div>


                <Dropdown options={assetOptions} />




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