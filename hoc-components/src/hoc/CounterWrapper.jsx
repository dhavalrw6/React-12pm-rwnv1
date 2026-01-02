import React, { useState } from "react";

const CounterWrapper = (WrapperComponent) => {
  return function EnhanceComponent(props) {
    const [count, setCount] = useState(0);

    return (
      <WrapperComponent
        {...props}
        count={count}
        incrementCount={() => setCount(count + 1)}
      />
    );
  };
};

export default CounterWrapper;
