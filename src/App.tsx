import {Canvas} from '@react-three/fiber'
import './App.css'
import {OrbitControls} from "@react-three/drei";
import YoshiStory from "./Stages/YoshiStory";
import {useControls} from "leva";
import DreamLand from "./Stages/DreamLand";
import Battlefield from "./Stages/Battlefield";
import FountainOfDreams from "./Stages/FountainOfDreams";
import FinalDestination from "./Stages/FinalDestination";
import HyruleTemple from "./Stages/HyruleTemple";
import PokemonStadium from "./Stages/PokemonStadium";
import {HomeRunStadium} from "./Stages/HomeRunStadium";
import {Fox} from "./Characters/Fox";
import {Suspense} from "react";

enum Stage {
    DreamLand = "Dream Land",
    YoshiStory = "Yoshi's Story",
    Battlefield = "Battlefield",
    FinalDestination = "Final Destination",
    FountainOfDreams = "Fountain of Dreams",
    HyruleTemple = "Hyrule Temple",
    PokemonStadium = "Pokemon Stadium",
    HomeRunStadium = "Home Run Stadium"
}

function StageToComponent(stage: Stage): JSX.Element {
    switch (stage) {
        case Stage.HomeRunStadium:
            return <HomeRunStadium/>
        case Stage.FinalDestination:
            return <FinalDestination/>
        case Stage.FountainOfDreams:
            return <FountainOfDreams/>
        case Stage.Battlefield:
            return <Battlefield/>
        case Stage.DreamLand:
            return <DreamLand/>;
        case Stage.YoshiStory:
            return <YoshiStory/>;
        case Stage.HyruleTemple:
            return <HyruleTemple/>;
        case Stage.PokemonStadium:
            return <PokemonStadium/>
    }
}

function App(): JSX.Element {
    const {stage} = useControls({
        stage: {
            options: Object.values(Stage)
        }
    })
    return (
        <div className="App">
            <Canvas camera={{position: [0, 25, 75], rotation: [Math.PI, Math.PI, 0]}}>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <OrbitControls/>
                <Suspense>
                    <Fox/>
                </Suspense>
                {/*<Slippi/>*/}
                {/*<DonkeyKong/>*/}
                {/*<Yoshi/>*/}
                {StageToComponent(stage as Stage)}
            </Canvas>
        </div>
    )
}

export default App
