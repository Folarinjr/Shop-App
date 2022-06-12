import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import ShopItem from './ShopItem';
import PreLoader from '../layout/PreLoader';
import PropTypes from 'prop-types'
import { getShops } from '../../actions/shopActions';

const Shops = ({shop: {shops, loading},getShops}) => {
    useEffect(()=>{
        getShops();
        //eslint-disable-next-line
    },[])

    if(loading || shops === null){
       return <PreLoader/>
    }
  return (
    <ul className='collection with-header'>
        <li className="collection-header">
            <h4 className="center">SHOPS</h4>
        </li>
        {!loading && shops.length === 0 ? ( 
            <p className="center">No Shops to Show</p>
        ): (
            shops.map((shop)=> <ShopItem shop={shop} key={shop.id} />) 
        )}
    </ul>
  )
}


Shops.propTypes = {
    shop: PropTypes.object.isRequired,
    getShops: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    shop: state.shop
});
export default connect(mapStateToProps, {getShops})(Shops);