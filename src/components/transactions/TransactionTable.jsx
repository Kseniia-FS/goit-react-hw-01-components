import PropTypes from 'prop-types';
import Transaction from './Transaction';
import s from './Transaction.module.css';

function TransactionTable({ data }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(el => {
          return (
            <Transaction
              key={el.id}
              type={el.type}
              amount={el.amount}
              currency={el.currency}
            />
          );
        })}
      </tbody>
    </table>
  );
}

TransactionTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact),
};

export default TransactionTable;
