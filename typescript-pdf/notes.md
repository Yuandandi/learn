THE BASIC TYPES ARE :
• number (both integers and floating point numbers)
• string
• boolean
• Array. You can specify the types of an array's elements. There are two equivalent ways to
define array types: Array<T> and T[]. For example:
number[] - array of numbers
Array<string> - array of strings
• Tuples. Tuples have a fixed number of elements with specific types.
[boolean, string] - tuple where the first element is a boolean and the second is a
string.
[number, number, number] - tuple of three numbe
• {} - object, you can define its properties or indexer
○{name: string, age: number} - object with name and age attributes
○{[key: string]: number} - a dictionary of numbers indexed by string
• enum - { Red = 0, Blue, Green } - enumeration mapped to numbers
• Function. You specify types for the parameters and return value:
(param: number) => string - function taking one number parameter returning string
() => number - function with no parameters returning an number.
(a: string, b?: boolean) => void - function taking a string and optionally a boolean with
no return value.
• any - Permits any type. Expressions involving any are not type checked.
• void - represents "nothing", can be used as a function return value. Only null and undefined
are part of the void type.
• never
let foo: never; -As the type of variables under type guards that are never true.
function error(message: string): never { throw new Error(message); } - As the return
type of functions that never return.
○
○
○
○
○
• null - type for the value null. null is implicitly part of every type, unless strict null checks are
enabled.
