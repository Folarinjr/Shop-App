import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addShop } from '../../actions/shopActions';

const AddShopModal = ({ addShop}) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [area, setArea] = useState('');
    const [open, setOpen] = useState(new Date().getTime());
    const [close, setClose] = useState(new Date().getTime());

    const onSubmit = (e) => {
        //Form vallidation
        const letters = /^[A-Za-z]+$/;

        if(name === '' && !letters.test(name)){
            M.toast({ html: 'Name field should be alphabet'});
        } else if(open >= close){
            M.toast({ html: 'Shop must not close before opening'});  
        } else {
            const newShop = {
                name,
                category,
                area,
                open,
                close
            }

            addShop(newShop);

            //clear fields
            setName('');
            setCategory('');
            setArea('');
            setOpen('');
            setClose('');
        }
    }

  return (
    <div id='add-shop-modal' style={shopStyle} className='modal'>
        <div className="modal-content">
            <h4>Enter Shop Details</h4>
            <div className="row">
                <div className="input-field">
                    <input 
                        type="text" 
                        name='name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                    <label htmlFor="name" className='active'>
                        Shop Name
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select
                        name='category' 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}
                        className="browser-default"
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Chemist">Chemist</option>
                        <option value="Butcher">Butcher</option>
                        <option value="Baker">Baker</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <select
                        name='area' 
                        value={area} 
                        onChange={(e) => setArea(e.target.value)}
                        className="browser-default"
                    >
                        <option value="" disabled>Select Area</option>
                        <option value="Pune">Pune</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Thane">Thane</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="input-field">
                    <input 
                        type="date" 
                        name='open' 
                        value={open} 
                        onChange={(e) => setOpen(e.target.value)} 
                    />
                    <label htmlFor="open" className='active'>
                        Open Date
                    </label>
                </div>

                <div className="input-field">
                    <input 
                        type="date" 
                        name='close' 
                        value={close} 
                        onChange={(e) => setClose(e.target.value)} 
                    />
                    <label htmlFor="close" className='active'>
                        Close Date
                    </label>
                </div>
            </div>
        </div>

        <div className="modal-footer">
            <a 
                href="#!" 
                onClick={onSubmit} 
                className='modal-close waves-effect blue btn'
            >
                Enter
            </a>
        </div>
    </div>
  )
}

AddShopModal.propTypes = {
    addShop: PropTypes.func.isRequired
}

const shopStyle = {
    width: '75%',
    height: '75%'
};

export default connect(null, {addShop}) (AddShopModal)