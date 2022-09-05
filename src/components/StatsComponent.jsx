import { StatComponent } from './';

export const StatsComponent = ({ stats }) => {
    const array = new Array(...Object.keys(stats));

    return (
        <div class="stats-component">
            {
                array.map((key) => (
                    <StatComponent key={ key } stat={ key } statValue={ stats[key] } />
                ))
            }
        </div>
    )
}
