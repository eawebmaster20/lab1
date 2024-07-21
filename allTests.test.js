const all = require('./lab1')

test('it should capitalize first character', ()=>{
    expect(all.capitalize('hello')).toBe('Hello')
})

test('it should reverse input string', ()=>{
    expect(all.reverse('string')).toEqual('gnirts')
})

test('it should sum numbers in an array', ()=>{
    expect(all.sum([1,2,5,3])).toBe(11)
})

test('it should count words in a string', ()=>{
    expect(all.wordCount('this is a cooler')).toBe(4)
})

test('it should check for palindrome in a string', ()=>{
    expect(all.isPalindrome('this is not palindrome')).toBeFalsy()
})
test('it should check for palindrome in a string', ()=>{
    expect(all.isPalindrome('cooc')).toBeTruthy()
})
test('it should double every array element', ()=>{
    expect(all.double([2,4,3,5])).toStrictEqual([4,8,6,10])
})

test('it should return all even numbers in an array', ()=>{
    expect(all.filterEven([1,2,4,3,5])).toStrictEqual([1,3,5])
})

test('it should return the average of an array of integers', ()=>{
    expect(all.average([2,4,3,5,1])).toBe(3)
})

test('it should return full name', ()=>{
    expect(all.fullName({firstName:'ven', lastName:'kofi'})).toBe('ven kofi')
})

test('it should check if age is adult', ()=>{
    expect(all.isAdult({age:18})).toBeTruthy()
})

test('it should check if age is not adult', ()=>{
    expect(all.isAdult({age:14})).toBeFalsy()
})

test('it should filter objects by min age', ()=>{
    const persons = [{age:21},{age:14},{age:12},{age:46},]
    expect(all.filterByAge(persons, 13)).toStrictEqual([{age:21},{age:14},{age:46}])
})


