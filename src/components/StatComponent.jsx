import { convertData, translateStat, convertToUsd } from '../helpers';
import { useUiStore } from '../hooks';

export const StatComponent = ({stat, statValue, price}) => {

    const { stats } = useUiStore();
    

    const stat_const = stat;

    statValue = convertData(stat, statValue);
    stat = translateStat(stat);

    return (
        <div className="stat-component">
            <span className="stat-component__value">{ statValue }</span>
            {
                (stat_const === 'balance') &&
                    <span className="stat-component__convertion">{ ((statValue / convertData('payout', stats.payout)) * 100).toFixed(2) }%</span>
            }
            {
                (stat_const === 'balance' || stat_const === 'paid' || stat_const === 'reward24' || stat_const === 'payout') &&
                    <span className="stat-component__convertion">{ convertToUsd(statValue, price) } USD</span>
            }
            <span className="stat-component__title">{ stat }</span>
        </div>  
    );
}
