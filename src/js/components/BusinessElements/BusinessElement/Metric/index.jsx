import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import MetricEvolution from './MetricEvolution';

import './desktop.scss';

export default class Metric extends PureComponent {

  static propTypes = {
    data: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {
      showEvolution: false,
    };
  }

  render() {
    const { data } = this.props;
    const state = data.state;
    const showEvolution = this.state.showEvolution;
    return (
      <li className='business-element-metric'>
        <div className='business-element-metric__content'>
          <Button title={ data.label } selected={ showEvolution } onClick={ () => this.setState({ showEvolution: !showEvolution }) } />
          <ul className='business-element-metric__semaphores'>
            <li className={ `business-element-metric__semaphore business-element-metric__semaphore--red ${ state === 0 ? 'business-element-metric__semaphore--active' : '' }` } />
            <li className={ `business-element-metric__semaphore business-element-metric__semaphore--yellow ${ state === 1 ? 'business-element-metric__semaphore--active' : '' }` } />
            <li className={ `business-element-metric__semaphore business-element-metric__semaphore--green ${ state === 2 ? 'business-element-metric__semaphore--active' : '' }` } />
          </ul>
          <div className='business-element-metric__evolution'>
            Evolution
          </div>
        </div>
        {
          showEvolution && <MetricEvolution />
        }
      </li>
    );
  }
}