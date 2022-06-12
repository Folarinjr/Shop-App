import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteShop, setCurrent } from '../../actions/shopActions'

const ShopItem = ({shop, deleteShop, setCurrent}) => {
    const onDelete = () => {
        deleteShop(shop.id);
    }
  return (
    <li className='collection-item'>
        <div>
            <a 
                href="#edit-shop-modal" 
                className='modal-trigger'
                onClick={()=>setCurrent(shop)}
            >
                {shop.name}
            </a>
            <br />
            <span className="grey-text">
                Category {' '} <span className="black-text">{shop.category}</span>
                {' '},
                Open on {shop.open}
                {' '}
                Close by {shop.close}
                {' '},
                Area {' '} <span className="black-text">{shop.area}</span>
            </span>
            <div onClick={onDelete} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </div>
        </div>
    </li>
  )
}

ShopItem.propTypes = {
    shop: PropTypes.object.isRequired,
    deleteShop: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired
}

export default connect(null, {deleteShop, setCurrent})(ShopItem)