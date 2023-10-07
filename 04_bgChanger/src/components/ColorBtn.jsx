

// 1. Functional Component with Props Destructuring:

function ColorBtn({ colorKey, colorLabel, onClick }) {
    return (
        <button onClick={onClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" type="button"
            style={{ backgroundColor: colorKey}}
        >
            {colorLabel}
        </button>
    )
}

export default ColorBtn;




// 2. Functional Component with Explicit Props:

// function ColorBtn(props) {
//     return (
//         <button onClick={props.onClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" type="button"
//             style={{ backgroundColor: props.colorKey}}
//         >
//             {props.colorLabel}
//         </button>
//     )
// }

// export default ColorBtn;





// 3. Class Component:

// import React, { Component } from 'react'

// class ColorBtn extends Component {

//     render() {
//         return (
//             <button onClick={this.props.onClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" type="button"
//                 style={{ backgroundColor: this.props.colorKey }}
//             >
//                 {this.props.colorLabel}
//             </button>
//         )
//     }
// }

// export default ColorBtn;



// 4. Arrow Function Component:

// const ColorBtn = ({ colorKey, colorLabel, onClick }) => (
//     <button onClick={onClick} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" type="button"
//         style={{ backgroundColor: colorKey }}
//     >
//         {colorLabel}
//     </button>
// );

// export default ColorBtn;



// All of these variations achieve the same functionality but use slightly different syntax. 
// The choice of which one to use depends on personal preference and project requirements. 
// Functional components are the recommended approach in modern React, 
// but class components are still valid if you're working with older codebases or specific use cases. 
// Arrow function components are a concise way to define functional components.