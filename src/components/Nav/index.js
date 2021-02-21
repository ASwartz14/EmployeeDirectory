import React from "react";

const styles = {
  h1: {
    marginBottom: "0px",
    textAlign: "center",
  },
};

function Nav(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <h1 className="display-4" style={styles.h1}>
        Employee Directory
      </h1>
    </div>
  );
}

export default Nav;
