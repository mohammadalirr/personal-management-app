import BankCard from './BankCards';

const EghtesadeNovin = () => {
  return (
    <div>
      <BankCard
        number="1234 5678 9012 3456"
        bank="بانک  اقتصاد نوین"
        userName="نام صاحب کارت"
        expiration="10/25"
        color="#00cc00"
        index={2}
      />
    </div>
  );
};

export default EghtesadeNovin;