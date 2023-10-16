import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { modalToggler } from '../../redux/features/formSlice/formSlice';
const Dropdown = () => {

    const dispatch = useDispatch()
    const toggleDropdown = () => {
        dispatch(modalToggler(true))
    };



    return (

        <main className='dropdown_container' >
            <section id='listField1'>

                <section className='' onClick={toggleDropdown}>
                    <div className='selected_item'>
                        <img src='/img/ETH LOGO.svg' alt='coin' />
                        <p id='selectText1'>ll</p>
                    </div>

                    <svg className={`dropdown_state`} id='dropdownField1' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 0H0L7 7L14 0Z" fill="#6E56F8" />
                    </svg>
                </section>
            </section>
        </main>
    );
};

export default Dropdown