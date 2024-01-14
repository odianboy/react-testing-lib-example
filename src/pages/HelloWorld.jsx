import {useState} from "react";

export const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState()

    const toggle = () => value === 'hello' && setVisible(prev => !prev)
    const onChange = (e) => setValue(e.target.value)
    return (
        <div>
            <input onChange={onChange} id={'search'} type="text"/>
            <button onClick={toggle} id={'toggle'}>HELLO WORLD</button>
            {visible && <h1 id={'hello'}>HELLO WORLD</h1>}
        </div>
    )
}