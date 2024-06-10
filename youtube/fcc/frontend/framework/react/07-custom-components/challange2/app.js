function Page() { // usually people always wrap with tag
  return ( // use navv for better in asis technology
    <div> 
    <header>
    <nav> 
    <img src="../react-logo.png" width="300px"/>
    </nav>
    </header>
    <ol>
    <li>popular library</li>
    <li>easy to maintain</li>
    <li>declarative way</li>
    </ol>
    <footer>
    © 2021 yuan development. All rights reserved.
    </footer>
    </div>
  )
}

ReactDOM.render(<Page />, document.getElementById("root"))
