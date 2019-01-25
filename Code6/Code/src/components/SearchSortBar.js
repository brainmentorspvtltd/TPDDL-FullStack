import React from 'react';
export const SearchSortBar=(props)=>{
    return(
        <div className='row'>
            <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor="">Search</label>
            <input onChange={props.search} type="text" className='form-control' placeholder='Type to Search By Price'/>
        </div>
        </div>
        <div className='col-sm-6'>
        <div className='form-group'>
            <label htmlFor="">Sort</label>
            <select onChange={props.sort} className='form-control'>
                <option value="-1">Select to Sort</option>
                <option value="price">By Price</option>
                <option value="name">By Name</option>
            </select>
        </div>
        </div>
        </div>
    )
}