import PropTypes from 'prop-types';
import s from './transactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transaction}>
            <thead>
                <tr>
                    <th>type</th>
                    <th>amount</th>
                    <th>currency</th>
                </tr>
            </thead>
        
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </tr>))}
            </tbody>
        </table>
    );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
