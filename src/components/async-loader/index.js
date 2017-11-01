import React from 'react';
import PropTypes from 'prop-types';
import {NonIdealState, Spinner} from "@blueprintjs/core";

class AsyncLoader extends React.PureComponent {
  static propTypes = {
    load: PropTypes.func.isRequired,
  };

  state = {
    isLoading: true,
    data: null,
    error: null,
  };

  componentDidMount() {
    this._refresh();
  }

  _refresh = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await this.props.load();

      this.setState({
        data: response,
        isLoading: false,
      })
    } catch (err) {
      this.setState({
        error: 'Unable to do shit',
        isLoading: false,
      });
    }
  };

  render() {
    if (this.state.error) {
      return <NonIdealState visual="warning-sign" title="Unable to fetch data" />;
    }

    if (this.state.isLoading) {
      return <NonIdealState visual={<Spinner />} title="Loading..." />;
    }

    return this.props.render(this.state.data);
  }
}

export default AsyncLoader;
