import React from "react";
import TablePagination from "./Pagination/Pagination";

const OrderHistory = (props) => {
  const data = props.tableData.data?.data;

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Order Number</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Order Created</th>
            <th>Sell Status</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((order, index) => {
              return (
                <tr key={index}>
                  <td>{order.id}</td>
                  <td>{order.order_number}</td>
                  <td>{order.itemname}</td>
                  <td>{order.sellcount}</td>
                  <td>{order.created_at}</td>
                  <td>{order.sell_type}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </React.Fragment>
  );
};
export default OrderHistory;
