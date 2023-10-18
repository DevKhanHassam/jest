const sum = require('./index.js');

test('It should return 4',()=>{
    expect(sum(2,2)).toBe(4); // there is also expect().toEqual() 

    // there are so many matchers 😥😥  checkout at https://jestjs.io/docs/using-matchers 

})


//start the test write 🎇npm test🎇