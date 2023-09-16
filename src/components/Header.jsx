import React from 'react';
import SearchBox from "./SearchBox";

function Header({ onSearch }) {
  return (
    <div className="header">
      <h1>Catatanku</h1>
      <SearchBox onSearch={onSearch} />
    </div>
  )
}
export default Header;