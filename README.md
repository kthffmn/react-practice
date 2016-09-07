# React Practice

Following along with the Egghead React Fundamentals tutorial [here](https://egghead.io/courses/react-fundamentals).

### Lesson 16

```jmx
const App = (props) => {
  var myStyle = {
    backgroundColor: '#000',
    height: 10
  }
  return (
    <div>
      <a href="#"
         notrendered="x"
         onClick={update}>
         this is the text
         {i>1? 'More' : 'one'}
         {i>1 && 'More than one'}
         {/* comment */}}
      </a>
    </div>
  )
}
```
Gets compiled to:

```javascript
"use strict";

var App = function App(props) {
  var myStyle = {
    backgroundColor: '#000',
    height: 10
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      "a",
      { href: "#",
        notrendered: "x",
        onClick: update },
      "this is the text",
      i > 1 ? 'More' : 'one',
      i > 1 && 'More than one',
      "}"
    )
  );
};
/* comment */
```

### Lesson 17

Command to precompile JSX:

```
> babel --presets react src.js -o dist.js --watch
```