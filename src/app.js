import React, { useState, useReducer } from "react";

// export default class App extends React.Component {
//   render() {
//     return (
//       <>
//         <div>My App</div>
//       </>
//     );
//   }
// }

let initialState = [""];

function App(props) {
  const [input, setInput] = useState(initialState);

  const [state, reducer] = useReducer(reducer, initialState);

  return <ul>{getTodoItems}</ul>;
}

export default App;
