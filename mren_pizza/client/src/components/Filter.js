import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterPizzas } from '../actions/pizzaActions';
export default function Filter() {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState('');
  const [category, setcategory] = useState('all');
  return (
    <div className="container">
      <div className="row justify-content-center shadow-lg p-3 mb-5 bg-white rounded w-100">
        <div className="col-md-3 w-33">
          <input
            type="text"
            value={searchkey}
            className="form-control w-100"
            placeholder="search pizza"
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
          />
        </div>
        <div className="col-md-3 w-33">
          <select
            className="form-control w-100 mt-2"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non Veg</option>
          </select>
        </div>
        <div className="col-md-3 w-33 mt-2">
          <button
            className="btn w-100"
            onClick={() => {
              dispatch(filterPizzas(searchkey, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
