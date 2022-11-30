import { TileDefaultProps } from "../Tile";

type CalendarProps = {
} & TileDefaultProps;

const Calendar = ({height, width, x, y}: CalendarProps) => {
    return <div className={`Calendar h-${height} w-${width} x-${x} y-${y}`}>
        <div>Aujourd'hui 10/11/2022</div>
        <Entry end={'10:00'} start={'09:00'} title={'Titre évènement'} />
    </div>
}

type EntryProps = {
    end: string;
    start: string;
    title: string;
}

const Entry = ({end, start, title}: EntryProps) => {
    return <div>
        <div>{start} — {end}</div>
        <div>{title}</div>
    </div>
}

export default Calendar;