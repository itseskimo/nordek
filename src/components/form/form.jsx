import './form.css';

const Form = () => {


    function faqToggle(id, e) {
        let listField = document.getElementById(`listField${id}`)
        let dropdownField = document.getElementById(`dropdownField${id}`)
        let hideTxtField = document.getElementById(`hideTxtField${id}`)
        let selectText = document.getElementById(`selectText${id}`)
        dropdownField.classList.toggle('dropdown_rotate')
        hideTxtField.classList.toggle('hidden')

        selectText.innerHTML = e.target.innerText

        document.addEventListener('click', event => {
            const isClickInside = listField?.contains(event.target)

            if (!isClickInside) {
                hideTxtField.classList.add('hidden')
                dropdownField.classList.remove('dropdown_rotate')

                // The click was OUTSIDE the specifiedElement, do something
            }
        })

    }

    return (
        <div className='form_container'>
            <form className='form'>

               


                <div className='form_title'>
                    <span>Current value</span>
                    <span>₹ 323</span>
                </div>


                <main className='dropdown_container' >
                    <label className=''>Select Asset</label>

                    <section id='listField1' onClick={(e) => faqToggle(1, e)}>

                        <section className=''>
                            <p id='selectText1'>ETH</p>
                            <svg className='dropdown_state' id='dropdownField1' width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 0H0L7 7L14 0Z" fill="#6E56F8" />
                            </svg>
                        </section>


                        <ul className='hidden' id='hideTxtField1' >
                            <li className='' >
                                ETH
                            </li>

                            <li className='' >
                                BTC
                            </li>
                        </ul>

                    </section>
                </main>

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