import { convertData, translateStat, convertToUsd } from '../helpers';

export const StatComponent = ({stat, statValue, price}) => {
    const stat_const = stat;
    statValue = convertData(stat, statValue);
    stat = translateStat(stat);

    return (
        <div className="stat-component">
            <span className="stat-component__value">{ statValue }</span>
            {
                (stat_const == 'balance' || stat_const == 'paid' || stat_const == 'reward24') &&
                    <span className="stat-component__convertion">{ convertToUsd(statValue, price) } USD</span>
            }
            <span className="stat-component__title">{ stat }</span>
        </div>  
    );
}
