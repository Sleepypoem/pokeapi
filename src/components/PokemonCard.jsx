import { useEffect, useState } from "react";
import { getPokemonData } from "../js/data";
import Badge from "./Badge";

function PokemonCard({ pokemon }) {

    const [species, setSpecies] = useState("");
    const [imgLoading, setImgLoaded] = useState(false);
    const [descriptions, setDescriptions] = useState([{
        "flavor_text": "",
        "language": { name: '' }
    }]);

    const colores = {
        "grass": "green",
        "fire": "red",
        "water": "blue",
        "bug": "#9ACD32",
        "dragon": "#8A2BE2",
        "dark": "#663399",
        "electric": "orange",
        "fairy": "#EE82EE",
        "fighting": "#D2691E",
        "flying": "#9098FF",
        "ghost": "#8B008B",
        "ground": "#F4A460",
        "ice": "#87CEEB",
        "normal": "gray",
        "poison": "#8A2BE2",
        "psychic": "#FF69B4",
        "rock": "#8B4513",
        "steel": "#4682B4"
    }


    const getPokemonSpecies = async (url) => {

        let especie = await getPokemonData(url);
        setSpecies(especie.data);
        let spanishDesc = especie?.data?.flavor_text_entries?.filter((desc) => desc.language.name === "es")
        setDescriptions(spanishDesc)
    }

    const onLoad = () => {
        setImgLoaded(true);
    }

    useEffect(() => {
        getPokemonSpecies(pokemon?.species?.url);

    }, [pokemon])

    return (
        <>{
            <div className="card m-1 border border-dark" style={{ width: "18rem", height: "35rem" }}>
                <img onLoad={onLoad} src={imgLoading ? pokemon?.sprites?.other["official-artwork"]?.front_default : "https://i.imgur.com/ho8HEoY.gif"} alt={pokemon?.name + " image"} style={{ display: imgLoading ? "block" : "none", backgroundColor: colores[pokemon?.types[0]?.type?.name] }} />
                <div className="card-body" style={{ backgroundColor: "#202020" }}>
                    <h5 className="card-title text-white text-center text-uppercase fs-3">{pokemon?.name}</h5>
                    <p className="card-text text-white fs-6">{descriptions[0]?.flavor_text}</p>

                </div>
                <div className="container d-flex flex-row justify-content-xxl-around" style={{ backgroundColor: "#202020" }}>
                    <Badge color={colores[pokemon?.types[0]?.type?.name]} text={pokemon?.types[0]?.type?.name} />
                    {(pokemon?.types?.length > 1) ? <Badge color={colores[pokemon?.types[1]?.type?.name]} text={pokemon?.types[1]?.type?.name} /> : ""}

                </div>
            </div>
        }
        </>
    );
}



export default PokemonCard;