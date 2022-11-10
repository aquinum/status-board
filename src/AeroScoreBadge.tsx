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
    height: number;
    width: number;
}

const AeroScoreBadge = ({ aeroScore, height, width }: Props) => {
    return <div className={`AeroScoreWrapper h-${height} w-${width}`}>
        <h1>Aéro-Score</h1>
        <div className='subtitle'>Quelle est la qualité du renouvellement d’air du Node ?</div>

        <div className={'Table'}>
            <div className={'Line Disabled'}>
                <div className={'Letter LetterA'}>A</div>
                <div className={'Description'}>
                    <h2>Excellent</h2>
                    <span className='LevelDescription'>Taux de CO2 &lt; 600 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={'Line'}>
                <div className={'Letter LetterB'}>B</div>
                <div className={'Description'}>
                    <h2>Bon</h2>
                    <span className='LevelDescription'>600 ppm &lt; Taux de CO2 &lt; 800 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={'Line'}>
                <div className={'Letter LetterC'}>C</div>
                <div className={'Description'}>
                    <h2>Moyen</h2>
                    <span className='LevelDescription'>800 ppm &lt; Taux de CO2 &lt; 1000 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={'Line'}>
                <div className={'Letter LetterD'}>D</div>
                <div className={'Description'}>
                    <h2>Médiocre</h2>
                    <span className='LevelDescription'>1000 ppm &lt; Taux de CO2 &lt; 1500 ppm</span>
                </div>
                <div>image</div>
            </div>
            <div className={'Line'}>
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