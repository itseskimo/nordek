import { useDispatch, useSelector } from 'react-redux';
import { modalToggler } from '../../redux/features/formSlice/formSlice';

const Dropdown = () => {
    const { checkedItem } = useSelector((state) => state.form)

    const dispatch = useDispatch()

    const toggleDropdown = () => {
        dispatch(modalToggler(true))
    };



    return (

        <main className='dropdown_container' >
            <section id='listField1'>

                <section className='' onClick={toggleDropdown}>
                    <div className='selected_item'>
                        <img src={`${checkedItem?.url ? checkedItem.url : '/img/BITCOIN LOGO.svg'}`} />
                        <p id='selectText1'>{`${checkedItem?.name ? checkedItem.name : 'Bitcoin'}`}</p>
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