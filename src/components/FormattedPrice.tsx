type Props = {
  amount: number;
};

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return (
    <div>
      <span>{formattedAmount}</span>
    </div>
  );
};

export default FormattedPrice;
