import endpoint from 'services/api/config';

import devData from 'data/metrics.json';
import devDataEvolution from 'data/businessElementEvolution.json';
import { buildJsonName } from 'services/jsonNameBuilder';

export default class MetricsServices {

  static getMetrics(request) {
    return fetch(`/data/${ buildJsonName(request) }`)
      .then((response) => {
        if (response.status !== 200) {
          return devData;
        }
        return response.json();
      });
  }

  static getBusinessElementEvolution(request) {
    return fetch(`/data/${ buildJsonName(request) }`)
      .then((response) => {
        if (response.status !== 200) {
          return devDataEvolution;
        }
        return response.json();
      });
  }
}
