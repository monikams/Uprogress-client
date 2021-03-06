import css from './RootApp.styl';

import CN from 'classnames';
import React, { Component, PropTypes } from 'react';

import RootHeader from 'root/header/RootHeader';
import Navigation from 'navigation/Navigation';

export default class RootApp extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  static defaultProps = {
    children: {}
  }

  render() {
    return (
      <div className={CN(css.rootApp)}>
        <RootHeader />
        <div className="main-content">
          <Navigation {...this.props} />
          <div className={CN('content', 'Card')}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
        </div>
      </div>
    );
  }
}
