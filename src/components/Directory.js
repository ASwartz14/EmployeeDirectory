import React, { Component } from "react";
import Nav from "./Nav/index";
import Search from "./Search/index";
import Table from "./Table/index";
import Container from "./Container/index";
import API from "../utils/API";

class Directory extends Component {
  state = {
    search: "",
    result: [],
    sortedList: [],
    sort: "",
  };

  componentDidMount() {
    API.search()
      .then((res) =>
        this.setState({
          result: res.data.results,
          soretedList: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }
  handleInputChange = (event) => {
    event.preventDefault();
    const employee = this.state.result;
    const value = event.target.value;
    const sortedList = employee.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1
    );
    this.setState({
      sortedList,
    });
  };

  sortEmp = () => {
    const filteremp = this.state.sortedList;
    if (this.state.order === "asc") {
      const sortedemp = filteremp.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      console.log(sortedemp);

      this.setState({
        sortedList: sortedemp,
        order: "desc",
      });
    } else {
      const sortedemp = filteremp.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      console.log(sortedemp);

      this.setState({
        sortedList: sortedemp,
        order: "asc",
      });
    }
  };

  render() {
    return (
      <Container>
        <Nav />
        <Search
          employee={this.state.employee}
          handleInputChange={this.handleInputChange}
        />
        <Table results={this.state.sortedList} sortEmp={this.sortEmp} />
      </Container>
    );
  }
}

export default Directory;
