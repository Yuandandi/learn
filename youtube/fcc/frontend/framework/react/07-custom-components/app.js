function TemporaryName() {   // better to use pascal naming convention
  return (
    <div>
    <img src="./react-logo.png" width="400px"/>
    <h1>fun fact about react</h1>
    <ul>
    <li>was first released in 2013</li>
    <li>was originally created by jordan walker</li>
    <li>has well over 100k stars on GitHub</li>
    <li>is maintained by facebook</li>
    <li>powers thousands of enterprise apps, including mobile apps</li>
    </ul>
    </div>
  )
}

ReactDOM.render(<TemporaryName />, document.getElementById("root")) // <TemporaryName /> call the Function in form self closing tags
