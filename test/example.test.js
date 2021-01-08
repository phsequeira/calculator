// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { addition, subtraction, multiply, division, convertDegree } from './mathUtils';


const test = QUnit.test;

//test addition function
test('it should return 10 when provided 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -10 when provided -20 and 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addition(-20, 10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test subtraction function
test('it should return 0 when provided 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtraction(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -5 when provided 0 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = -5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtraction(0, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test multiply function
test('it should return 10 when provided 2 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(2, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 0 when provided 6 and 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(6, 0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test division function
test('it should return 1 when provided 5 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 2 when provided 10 and 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(10, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

//test convertDegree function
test('it should return 68 when provided 20', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 68;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = convertDegree(20);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 50 when provided 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 50;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = convertDegree(10);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});