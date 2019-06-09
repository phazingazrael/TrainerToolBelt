import React, { Component } from "react";
import "../App.css";
import "semantic-ui-css/semantic.min.css";
//import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";



class App extends Component {
  state = {
    response: "",
    post: "",
    responseToPost: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: this.state.post })
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };
  render() {
    return (
      <div className="App">
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              <Segment className="topBar">Header</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column className="navLeft" width={4}>
              <Segment>left</Segment>
            </Grid.Column>
            <Grid.Column className="contentMain" width={12}>
              <Segment>
                right
                <p>{this.state.response}</p>
                <form onSubmit={this.handleSubmit}>
                  <p>
                    <strong>Post to Server:</strong>
                  </p>
                  <input
                    type="text"
                    value={this.state.post}
                    onChange={e => this.setState({ post: e.target.value })}
                  />
                  <button type="submit">Submit</button>
                </form>
                <p>{this.state.responseToPost}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
