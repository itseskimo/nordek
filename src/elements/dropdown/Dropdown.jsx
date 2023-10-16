import React, { useState, useRef, useEffect } from 'react';

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

            <section id='listField1'>

                <section className='' ref={dropdownRef} onClick={toggleDropdown}>
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

export default Dropdown