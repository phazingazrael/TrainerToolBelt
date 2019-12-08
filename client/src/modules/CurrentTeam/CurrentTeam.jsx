'use strict';

import React, { Component } from 'react';
import Styled from "./styled";

class CurrentTeam extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('CurrentTeam mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('CurrentTeam getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('CurrentTeam getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('CurrentTeam did update');
  }

  componentWillUnmount = () => {
    console.log('CurrentTeam will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
       <React.Fragment>
         Test content
       </React.Fragment>
    );
  }
}

export default CurrentTeam;