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
        // console.log(data.results);
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

it('You can also use the .resolves matcher in your expect statement.', () => {
    expect.assertions(1);
    
    //  Jest will wait for the promise to resolve. 
    return expect(swapi.getPeoplePromise(fetch)).resolves.toMatchObject({
        count: 87,
    });
})

// async/ await

it ('you can also use async/ await', async () => {
    expect.assertions(1);

    const data = await swapi.getPeoplePromise(fetch);

    expect(data.count).toBe(87);
})

/*
it('getPeople returns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue();
})
*/