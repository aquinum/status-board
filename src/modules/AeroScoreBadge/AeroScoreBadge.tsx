import { useEffect, useState } from 'react';
import api from '../../api/api';
import { TileDefaultProps } from '../../Tile';
import './AeroScoreBadge.css'

export enum AeroScore {
    A,
    B,
    C,
    D,
    E,
}

type Props = {
} & TileDefaultProps;

const AeroScoreBadge = ({ height, width, x, y }: Props) => {
    const [aeroScore, setAeroScore] = useState<AeroScore>();

    const loadData = () => {
        console.debug('Loading Aeroscore data');
        api.get('/api/netatmo').then(response => {
            const co2Level = response.data.datas[0].data.co2;
            if (co2Level < 600) {
                setAeroScore(AeroScore.A);
            } else if (co2Level >= 600 && co2Level < 800) {
                setAeroScore(AeroScore.B);
            } else if (co2Level >= 800 && co2Level < 1000) {
                setAeroScore(AeroScore.C);
            } else if (co2Level >= 1000 && co2Level < 1500) {
                setAeroScore(AeroScore.D);
            } else {
                setAeroScore(AeroScore.E);
            }
        });
        setTimeout(loadData, 60 * 1000);
    }

    useEffect(() => {
        loadData();
    }, []);

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