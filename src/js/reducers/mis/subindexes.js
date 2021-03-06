import { Map } from 'immutable';

import {
  SET_SUBINDICES,
  BEGIN_SUBINDICES_LOAD,
  END_SUBINDICES_LOAD,
  SET_SUBINDEX_VALUE,
  CLEAR_SUBINDEX_VALUE,
} from '../../actions/mis/subindexes';

const initialState = Map({
  data: [],
  loading: true,
  selected: {},
});

const actionsMap = {
  [SET_SUBINDICES]: (state, action) => {
    return state.set('data', action.data);
  },
  [BEGIN_SUBINDICES_LOAD]: (state) => {
    return state.set('loading', true);
  },
  [END_SUBINDICES_LOAD]: (state) => {
    return state.set('loading', false);
  },
  [SET_SUBINDEX_VALUE]: (state, action) => {
    return state.set('selected', { value: action.value, label: action.label });
  },
  [CLEAR_SUBINDEX_VALUE]: (state) => {
    return state.set('selected', {});
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
