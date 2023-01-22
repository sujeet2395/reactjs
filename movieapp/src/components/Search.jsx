import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext';

const Search=()=>{
    const {searchParam, handleOnChange, handleSubmit}=useContext(GlobalContext);
    return (
        <div>
            <input name="search" value={searchParam} onChange={handleOnChange} placeholder="Enter movie keyword here" type="text" />
            <button disabled={searchParam.trim().length<=2} onClick={handleSubmit}>Submit Search</button>
        </div>
    )
}

export default Search;