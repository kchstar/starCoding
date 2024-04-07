import { useId } from 'react';
function App(){
    const id = useId();
    console.log(id);

    return(
        <div>
            <MyInput />
            <MyInput />
        </div>
    );
}

function MyInput(){
    return(
        <div>
            <label htmlFor='name'>이름</label>
            <input id='name' />
        </div>
    );
}