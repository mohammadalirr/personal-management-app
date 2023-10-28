import BankCard from './BankCards';

const Saman = () => {
  return (
    <div>
      <BankCard
        number="2045 5678 9012 3456"
        bank="بانک سامان "
        userName="نام صاحب کارت"
        expiration="10/9"
        color="#1BA1E2"
        index={4}
      />
    </div>
  );
};

export default Saman;