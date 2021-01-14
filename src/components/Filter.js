import React from 'react'

export default function Filter ({value, onChangeFilter}){
    return (
        <div>
           <input type="text" 
           value={value} 
           placeholder='Search...'
           onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
    )
}