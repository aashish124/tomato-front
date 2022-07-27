import React from 'react';

const EmptyList = ({text}) => {
    return (
      <div className="mt-5 d-flex justify-content-center text-center">
        <div>
          <img
            src="assets/no_items.svg"
            alt="No Items"
            className="img-fluid col-md-10"
          ></img>
          <h5>{text}</h5>
        </div>
      </div>
    );
}

export default EmptyList;