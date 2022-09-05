import { StatComponent } from './';

export const StatsComponent = ({ stats }) => {
    const array = new Array(...Object.keys(stats));

    return (
        <div className="stats-component">
            {
                array.map((key) => (
                    <StatComponent key={ key } stat={ key } statValue={ stats[key] } />
                ))
            }
        </div>
    )
}
