import React, { useState } from 'react'

function Search({value}) {
    

    return (
        <>
            <div className='form-group'>
            <label>Search:</label>
            <input type='text' value={value.search} onChange={(e) => { value.setSearch(e.target.value) }} />
            </div>
            
        </>
  )
}

export default Search