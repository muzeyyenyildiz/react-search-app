import {useState, useEffect} from "react";
import Header from "../components/Header";
import Form from "../components/Form";
import List from "../components/List";
import mockData from "../api/mockData.json";
import {filterData, mapData} from "../util";

let dataResult = []
const Home = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchedText, setSearchedText] = useState("");
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    dataResult = mapData(mockData.data, mockData.cols);
  }, [])

  const onSubmit = ($query) => {
    const filtered = filterData(dataResult, $query)
    setDataLength(filtered.length);
    setSearchedText($query);
    setFilteredData(getTopTree(filtered));
  };

  const getTopTree = (data) => {
    if (data.length < 3) {
      return data;
    }
    const [first, second, third] = data;
    return [first, second, third];
  };

  return (
    <div className="App">
      <Header/>
      <Form onSubmit={onSubmit}/>
      <List
        showMore
        isBorder
        filteredData={filteredData}
        query={searchedText}
        dataLength={dataLength}
      />
    </div>
  );
};

export default Home;
