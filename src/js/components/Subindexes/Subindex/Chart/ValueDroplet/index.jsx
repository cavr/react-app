import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ValueDroplet extends PureComponent {

  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    position: PropTypes.number,
  };

  render() {
    const { className, value, position } = this.props;
    return (
      <svg className={ className } xmlns='http://www.w3.org/2000/svg' viewBox='0 0 37 46' style={ { left: `${ position }%` } }>
        <g fill='none' fillRule='evenodd'>
          <path d='M18.5.14C28.75.14 37 8.54 37 18.94c0 5.25-2.84 10.8-10.4 18.35l-8.1 8.23-8.25-8.25C2.85 29.6 0 24.04 0 18.92 0 8.52 8.25.12 18.5.12z' />
          <text fill='#FFF' fontFamily='Montserrat-Light, Montserrat' fontSize='1.4rem' fontWeight='300'>
            <tspan x='9.86' y='25.64'>{ Math.round(value) }</tspan>
          </text>
        </g>
      </svg>
    );
  }
}
