import React from "react";
import ArgonBox from "components/ArgonBox";
import PropTypes from "prop-types";

const LoadingSpinner = ({ loading }) => {
  return (
    loading && (
      <ArgonBox
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 9999,
        }}
      >
        <l-hourglass size="130" bg-opacity="0.1" speed="2" color="#4667c8"></l-hourglass>
      </ArgonBox>
    )
  );
};

LoadingSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
};
export default LoadingSpinner;
