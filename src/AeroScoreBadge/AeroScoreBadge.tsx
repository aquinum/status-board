import { TileDefaultProps } from '../Tile';
import './AeroScoreBadge.css'

export enum AeroScore {
    A,
    B,
    C,
    D,
    E,
}

type Props = {
    aeroScore: AeroScore
} & TileDefaultProps;

const AeroScoreBadge = ({ aeroScore, height, width, x, y }: Props) => {
    return <div className={`AeroScoreWrapper h-${height} w-${width} x-${x} y-${y}`}>
        <h1>Aéro-Score</h1>
        <div className='subtitle'>Quelle est la qualité du renouvellement d’air du Node ?</div>

        <div className={'Table'}>
            <div className={`Line ${aeroScore !== AeroScore.A && 'Disabled'}`}>
                <div className={'Letter LetterA'}>A</div>
                <div className={'Description'}>
                    <h2>Excellent</h2>
                    <span className='LevelDescription'>Taux de CO2 &lt; 600 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={`Line ${aeroScore !== AeroScore.B && 'Disabled'}`}>
                <div className={'Letter LetterB'}>B</div>
                <div className={'Description'}>
                    <h2>Bon</h2>
                    <span className='LevelDescription'>600 ppm &lt; Taux de CO2 &lt; 800 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={`Line ${aeroScore !== AeroScore.C && 'Disabled'}`}>
                <div className={'Letter LetterC'}>C</div>
                <div className={'Description'}>
                    <h2>Moyen</h2>
                    <span className='LevelDescription'>800 ppm &lt; Taux de CO2 &lt; 1000 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={`Line ${aeroScore !== AeroScore.D && 'Disabled'}`}>
                <div className={'Letter LetterD'}>D</div>
                <div className={'Description'}>
                    <h2>Médiocre</h2>
                    <span className='LevelDescription'>1000 ppm &lt; Taux de CO2 &lt; 1500 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={`Line ${aeroScore !== AeroScore.E && 'Disabled'}`}>
                <div className={'Letter LetterE'}>E</div>
                <div className={'Description'}>
                    <h2>Insuffisant</h2>
                    <span className='LevelDescription'>Taux de CO2 &gt; 1500 ppm</span>
                </div>
                <div>image</div>
            </div>
        </div>
    </div>;
}

export default AeroScoreBadge;