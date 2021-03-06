import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

export default class ChartPolygon extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    points: PropTypes.array,
  };
  constructor() {
    super();
    this.animate = this.animate.bind(this);
  }
  componentDidMount() {
    this.chart.setAttribute('points', '50,50 50,50 50,50 50,50');
    this.animate(this.props.delay);
  }
  componentDidUpdate() {
    this.animate();
  }
  animate(delayed) {
    const { points } = this.props;
    const pointsString = `50, ${ points[0] } ${ points[1] },50 50,${ points[2] } ${ points[3] },50`;
    const delay = delayed ? delayed : 0;
    anime({
      targets: this.chart,
      points: pointsString,
      delay,
    });
    anime({
      targets: this.dot1,
      cx: 50,
      cy: points[0],
      delay,
    });
    anime({
      targets: this.dot2,
      cy: 50,
      cx: points[1],
      delay,
    });
    anime({
      targets: this.dot3,
      cx: 50,
      cy: points[2],
      delay,
    });
    anime({
      targets: this.dot4,
      cy: 50,
      cx: points[3],
      delay,
    });
  }
  render() {
    const { name } = this.props;
    return (
      <g className={ name }>
        <polygon ref={ (chart) => this.chart = chart } points={ '50,50 50,50 50,50 50,50' } />
        <circle ref={ (dot1) => this.dot1 = dot1 } cx='50' cy='50' r='0.85' />
        <circle ref={ (dot2) => this.dot2 = dot2 } cx='50' cy='50' r='0.85' />
        <circle ref={ (dot3) => this.dot3 = dot3 } cx='50' cy='50' r='0.85' />
        <circle ref={ (dot4) => this.dot4 = dot4 } cx='50' cy='50' r='0.85' />
      </g>
    );
  }
}
