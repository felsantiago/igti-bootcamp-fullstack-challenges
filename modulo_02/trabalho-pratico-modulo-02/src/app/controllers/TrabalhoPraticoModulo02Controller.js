import fs from 'fs';
import { promisify } from 'util';
import path from 'path';
import { forEach } from 'p-iteration';

import estados from '../../data/Estados.json';
import cidades from '../../data/Cidades.json';

const pathJson = path.resolve(__dirname, '..', '..', 'data', 'estados');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const countState = async (uf) => {
  const result = await readFileAsync(`${pathJson}/${uf}.json`);
  const data = JSON.parse(result);

  return data.length;
};

const getArrayCountUf = async () => {
  const cityArray = [];

  await forEach(estados, async (estado) => {
    const count = await countState(estado.Sigla);

    const resultCidades = {
      uf: estado.Sigla,
      count,
    };

    cityArray.push(resultCidades);
  });

  return cityArray;
};

class TrabalhoPraticoModulo02Controller {
  async createFileJson(req, res) {
    await estados.forEach(async (uf) => {
      const cidadesUf = cidades.filter((ufCidade) => ufCidade.Estado === uf.ID);
      await writeFileAsync(
        `${pathJson}/${uf.Sigla}.json`,
        JSON.stringify(cidadesUf)
      );
    });

    return res.json({ message: 'Files successfully created!' });
  }

  async countState(req, res) {
    const { uf } = req.query;

    const result = await countState(uf);

    return res.json(result);
  }

  async fiveStatesWithLargestCities(req, res) {
    const result = await getArrayCountUf();

    const resultSort = result.sort((a, b) => b.count - a.count);
    const resultTopFive = resultSort.slice(0, 5);
    const sumCount = resultTopFive
      .map((a) => a.count)
      .reduce((prev, next) => prev + next);

    const returnFinal = {
      topFive: resultTopFive,
      sum: sumCount,
    };

    return res.json(returnFinal);
  }

  async fiveStatesWithSmallestCities(req, res) {
    const result = await getArrayCountUf();

    const resultSort = result.sort((a, b) => a.count - b.count);
    const resultTopFive = resultSort
      .slice(0, 5)
      .sort((a, b) => b.count - a.count);
    const sumCount = resultTopFive
      .map((a) => a.count)
      .reduce((prev, next) => prev + next);

    const returnFinal = {
      topFive: resultTopFive,
      sum: sumCount,
    };

    return res.json(returnFinal);
  }

  async biggestCityArrayInEachState(req, res) {
    const resultArray = [];

    estados.forEach((estado) => {
      const result = cidades.filter((cidade) => cidade.Estado === estado.ID);
      const resultSort = result.sort(
        (a, b) => b.Nome.length - a.Nome.length || a.Nome.localeCompare(b.Nome)
      );
      resultArray.push(...resultSort);
    });

    return res.json(resultArray);
  }

  async smallestCityArrayInEachState(req, res) {
    const resultArray = [];

    estados.forEach((estado) => {
      const result = cidades.filter((cidade) => cidade.Estado === estado.ID);
      const resultSort = result.sort(
        (a, b) => a.Nome.length - b.Nome.length || a.Nome.localeCompare(b.Nome)
      );
      resultArray.push(...resultSort);
    });

    return res.json(resultArray);
  }

  async biggestCityInEachState(req, res) {
    const biggestCityInEachStateArray = [];
    const biggestCityNameAmongAllStatesArray = [];

    estados.forEach((estado) => {
      const result = cidades.filter((cidade) => cidade.Estado === estado.ID);
      const resultSort = result.sort(
        (a, b) => b.Nome.length - a.Nome.length || a.Nome.localeCompare(b.Nome)
      );

      const { Nome } = resultSort.find((obj) => obj.Estado === estado.ID);

      biggestCityInEachStateArray.push(`${Nome} - ${estado.Sigla}`);
      biggestCityNameAmongAllStatesArray.push({
        nome: Nome,
        estado: estado.Sigla,
      });
    });

    const biggestCityNameAmongAllStatesSorted = biggestCityNameAmongAllStatesArray.sort(
      (a, b) => b.nome.length - a.nome.length || a.nome.localeCompare(b.nome)
    );

    const biggestCityNameAmongAllStates = biggestCityNameAmongAllStatesSorted.map(
      (obj) => `${obj.nome} - ${obj.estado}`
    );

    const result = {
      biggestCityInEachState: biggestCityInEachStateArray,
      biggestCityNameAmongAllStates,
    };

    return res.json(result);
  }

  async smallestCityInEachState(req, res) {
    const smallestCityInEachStateArray = [];
    const smallestCityNameAmongAllStatesArray = [];

    estados.forEach((estado) => {
      const result = cidades.filter((cidade) => cidade.Estado === estado.ID);
      const resultSort = result.sort(
        (a, b) => a.Nome.length - b.Nome.length || a.Nome.localeCompare(b.Nome)
      );

      const { Nome } = resultSort.find((obj) => obj.Estado === estado.ID);

      smallestCityInEachStateArray.push(`${Nome} - ${estado.Sigla}`);
      smallestCityNameAmongAllStatesArray.push({
        nome: Nome,
        estado: estado.Sigla,
      });
    });

    const smallestCityNameAmongAllStatesSorted = smallestCityNameAmongAllStatesArray.sort(
      (a, b) => a.nome.length - b.nome.length || a.nome.localeCompare(b.nome)
    );

    const smallestCityNameAmongAllStates = smallestCityNameAmongAllStatesSorted.map(
      (obj) => `${obj.nome} - ${obj.estado}`
    );

    const result = {
      smallestCityInEachState: smallestCityInEachStateArray,
      smallestCityNameAmongAllStates,
    };

    return res.json(result);
  }
}

export default new TrabalhoPraticoModulo02Controller();
