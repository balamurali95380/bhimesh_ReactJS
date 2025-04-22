import Add from "./Add";


const Total = () => {
  const total = Add(98, 122);

  return (
    <>
      <h1>Total: {total}</h1>
    </>
  );
};

export default Total;
