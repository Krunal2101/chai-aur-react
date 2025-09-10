

function customRender(reactElement, Container){
  /*  
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.Children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('traget', reactElement.props.traget)
    Container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children;
    for (const prop in reactElement.props) {
        if (prop === 'Children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
    }

 
const reactElement = {
    type : 'a',
    props: {
        href: 'https://google.com',
        traget: '_blank'
    },
    Children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)