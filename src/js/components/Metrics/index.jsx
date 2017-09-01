import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSelectorValue } from 'actions/mis/metrics';
import Section from 'components/Section';
import Button from 'components/Button';
import Selector from 'components/Selector';
import BusinessElement from './BusinessElement';

import './desktop.scss';

export class Metrics extends PureComponent {

  static propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    currentStep: PropTypes.number,
    setSelectorValue: PropTypes.func,
  };
  constructor(props) {
    super(props);

    this.state = {
      selectedBusinessElement: 0,
    };
  }
  render() {
    const { data, loading, currentStep, setSelectorValue } = this.props;
    const selectedBusinessElement = this.state.selectedBusinessElement;

    const selectors = data.selectors ? data.selectors : [];
    const businessElements = selectors.map((element, index) => { return { value: index, label: element.label }; });
    const currentBusinessElement = selectors[selectedBusinessElement];
    return (
      <Section currentStep={ currentStep } sectionNumber={ 4 } title='Business elements detail' loading={ loading } noPadding={ true }>
        <div className='metrics'>
          <Selector
            className='business-element__selector'
            title={ 'Select a business element' }
            values={ businessElements }
            currentValue={ selectedBusinessElement }
            inline={ true }
            onChange={ (option) => this.setState({ selectedBusinessElement: option.value }) }
          />
          <BusinessElement
            data={ currentBusinessElement }
            setSelectorValue={ setSelectorValue }
          />
          <hr className='metrics__separator' />
          <div className='metrics__benchmarking'>
            <h2 className='bluetab-subtitle--centered'>Actions</h2>
            <Button title={ 'Resume PDF' } onClick={ () => console.log(2) } light={ true } />
          </div>
        </div>
      </Section>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.metrics.get('data'),
  loading: state.metrics.get('loading'),
});

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectorValue: (value, selector) => dispatch(setSelectorValue(value, selector)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Metrics);
