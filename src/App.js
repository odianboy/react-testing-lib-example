import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {Navbar} from "./components/Navbar/Navbar";

// function App() {
//     const [data, setData] = useState()
//     const [toggle, setToggle] = useState(false)
//     const [value, setValue] = useState('')
//
//     const onClick = () => setToggle(prevState => !prevState)
//
//     useEffect(() => {
//         setTimeout(
//             () => {
//                 setData({})
//             }, 1000
//         )
//     }, []);
//
//       return (
//         <div>
//             <h1 data-testid={'value-elem'}>{value}</h1>
//             {toggle && <div data-testid={'toggle-elem'}>toggle</div>}
//             {data && <div style={{color: 'red'}}>data</div>}
//           <h1>Hello world</h1>
//           <button data-testid={'toggle-btn'} onClick={onClick}>click me</button>
//           <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value..."/>
//         </div>
//       );
// }
//
// export default App;

const App = () => {
    return (
        <div>
            <Navbar />
            <AppRouter />
        </div>
    )
}

export default App;
