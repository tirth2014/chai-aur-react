
function customRender(reactElement, root){
    const domElement = document.createElement(reactElement.type)

    // for (const [attr,val] of Object.entries(reactElement.props)) {
    //     domElement.setAttribute(attr,val)
    // }
    //   both loops doing same thing.
    for (const attr in reactElement.props) {
        console.log(reactElement.props[attr]);
        domElement.setAttribute(attr,reactElement.props[attr])
    }
    domElement.innerHTML = reactElement.children;
    root.appendChild(domElement);
};


const root = document.querySelector('#root');


const reactElement = {
    'type': 'a',
    'props': {
        'href' : 'https://www.google.com/',
        'target': '_blank',
    },
    'children': 'Click me to visit google!'
};

customRender(reactElement, root);


/* React elements are easy to traverse, don’t need to be parsed, 
 and of course they are much lighter than the actual DOM elements—they’re just objects!


DOM Elements:
When an element’s type is a string, it represents a DOM node with that tag name, 
and props correspond to its attributes. This is what React will render. For example:
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}


Component Elements
However, the type of an element can also be a function or a class corresponding to a React component:

{
  type: Button,
  props: {
    color: 'blue',
    children: 'OK!'
  }
}

This is the core idea of React.
An element describing a component is also an element, just like an element describing the DOM node. 
They can be nested and mixed with each other.

READ MORE: https://legacy.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
*/
