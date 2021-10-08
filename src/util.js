import _ from "lodash";

export const mapData = ($rows, $cols) => {
  return $rows.map((row) => {
    const data = {};
    $cols.forEach((col, colIndex) => {
      data[col] = row[colIndex];
    });
    return data;
  });
};

export const sortData = (text, $data) => {
  if (text === "Name ascending") {
    return _.sortBy($data, ["Name Surname"]);
  } else if (text === "Name descending") {
    return _.sortBy($data, ["Name Surname"]).reverse();
  } else if (text === "Year ascending") {
    return _.sortBy($data, ["Date"]);
  } else if (text === "Year descending") {
    return _.sortBy($data, ["Date"]).reverse();
  }
  return $data;
};

export const filterData = ($data, $query) => {
  return $data.filter((item) => {
    return Object.values(item)
      .toString()
      .toLowerCase()
      .includes($query.toLowerCase());
  })
};