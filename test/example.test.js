// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem should return a div', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div>7 wines</div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ qty: 7, name: 'wines', purchased: false });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderItem should add class if bought', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="complete">77 peppers</div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItem({ qty: 77, name: 'peppers', purchased: true });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
