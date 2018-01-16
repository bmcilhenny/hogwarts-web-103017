import React from 'react';

const Filter = (props) => {
  return (
    <div>
      <select name="text" onChange={props.handleFilter}>
        <option value="All">All</option>
        <option value="Name">Name</option>
        <option value="Weight">Weight</option>
      </select>
      <label>Greased</label>
      <input type="checkbox" value={props.greased} onChange={props.handleGreasedFilter}/>
    </div>
  )
}

export default Filter;
