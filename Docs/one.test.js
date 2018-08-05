const info = require('./one');

test('adds 1 + 2 to equal 3', () => {
    expect(info.sum(1, 2)).toBe(3);
})

// NOTE_: toBe uses Object.is

// NOTE_: if you want to check the value of an object, use toEqual

test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
})

// opposite of a matcher
test('adding positive numbers is not zero', () => {
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j < 10; j++) {
            expect(i + j).not.toBe(0);
        }
    }
})

// Truthiness
test('truthiness', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    let name = 'mahta';
    expect(name).toBeDefined();
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
})

// Numbers
test('numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(10);
    expect(value).toBeLessThanOrEqual(5.5);

    // NOTE_: toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);

    // NOTE_: for floating point equality, use toBeCloseTo
    const floatingValue = 0.3 + 0.5;

    expect(floatingValue).toBeCloseTo(0.8);
})

// Strings and Reqular expressions
test('You can check strings against regular expressions with toMatch', () => {
    expect('mahta').toMatch(/mah/);
})

// Arrays
test('You can check if an array contains a particular item using toContain', () => {
    expect(info.arr).toContain('mehrad');
})

// Exceptions
test('', () => {
    expect(info.compileAndroidCode).toThrow();
})

// You can use expect.extend to add your own matcher

expect.extend({
    toBeDivisibleBy(received, argument) {
        const pass = received % argument == 0;

        if (pass) {
            return {
                message: () => 
                    `expected ${received} not to be divisible by ${argument}`,
                pass: true
            };
        } else {
            return {
                message: () => 
                    `expected ${received} to be divisible by ${argument}`,
                pass: false
            }
        }
    }
})

test('toBeDivisibleBy', () =>{
    expect(100).toBeDivisibleBy(2);
    expect({apples: 6, bananas: 3}).toEqual({
        apples: expect.toBeDivisibleBy(2),
        bananas: expect.not.toBeDivisibleBy(2),
      });    
})

expect.extend({
    toBeEven(number) {
        const pass = number % 2 === 0;
        if (pass) {
            return {
                message: () => 
                    `expected ${number} not to be even`,
                pass: true
            }
        } else {
            return {
                message: () => 
                    `expected ${number} to be even`,
                pass: false
            }
        }
    }
})

test('toBeEven', () => {
    expect(200).toBeEven();
    expect(201).not.toBeEven();
})

// mock functions

test ('mock callback function', () => {
    const mockCallBack = jest.fn();
    info.foreach([0, 1], mockCallBack);

    /*
        All mock functions have this special .mock property, 
        which is where data about how the function has been 
        called and what the function returned is kept.

        mockCallBack.mock
    */

    // the mock function is called twice
    expect(mockCallBack.mock.calls.length).toBe(2);

    // the first argument of the first call to the function was 0
    expect(mockCallBack.mock.calls[0][0]).toBe(0);

    // the fist argument of the second call to the function was 1
    expect(mockCallBack.mock.calls[1][0]).toBe(1);

})
