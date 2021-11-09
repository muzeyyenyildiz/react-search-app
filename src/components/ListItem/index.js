import React from "react";
import "./listItem.css";

const ListItem = (props) => {
  const {user} = props;
  

  return (
    <div className="list-item">
      <div className="place_mail">
        <div className="country-city">
          {user.Country} - {user.City}
        </div>
        <div className="email">{user.Email}</div>
      </div>
      <div className="name_company">
        <div className="name">
          {user["Name Surname"]} -{" "}
          {user.Date.split("/").reverse().join("-").split("-", 1)}
        </div>
        <div className="company">{user.Company}</div>
      </div>
    </div>
  );
};

export default ListItem;
