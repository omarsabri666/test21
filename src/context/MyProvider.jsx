import { createContext, useContext, useState } from "react";


const contextProvider = createContext();
function MyProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <contextProvider.Provider value={{ count, setCount }}>
      {children}
    </contextProvider.Provider>
  );
}

export default MyProvider;
export function UseData() {
  const context = useContext(contextProvider);
  if (context === undefined) {
    throw new Error("context in undefined");
  }
  return context;
}
