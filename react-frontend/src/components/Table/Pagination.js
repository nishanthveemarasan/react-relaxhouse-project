import React, { Fragment } from "react";
const Pagination = () => {
  return (
    <Fragment>
      <nav className="d-flex justify-content-end">
        <ul class="pagination">
          <li class="page-item disabled">
            <span class="page-link">Previous</span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <span class="page-link">
              2<span class="sr-only">(current)</span>
            </span>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};
export default Pagination;
