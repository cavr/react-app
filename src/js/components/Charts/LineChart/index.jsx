import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ValueDroplet from 'components/Charts/Details/ValueDroplet';
import Labels from 'components/Charts/Details/Labels';
import Waypoint from 'react-waypoint';

import anime from 'animejs';

import './desktop.scss';

export default class LineChart extends PureComponent {

  static propTypes = {
    data: PropTypes.object,
  };
  constructor() {
    super();
    this.state = {
      inScreen: false,
    };
    this.animate = this.animate.bind(this);
    this.handleWaypoint = this.handleWaypoint.bind(this);
  }

  handleWaypoint() {
    const { inScreen } = this.state;
    if (!inScreen) this.animate();
    this.setState({ inScreen: true });
  }

  animate() {
    const { data } = this.props;
    const maxValue = 100;
    /* Linear map
    To map
    [A, B] --> [a, b]
    (val - A)*(b-a)/(B-A) + a
    In this case
    (val - 0) * (100 - 0) / (maxValue - 0) + 0
    */
    const value = (data.value * 100) / maxValue;
    anime({
      duration: '350ms',
      targets: this.line,
      width: `${ value }%`,
    });
  }

  render() {
    const { data } = this.props;
    const { inScreen } = this.state;
    const maxValue = 100;
    /* Linear map
    To map
    [A, B] --> [a, b]
    (val - A)*(b-a)/(B-A) + a
    In this case
    (val - 0) * (100 - 0) / (maxValue - 0) + 0
    */
    const value = (data.value * 100) / maxValue;
    return (
      <div className='subindex-line-chart'>
        <Waypoint onEnter={ this.handleWaypoint } />
        <div className='subindex-line-chart__line'>
          <div ref={ (line) => this.line = line } className='subindex-line-chart__filled' />
        </div>
        { inScreen && <ValueDroplet className='subindex-line-chart__droplet' value={ data.value } position={ value } /> }
        <Labels sections={ data.sections } />
      </div>
    );
  }
}