import PropTypes from 'prop-types';
import s from './statistics.module.css'

const colors = ['#696969', '#a9a9a9', '#c0c0c0', '#d3d3d3', '#DCDCDC'];

export const Statistics = ({ title, stats }) => {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.list}>
                {stats.map(({ id, label, percentage}, index) => (
                <li className={s.item} key={id} style={{ background: colors[index]}}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}%</span>
            </li>
            ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          label: PropTypes.string,
          percentage: PropTypes.number,
        }),
    )   
}