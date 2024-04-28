import s from './TransactionHistory.module.css'
import clsx from 'clsx'

export const TransactionHistory = ({ items }) => {
  // const { type, amount, currency} = items;
  return (
    <table className={s.table}>
      <thead className={s.header}>
        <tr className={s.tr}>
          <th className={s.title}>Type</th>
          <th className={s.title}>Amount</th>
          <th className={s.title}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.body}>
        {items.map((item) => {
          const { type, amount, currency } = item;
          const propType = `${type[0].toUpperCase()}${type.slice(1)}`;
          return (
            <tr className={clsx(s.tr, items.indexOf(item) % 2 !== 0 && s.backColor)}  key={item.id} >
              <td className={clsx(s.tr, s.type)}>{propType}</td>
              <td className={s.td}>{amount}</td>
              <td className={s.td}>{currency}</td>
            </tr>
          );
        })}
        
      </tbody>
    </table>
  );
};

// export default TransactionHistory
