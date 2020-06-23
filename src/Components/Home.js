import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      resp: [],
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  printImg = (e) => {
    console.log(e.show.image);
    if (e.show.image == null) {
      console.log("No image for movie :", e.show.name);
      return "https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101027/112815900-stock-vector-no-image-available-icon-flat-vector.jpg?ver=6";
    } else {
      return e.show.image.medium;
    }
  };
  searchAPI = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=` + this.state.value)
      .then((response) => {
        return response.json();
      })
      .then((response) => this.setState({ resp: response }))
      .catch(console.log);
  };

  componentDidMount() {
    fetch(`https://api.tvmaze.com/search/shows?q=test`)
      .then((response) => {
        return response.json();
      })
      .then((response) => this.setState({ resp: response }))
      .catch(console.log);
  }

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <btn onClick={this.searchAPI}>Search</btn>

        {this.state.resp.map((resp) => (
          <div>
            <img src={this.printImg(resp)} alt="film-img"></img>
            <Link to={`/Movie/${resp.show.name}`}>{resp.show.name}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
