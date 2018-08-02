const fetch = require('node-fetch');
const swapi = require('./script2');

it ('calls swapi to get people', () => {
    expect.assertions(1);
    // returing a promise
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})

/*
    ANOTHER WAY: 
    it ('calls swapi to get people', (done) => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

*/
it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        console.log(data.results);
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})