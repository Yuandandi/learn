1. why do we need to `import React from "react"` in our files?
because jsx syntax is defined in react
2. if I we're to console.log(page) in index.js, What would show up?
will return JavaScript object. react element that is describe What react should eventually add to the real DOM for us
3. what's wrong with this code:

```
Const page = (
        <h1>Hello</h1>
        <p>This is my website!</p>
        )
```
we need our jsx to be nested under a single parent element called "fragments"

4. What does It mean for something to be "declarative" instead of "imperative"?
declarative ; means i can tell the computer What to do and expect It to handle the details
imperative ; means i need to tell do each steps

5. What does It mean for something to be "composable"?
we have small piece that we can put together to make something larger/greater than the individual pieces
