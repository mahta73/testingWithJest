const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'disney.com',
    'dogpic.com'
];

it('is a silly test', () => {
    expect('hello').toBe('hello');
})

it('is searching google', () => {
    expect(googleSearch('IamTesting', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpic.com']);
})