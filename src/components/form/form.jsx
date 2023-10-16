import './form.css';
import Dropdown from '../../elements/dropdown/dropdown';

const Form = () => {



    const assetOptions = ['ETH', 'BTC']; // Add more options as needed


    return (
        <div className='form_container'>
            <div className='border_container'>
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
        </div>
    );
}

export default Form;