import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

// function MyApp(){
//   return (
//     <>
//     <h1>Custom App !!! </h1>
//     </>
//   )
// }

// const anotherElement = (
//   <a href = "https://google.com"  target='_blank'>Vist google</a>
// )

const reactElement = React.createElement(
     'a',
     {href: 'https://google.com' , target: '_blank' },
     'click me to visit google'

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    reactElement
  </React.StrictMode>,
)