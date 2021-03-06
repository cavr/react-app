import { Map } from 'immutable';

import {
  CLEAR_ADMIN_INDEXES,
  SET_ADMIN_INDEXES,
  CLEAR_ADMIN_SUBINDEXES,
  SET_ADMIN_SUBINDEXES,
  CLEAR_ADMIN_METRICS,
  SET_ADMIN_METRICS,
  CLEAR_ADMIN_PARAMETERS,
  SET_ADMIN_PARAMETERS,
} from 'actions/mis/admin/common';

const initialState = Map({
  indexes: [],
  subindexes: [],
  metrics: [],
  parameters: [],
});

const actionsMap = {
  [CLEAR_ADMIN_INDEXES]: (state) => {
    return state.set('indexes', []);
  },
  [SET_ADMIN_INDEXES]: (state, action) => {
    return state.set('indexes', action.indexes);
  },
  [CLEAR_ADMIN_SUBINDEXES]: (state) => {
    return state.set('subindexes', []);
  },
  [SET_ADMIN_SUBINDEXES]: (state, action) => {
    return state.set('subindexes', action.subindexes);
  },
  [CLEAR_ADMIN_METRICS]: (state) => {
    return state.set('metrics', []);
  },
  [SET_ADMIN_METRICS]: (state, action) => {
    return state.set('metrics', action.metrics);
  },
  [CLEAR_ADMIN_PARAMETERS]: (state) => {
    return state.set('parameters', []);
  },
  [SET_ADMIN_PARAMETERS]: (state, action) => {
    return state.set('parameters', action.parameters);
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
