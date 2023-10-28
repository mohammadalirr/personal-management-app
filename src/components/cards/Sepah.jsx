import BankCard from './BankCards';

const Sepah = () => {
  return (
    <div>
      <BankCard
        number="1234 5678 9012 3456"
        bank="بانک سپه "
        userName="نام صاحب کارت"
        expiration="10/25"
        color="#FFA500"
        index = {1}
      />
    </div>
  );
};

export default Sepah;