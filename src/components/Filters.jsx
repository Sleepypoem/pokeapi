import React, { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContextProvider';

function Filters() {

    const { setFilters, setFiltering } = useContext(PokemonContext);

    const handleSubmit = async (e) => {
        setFiltering(true);
        e.preventDefault();
        setFilters([])
        let inputs = e.target;

        let filterList = [];
        for (let index = 0; index < inputs.length; index++) {
            if (inputs[index].checked) {
                filterList.push(inputs[index].name);
            }

        }
        if (filterList.length === 0) {
            setFiltering(false);
            return;
        }

        setFilters(filterList);
    }

    return (
        <div  >
            <form className='w-100 container-fluid d-flex flex-row justify-content-evenly align-items-center flex-wrap border border-dark' style={{ marginTop: "70px" }} onSubmit={handleSubmit}>
                <div><img src='https://i.imgur.com/bG0eR2A.png' alt='grass icon' width="75px" /><input type="checkbox" name='grass' /></div>
                <div><img src='https://i.imgur.com/wxR4VBY.png' alt='grass icon' width="75px" /><input type="checkbox" name='fire' /></div>
                <div><img src='https://i.imgur.com/y1w3qxg.png' alt='grass icon' width="75px" /><input type="checkbox" name='dark' /></div>
                <div><img src='https://i.imgur.com/BC33FAN.png' alt='grass icon' width="75px" /><input type="checkbox" name='flying' /></div>
                <div><img src='https://i.imgur.com/FV2aJ3a.png' alt='grass icon' width="75px" /><input type="checkbox" name='electric' /></div>
                <div><img src='https://i.imgur.com/SowLHa2.png' alt='grass icon' width="75px" /><input type="checkbox" name='fighting' /></div>
                <div><img src='https://i.imgur.com/kb097QF.png' alt='grass icon' width="75px" /><input type="checkbox" name='ground' /></div>
                <div><img src='https://i.imgur.com/AiOBjtq.png' alt='grass icon' width="75px" /><input type="checkbox" name='rock' /></div>
                <div><img src='https://i.imgur.com/19C9uAI.png' alt='grass icon' width="75px" /><input type="checkbox" name='psychic' /></div>
                <div><img src='https://i.imgur.com/Yjn8E4j.png' alt='grass icon' width="75px" /><input type="checkbox" name='steel' /></div>
                <div><img src='https://i.imgur.com/XCWJ1SR.png' alt='grass icon' width="75px" /><input type="checkbox" name='water' /></div>
                <div><img src='https://i.imgur.com/hU9hoI7.png' alt='grass icon' width="75px" /><input type="checkbox" name='bug' /></div>
                <div><img src='https://i.imgur.com/I2ZUkGS.png' alt='grass icon' width="75px" /><input type="checkbox" name='fairy' /></div>
                <div><img src='https://i.imgur.com/QLeSDTP.png' alt='grass icon' width="75px" /><input type="checkbox" name='dragon' /></div>
                <div><img src='https://i.imgur.com/yKF4V4W.png' alt='grass icon' width="75px" /><input type="checkbox" name='ice' /></div>
                <div><img src='https://i.imgur.com/0ihlnxg.png' alt='grass icon' width="75px" /><input type="checkbox" name='poison' /></div>
                <div><img src='https://i.imgur.com/0KhyIOw.png' alt='grass icon' width="75px" /><input type="checkbox" name='ghost' /></div>
                <div><img src='https://i.imgur.com/V16izCt.png' alt='grass icon' width="75px" /><input type="checkbox" name='normal' /></div>
                <button className='btn btn-info' type='submit'>Filtrar</button>
            </form>
        </div>
    );
}

export default Filters;