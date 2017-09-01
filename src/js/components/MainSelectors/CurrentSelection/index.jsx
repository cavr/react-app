import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

import './desktop.scss';

export default class CurrentSelection extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    selected: PropTypes.object,
    setStep: PropTypes.func,
  };

  render() {
    const { selected, setStep } = this.props;
    const selectors = selected && selected.toArray().map((value, index) => {
      return (
        <div key={ `selectedValue-${ index }` } className='selection__option'>{ value.label }</div>
      );
    });
    return (
      <div className='selection'>
        <div className='selection__wrapper'>
          { selectors }
          <button className='selection__option selection__button' onClick={ () => setStep(1) }>...</button>
        </div>
      </div>
    );
  }
}

