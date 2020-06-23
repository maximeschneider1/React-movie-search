import React from "react";
import {
    Link,
  } from 'react-router-dom'

class Movie extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      id: "", 
      resp: [],
        img: "", 
    };
  }

  componentDidMount() {
    var title = window.location.pathname;
    title = title.replace("/Movie/", "");
    title = this.replaceAll(title, "%20", " ");
    this.setState({ title: title });

    var queryTitle = title.replace(" ", "-");
    fetch(`http://api.tvmaze.com/singlesearch/shows?q=` + queryTitle)
    .then((response) => {
      return response.json();
    })
    .then(
      (response) => this.setState({ 
          resp: response, 
          id: response.id, 
          img: response.image.medium }),
    )
    .catch(console.log);
  };

  replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

  render() {
    return (
      <div>
       <Link to={`/`}>Retour</Link>
        <h1>{this.state.title}</h1>
        <img src={this.state.img} alt="move-cover"></img>
      </div>
    );
  }
}

export default Movie;
