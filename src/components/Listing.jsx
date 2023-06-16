import PropTypes from 'prop-types'

const Listing = ({data}) => {
    return (
        <div className='item-list'>

            {data.map((item) =>{
                // console.log(item)
                if(item.state === 'removed') return null;

                const {MainImage: {url_570xN}} = item;

                return (
                    <div className='item'>
                        <div className='item-image'>
                            <a href={item.url}>
                                <img src={url_570xN}/>
                            </a>
                        </div>
                        <div className='item-details'>
                            <p className='item-title'>{item.title.length > 50 ? item.title.slice(0, 49) + '...' : item.title}</p>
                            <p className='item-price'>{item.currency_code === 'USD' ? '$' + item.price : (item.currency_code === 'EUR' ? '&#8364; ' + item.price : item.price)}</p>
                            <p className='item-quantity level-medium'>{item.quantity} left</p>
                        </div>
                    </div> 
                )
            })}

        </div>


    )

}

Listing.defaultProps = {
    data: [],
}

Listing.propTypes = {
    data: PropTypes.array,
}

export default Listing;