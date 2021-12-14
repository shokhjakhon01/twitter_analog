import "./SearchPanel.css";
import React from "react";
export default class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }
  onUpdateSearch(e){
    const term  = e.target.value
    this.setState({term})
    this.props.onUpdateSearch(term)
  }
  render() {
    return (
      <input
        type="text"
        className="search-input form-control"
        placeholder="Search by Posts"
        onChange={this.onUpdateSearch}
      ></input>
    );
  }
}
