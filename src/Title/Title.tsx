import { TileDefaultProps } from "../Tile";
import './Title.scss';

type TitleProps = {
    subtitle?: string;
    title: string;
} & TileDefaultProps;

const Title = ({height, subtitle, title, width, x, y}: TitleProps) => {
    return <div className={`Title h-${height} w-${width} x-${x} y-${y}`}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
    </div>
}

export default Title;