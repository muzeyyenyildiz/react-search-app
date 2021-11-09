import {useState} from "react";
import "./form.css";

const Form = (props) => {
  const {onSubmit, query = ''} = props;
  const [searchedText, setSearchedText] = useState(query);
  const [isSubmitted, setSubmitted] = useState(false)

  const textInput = (event) => {
    setSearchedText(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setSubmitted(true)

    if (!searchedText.trim().length) {
      alert("Cannot be blank!");
      return false;
    }

    onSubmit(searchedText.trim());
  };

  return (
    <form className="submit-container" onSubmit={submitSearch}>
      <div className="input-holder">
        <input
          className={`search-input ${isSubmitted && !searchedText.trim().length ? 'error' : ''}`}
          placeholder="Search"
          value={searchedText}
          onChange={textInput}
        />
      </div>
      <button className="search-btn">Search</button>
    </form>
  );
};

export default Form;
