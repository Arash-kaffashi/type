# type.js
Function "type" that returns the correct type of given value, finally!

**Usage**
```js
type(item[, user_class])
```
* `item`: Item/value that you want the type
* `user_class`: optionaly if you want to distinguish Object from User Defined Classes and Constructors. Default: true, true to distinguish.

**[Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)**
```js
type( false )                                           // Boolean
type( true )                                            // Boolean
type( null )                                            // null
type( 42 )                                              // Number
type( 'A' )                                             // String
type( Symbol() )                                        // Symbol
type( undefined )                                       // undefined
```

**Objects**
```js
type( (function() { return arguments;})(1, 2, 3) )      // Arguments
type( [1, 2, 3] )                                       // Array
type( new Date() )                                      // Date
type( document.createElement('div') )                   // element
type( new Error() )                                     // Error
type( function (){} )                                   // Function
type( Math )                                            // Math
type( NaN )                                             // nan
type( {} )                                              // Object
type( /[A-Za-z0-9]+/ )                                  // RegExp
```

# Notes

**Lower or Uper?**
Constructors are set capitalized, `unless those custom constructors, defined by you, in a different way`. On the other hand, informative names are set lowercase.

Example:
```js
// Capitalized
type( new Array([1, 2, 3]) )                            // Array
type( Boolean(1) )                                      // Boolean
type( String('string') )                                // String

// lowercase - informative
type( document.querySelector('div') )                   // element
type( 1 + +'string' )                                   // nan
type( null )                                            // null
type( new function(){}() )                              // anonymous user class
```

**function Constructor**
```js
//Constructor
function Animal() {}

type( Animal )                                          // Function
type( new Animal() )                                    // Animal
```
**Class/Extends**
```js
//Constructor
class Polygon{}

//extended Constructor
class Square extends Polygon{}

type( new Polygon() )                                   // Polygon
type( new Square() )                                    // Square
```
**Constructor Assigned to Variable**
```js
//Constructor
var Foo = function() {},
    obj = new Foo();

type( obj )                                             // Foo
```

# Be Aware!

**Infinity**
```js
type( Infinity )                                        // Number
type( -Infinity )                                       // Number 
```

**Anonymous Constructor**
```js
type( new function(){}() )                              // anonymous user class
```
