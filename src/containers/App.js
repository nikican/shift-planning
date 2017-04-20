import React, { Component, PropTypes } from 'react';
import Header from '../components/common/Header';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          isLoading={this.props.isLoading}
        />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

App.defaultProps = {
  isLoading: false
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});


export default connect(mapStateToProps)(App);
