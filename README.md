# CHAPTER 1 
<h3>
<p>
JavaScript has 3 special values that dont' have like normal numbers.
    <ul>
        <li> Infinity 
        <li> (-) Infinity
        <li> NaN (not a number)
    </ul>

You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.</br> If two backslashes follow each other, they will collapse together, and only one will be left in the resulting string value. This is how the string “A newline character is written like "\n".”</br> Unary operators are words instead of symbols. One example is the "typeof" operator.
<ol>
    <li>console.log(typeof 4.5) // → number
    <li>console.log(typeof "x") // → string
</ol>

Automatic type conversion
<ol>
    <li>console.log(8 * null) // → 0
    <li>console.log("5" - 1) // → 4
    <li>console.log("5" + 1)// → 51
    <li>console.log("five" * 2) // → NaN
    <li>console.log(false == 0)// → true
    <li>console.log(typeof "x") // → string
</ol>
</p>
</h3>
</br>

# CHAPTER 2
<h3>
<p>
<h2>Bindings</h2></br>
We have seen how to produce new values from old values, but this does not change the old values, and the new value has to be immediately used or it will dissipate again. To catch and hold values, JavaScript provides a thing called a binding, or variable:
    <ol>
        <li> let caught = 5 * 5;
        <li> let ten = 10;
        <li> console.log(ten * ten);
        <li> // → 100
    </ol>

The previous statement creates a binding called caught and uses it to grab hold of the number that is produced by multiplying 5 by 5.</br> 
After a binding has been defined, its name can be used as an expression. The value of such an expression is the value the binding currently holds.</br>

<h2>The console.log function</h2>

<ol>
    <li>console.log(typeof 4.5) // → number
    <li>console.log(typeof "x") // → string
</ol>

The console.log function that writes out its arguments to some text output device. In browsers, the output lands in the JavaScript console. 

<p>
<h2>Takeaways</h2>

You now know that a program is built out of statements, which themselves sometimes contain more statements. Statements tend to contain expressions, which themselves can be built out of smaller expressions.

Putting statements after one another gives you a program that is executed from top to bottom. You can introduce disturbances in the flow of control by using conditional (if, else, and switch) and looping (while, do, and for) statements.

Bindings can be used to file pieces of data under a name, and they are useful for tracking state in your program. The environment is the set of bindings that are defined. JavaScript systems always put a number of useful standard bindings into your environment.

Functions are special values that encapsulate a piece of program. You can invoke them by writing functionName(argument1, argument2). Such a function call is an expression and may produce a value.</h2>
</p>
</p>
</h3>
</br>

credits https://eloquentjavascript.net/13_browser.html