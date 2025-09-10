import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/*const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        traget: '_blank'
    },
    Children: 'click me to visit google'
}*/

const anothereElement = (
  <a href='https://google.com' target='_blank'>visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href : 'https://google' , target:'_blank'},
  'click me to visit google'
)

function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
