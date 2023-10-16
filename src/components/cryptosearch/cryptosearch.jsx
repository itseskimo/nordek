import './cryptosearch.css'

const cryptosearch = () => {
    const crptoList = [
        { url: '/img/ETH LOGO.svg', name: 'Ethereum', id: 'ethusdt' },
        { url: '/img/SOLANA LOGO.svg', name: 'Solana', id: 'solusdt' },
        { url: '/img/BITCOIN LOGO.svg', name: 'Bitcoin', id: 'btcusdt' },
        { url: '/img/MATIC LOGO.svg', name: 'Matic', id: '' },
        { url: '/img/BNB LOGO.svg', name: 'Binance', id: 'bnbusdt' },
        { url: '/img/XRP LOGO.svg', name: 'XRP', id: 'xrpusdt' },
    ]
    return (
        <div className='modal_container'>
            <div className='search_container'>
                {/* <img src='/img/CROSS.svg' alt='Ticked' /> */}

                <div className='input_search-container '>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.0001 13.0001L10.1048 10.1048M10.1048 10.1048C10.6001 9.60955 10.9929 9.02159 11.261 8.3745C11.529 7.72742 11.6669 7.03387 11.6669 6.33347C11.6669 5.63307 11.529 4.93953 11.261 4.29244C10.9929 3.64535 10.6001 3.0574 10.1048 2.56214C9.60955 2.06688 9.02159 1.67402 8.3745 1.40599C7.72742 1.13795 7.03387 1 6.33347 1C5.63307 1 4.93953 1.13795 4.29244 1.40599C3.64535 1.67402 3.0574 2.06688 2.56214 2.56214C1.56192 3.56236 1 4.91895 1 6.33347C1 7.748 1.56192 9.10458 2.56214 10.1048C3.56236 11.105 4.91895 11.6669 6.33347 11.6669C7.748 11.6669 9.10458 11.105 10.1048 10.1048Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <input placeholder='Search Chains' />

                </div>

                <section className='search_list'>
                    {
                        crptoList.map((coin) => (
                            <div className='search_list-item'>
                                <div>
                                    <img src={coin.url} alt={coin.name} />
                                    <span>{coin.name} </span>
                                </div>
                                <img src='/img/TICK.svg' alt='Ticked' />
                            </div>
                        ))
                    }


                </section>

            </div>
        </div>
    )
}

export default cryptosearch