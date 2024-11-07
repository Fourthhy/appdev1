import React, { useState, useEffect } from 'react';

function Testing() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count has been updated to: ${count}`);

    // Optional cleanup function
    return () => {
      console.log(`Cleaning up for count: ${count}`);
    };
  }, [count]); // Runs the effect whenever `count` changes
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}

export default Testing;