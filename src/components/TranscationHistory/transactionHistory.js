import PropTypes from 'prop-types';

import {
  HeadTransition,
  ItemTransition,
  Items,
  NameTransition,
  TableTransition,
  Tr,
  Transition,
} from './transactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TableTransition>
      <HeadTransition>
        <Transition>
          <NameTransition>Type</NameTransition>
          <NameTransition>Amount</NameTransition>
          <NameTransition>Currency</NameTransition>
        </Transition>
      </HeadTransition>
      {items.map(item => (
        <ItemTransition key={item.id}>
          <Tr>
            <Items>{item.type}</Items>
            <Items>{item.amount}</Items>
            <Items>{item.currency}</Items>
          </Tr>
        </ItemTransition>
      ))}
    </TableTransition>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
    })
  ),
};
