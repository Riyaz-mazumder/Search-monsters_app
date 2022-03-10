import { Component } from 'react';
import './search-fild-style.css';

const SearchField = ({ className, placeholder, onChangeHandeler }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandeler}
  />
);

export default SearchField;
