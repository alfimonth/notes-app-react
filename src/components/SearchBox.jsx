import React from 'react';

function SearchBox({ onSearch }) {
  return (<input onChange={(keyword) => onSearch(keyword)} className='search-box' placeholder='Cari catatan ...' />)
}
export default SearchBox;