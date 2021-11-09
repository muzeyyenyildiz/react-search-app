import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import List from "../components/List";
import Logo from "../img/logo.svg";
import Form from "../components/Form";
import mockData from "../api/mockData.json";
import Order from "../components/OrderBy";
import { mapData, sortData, filterData } from "../util";

let dataResult = [];

const Detail = (props) => {
  const { id = "" } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 7;
  let activeSort = "";

  useEffect(() => {
    dataResult = mapData(mockData.data, mockData.cols);
  }, []);

  const onSubmit = (searchedText) => {
    const filtered = filterData(dataResult, searchedText);
    setFilteredData(sortData(activeSort, [...filtered]));
    props.history.replace({ pathname: `/search/${searchedText}` });
    setCurrentPage(1);
  };

  const getCurrentItems = ($filteredData) => {
    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;
    const currentItems = $filteredData.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  };

  useEffect(() => {
    onSubmit(id);
  }, []);

  const handleOrderChange = (activeOrder) => {
    activeSort = activeOrder;
    const result = sortData(activeOrder, [...filteredData]);
    setCurrentPage(1);
    setFilteredData(result);
  };

  return (
    <div className="detail-container">
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Form onSubmit={onSubmit} filteredData={filteredData} query={id} />
      </div>
      <div className="detail-list">
        {filteredData.length ? (
          <div className="detail-list-container">
            <Order
              onOrderChange={(activeOrder) => handleOrderChange(activeOrder)}
            />
            <List filteredData={getCurrentItems(filteredData)} query={id} />
            <div id="react-paginate">
              <ReactPaginate
                previousLabel="previous"
                nextLabel="next"
                breakLabel="..."
                breakClassName="break-me"
                forcePage={currentPage-1}
                pageCount={Math.ceil(filteredData.length / itemPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={(info) => setCurrentPage(info.selected + 1)}
                containerClassName="pagination"
                activeClassName="active"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Detail;
