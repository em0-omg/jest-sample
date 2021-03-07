const fetch = require('node-fetch');
const swapi = require('./script2');

// doneを引数に渡すことで非同期処理を待たせることができる
it('calls swapi to get people', (done) => {
  // expectの数を指定して非同期が動作することを確認する
  expect.assertions(1);
  swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
    // 上の処理が終わったらdoneとする
    done();
  });
});

// よりシンプルにreturnとする方法もある
it('calls swapi to get people', () => {
  // expectの数を指定
  expect.assertions(1);
  return swapi.getPeople(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});

it('calls swapi to get people with a promise', () => {
  expect.assertions(2);
  return swapi.getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
