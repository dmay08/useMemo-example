import { useMemo, useState } from "react";

// useMemo example
// Show how 'useMemo' prevents expensive calculations
// ... from re-rendering unless certain params are changed

// ** Even tho 'App' re-renders w/ 'Count +' button prs,
// ... memoized 'sideCalc' does NOT re-calculate,
// ... b/c [otherVal] didn't change
function App() {
  const [count, setCount] = useState(0);

  const [otherVal, setOtherVal] = useState(0);
  console.log("otherVal", otherVal);

  // ** this will re-render / re-calculate each time 'Count +' button is pressed
  // const sideCalc = Math.random() * 10000000

  // ** this will only re-render when 'Other button' is pressed
  const sideCalc = useMemo(() => Math.random() * 10000000, [otherVal]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count +</button>
      <div>{`Count: ${count}`}</div>
      <div>-------------</div>
      <button onClick={() => setOtherVal(otherVal + 1)}>Other button +</button>
      <div>Prevent re-render of expensive operation below:</div>
      <div>{`sideCalc: ${sideCalc}`}</div>
    </div>
  );
}

export default App;
