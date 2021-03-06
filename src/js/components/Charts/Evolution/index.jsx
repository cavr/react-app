import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EvolutionLineChart from './EvolutionLineChart';

import './desktop.scss';
import './mobile.scss';

export default class Evolution extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    variation: PropTypes.number,
    points: PropTypes.array,
    target: PropTypes.number,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
  };

  render() {
    const { points, label, variation, target, minValue, maxValue } = this.props;
    let variationClass = 'green';
    if (variation === 0) variationClass = 'yellow';
    else if (variation < 0) variationClass = 'red';
    const lastMonth = points[points.length - 1];
    return (
      <div className='evolution'>
        <div className='inner-wrapper'>
          <div className='evolution__label'>{ label } evolution</div>
          <div className='evolution__variation'>
            <div className={ `evolution__variation-number evolution__variation-number--${ variationClass }` }>{ Math.abs(variation) } %</div>
            <div className='evolution__variation-text'>MoM Variation</div>
          </div>
          <div className='evolution__variation evolution__variation--month'>
            <div className='evolution__variation-number'>{ Math.abs(lastMonth.value).toFixed(2).replace(/\.00$/, '') } pt</div>
            <div className='evolution__variation-text'>{ lastMonth.date.replace('-', ' ') }</div>
          </div>
          <EvolutionLineChart points={ points } maxValue={ maxValue } minValue={ minValue } target={ target } />
        </div>
      </div>
    );
  }
}
