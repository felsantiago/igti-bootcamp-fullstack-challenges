import { Router } from 'express';

import TrabalhoPraticoModulo02Controller from './app/controllers/TrabalhoPraticoModulo02Controller';

const routes = new Router();

routes.get('/count-state', TrabalhoPraticoModulo02Controller.countState);
routes.get(
  '/five-states-with-largest-cities',
  TrabalhoPraticoModulo02Controller.fiveStatesWithLargestCities
);
routes.get(
  '/five-states-with-smallest-cities',
  TrabalhoPraticoModulo02Controller.fiveStatesWithSmallestCities
);
routes.get(
  '/create-file-uf-json',
  TrabalhoPraticoModulo02Controller.createFileJson
);
routes.get(
  '/biggest-city-array-in-each-state',
  TrabalhoPraticoModulo02Controller.biggestCityArrayInEachState
);
routes.get(
  '/smallest-city-array-in-each-state',
  TrabalhoPraticoModulo02Controller.smallestCityArrayInEachState
);
routes.get(
  '/biggest-city-in-each-state',
  TrabalhoPraticoModulo02Controller.biggestCityInEachState
);
routes.get(
  '/smallest-city-in-each-state',
  TrabalhoPraticoModulo02Controller.smallestCityInEachState
);

export default routes;
