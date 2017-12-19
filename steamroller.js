
/*-- PSEUDOCODE --*/

// potentially use concat to join arrays?

/*-- ASSIGNMENT --*/

Steamroller
Flatten a nested array. You must account for varying levels of nesting.

Here are some helpful links:

Array.isArray(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].