import {useEffect, useState} from "react";
import "./list.css";
import ListItem from "../ListItem";
import {Link} from "react-router-dom";

const List = (props) => {
  const {
    filteredData = [],
    query = "",
    showMore = false,
    dataLength = 0,
    isBorder = false,
  } = props;

  const [listActive, setListActive] = useState(false);

  useEffect(() => {
    setListActive(filteredData.length > 0);
  }, [filteredData]);

  return (
    <div className="list">
      <div
        className={`${!listActive ? "list-none" : "list-container"} ${
          isBorder ? "list-border" : ""
        }`}
      >
        {filteredData.map((row, rowIndex) => {
          return <ListItem key={rowIndex} user={row}/>;
        })}
        {showMore && dataLength > 3 ? (
          <div className="show">
            <p className="explain">{dataLength} data found.</p>
            <button>
              <Link to={`/search/${query}`}>Show more..</Link>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default List;
