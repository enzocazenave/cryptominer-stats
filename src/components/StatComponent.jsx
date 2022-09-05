import { convertData } from '../helpers/convertData';
import { translateStat } from '../helpers/translateStat';

export const StatComponent = ({stat, statValue}) => {
    statValue = convertData(stat, statValue);
    stat = translateStat(stat);

    return (
        <div className="stat-component">
            <span className="stat-component__value">{ statValue }</span>
            <span className="stat-component__title">{ stat }</span>
        </div>  
    );
}
