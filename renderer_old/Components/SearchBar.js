import React from "react";

const SearchBar = () => {
  return (
    <div>
      <p className="control is-expanded">
        <input
          id="searchbox"
          type="text"
          ref={input => (this.emoji_name = input)}
          placeholder="Search Winimoji"
          onChange={debounce(this.searchEmoji.bind(this), 150, {
            leading: false,
            trailing: true
          })}
          className="input"
        />
      </p>
    </div>
  );
};

export default SearchBar;
