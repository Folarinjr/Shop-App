import React, { useRef } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchShops } from '../../actions/shopActions'

const SearchBar = ({searchShops}) => {
  const text = useRef('');

  const onChange = (e) => {
    searchShops(text.current.value)
  }
  return (
    <nav style={{ marginBottom: '30px'}} className='blue'>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input 
            id="search" 
            type="search" 
            placeholder='Search Shops..'
            ref={text}
            onChange={onChange}
          />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

SearchBar.propTypes={
  searchShops: PropTypes.func.isRequired
}
export default connect(null, {searchShops}) (SearchBar)