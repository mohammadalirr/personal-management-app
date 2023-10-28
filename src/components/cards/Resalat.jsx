import BankCard from './BankCards';

const Resalat = () => {
  return (
    <div>
      <BankCard
        number="1234 5678 9012 3456"
        bank="بانک رسالت "
        userName="نام صاحب کارت"
        expiration="10/25"
        color="#81D4FA"
        index={3}
      />
    </div>
  );
};

export default Resalat;