import { StatComponent } from './';

export const StatsComponent = ({ stats, price }) => {
    const array = new Array(...Object.keys(stats));

    return (
        <div className="stats-component">
            {
                array.map((key) => (
                    <StatComponent key={ key } price={ price } stat={ key } statValue={ stats[key] } />
                ))
            }
        </div>
    )
}
