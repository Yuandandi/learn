# DATA TYPE

## String
"your text"; start with " ends with " this seems redundant
'your text'; start with ' ends with '
"I'd like to"; if you use single quotes in the text, you need to wrap with ""
`"Don't be late"`; if you use ' and " you need to wrap with `` (backtick)
'"Gerakan pungut sampah" pada hari Jum/'at'; '/' is an escape character so JavaScript won't recognize It as string wrapper

### Escape Character
\0 ; null character
\' ; `
\" ; "
\\ ; \
\n ; new line
\t ; tab
\b ; backspace
\uXXXX ; unicode e.g. \u00A9 will return ©

### String Comparisson
"danzor" == "Danzor"; false

### String Operator
"Danzor zorex".length(); 12 (space character is counted)

## Boolean
- logical representation of true or false
- founder; george boole 1954
- in programming boolean used in conditional statement to control programs flow
- true; When the condition is RIGHT
- false; When the condition is WRONG

var x = 10;
x < 20;
true

"danzor" == "Danzor"; false

### Boolean method in js
Boolean(expression)
    Boolean(10 < 20); true
    Boolean("Danzor"); true
    Boolean(20); true
    Boolean(0); false
    Boolean(-1); true

### truthy falsy
    - truthy; true, non-zero number, "string", Object, arrays, functions
    - falsy; false, 0, "", undefined, null, NaN
    undefined; we have declared the variable but never initialized e.g. var x;
    null; the variable set to null to set the conditional statement later on

## Number
    - numbers in JavaScript are double-precision floating point 64-bit format IEEE 754 values
    - there's no integer
    - there's only floating point

### Number Without Decimal
    - the hold 64-bit meaning 2⁶⁴ the precission number only 15 digits
    999999999999999 15 digits will return the same
    9999999999999999 16 digits will return 10000000000000000 

### Number With Decimal
    - decimal use . dots
    - 3.14, 0.5, 100.00
    - maximum 17 decimal digits
    - counting with decimal can be not accurate
    0.7 + 0.3; 1
    0.2 + 0.1; 0.30000000004
    - exponen
    123e5; 12300000
    123e-5; 0.00123
    - negative number; -20, -0.9
    - don't start the number with 0 e.g. 022 will return 18
    They will treat as an 'octal number' 8 based number 0-7
    0xFF treat as 'hexadecimal number' 0-9 a-f return 255
    - 2 / 0 ; Infinity
    - -2 /0 ; -Infinity
    - 0 / 0 ; NaN (not a number)
    - 100 / "foo" ; NaN 
    - 100 / "10" ; 10 so weird

