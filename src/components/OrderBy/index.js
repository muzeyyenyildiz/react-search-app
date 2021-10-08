import {useState} from "react";
import {RiArrowUpDownLine} from "react-icons/ri";
import "./order.css";

const orders = [
  {
    text: "Name ascending",
  },
  {
    text: "Name descending",
  },
  {
    text: "Year ascending",
  },
  {
    text: "Year descending",
  },
];

const Order = (props) => {
  const [activeOrder, setActiveOrder] = useState("");

  const onOrderChange = (text) => {
    setActiveOrder(text);
    props.onOrderChange(text);
  };

  return (
    <div className="order-container">
      <span>
        <RiArrowUpDownLine size={24}/>
      </span>
      <div className="order">Order By</div>
      <ul className="order-list">
        {orders.map((order, key) => (
          <li
            className={activeOrder === order.text ? "active" : ""}
            onClick={() => onOrderChange(order.text)}
            key={key}
          >
            {order.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Order;
