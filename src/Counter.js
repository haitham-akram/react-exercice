import React from 'react';
function Counter() {
  const [count, setCount] = React.useState(0);
  const IncrementCounter = () => {
    setCount(count + 1);
  };
  const DecrementCounter = () => {
    setCount(count - 1);
  };
  const ResetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter state is: {count}</h1>
      <button onClick={IncrementCounter}>Increment</button>
      <button onClick={DecrementCounter}>Decrement</button>
      <button onClick={ResetCounter}>Reset </button>
      <hr />
    </>
  );
}
export default Counter;
