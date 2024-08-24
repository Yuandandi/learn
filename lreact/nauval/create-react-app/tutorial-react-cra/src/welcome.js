// Two Ways of Importing

// function Welcome() {
//   return <h1>welcome</h1>
// }

// export default Welcome;

export default function Welcome() {
  return (
    <h1>welcome</h1>
  )
}

export function Welcome2(props) {
  return (
    <h1>{ props.text }</h1>
  )
}

export function Welcome3(props) {
  console.log(props) // Object { children: welcome children }
  return (
    <h1>{ props.children }</h1>
  ) // we can access text node by the props 'children' could be any properties name
}

// this is specifically ES6 module you can't use It in the lower version
// we can do export function without any export default function but we have to wrapt It in {  } on app.js
