import React from 'react';
import PropTypes from 'prop-types';
import {NonIdealState, Spinner, Button, Intent} from "@blueprintjs/core";

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

  renderRefreshButton = () =>
    <Button
      onClick={this._refresh}
      iconName="refresh"
      intent={Intent.SUCCESS}
    >
      Refresh
    </Button>;

  render() {
    if (this.state.error) {
      return (
        <NonIdealState
          visual="warning-sign"
          title="Unable to fetch data"
          action={this.renderRefreshButton()}
        />
      );
    }

    if (this.state.isLoading) {
      return <NonIdealState visual={<Spinner />} title="Loading..." />;
    }

    return (
      <div>
        {this.props.render(this.state.data)}
        <div>
          <Button onClick={this._refresh} iconName="refresh" intent={Intent.SUCCESS}>Refresh</Button>
        </div>
      </div>
    );
  }
}

export default AsyncLoader;
