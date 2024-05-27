import { createContext, useContext } from "react";
const propsContext = createContext();
export default function ContextProps({ children, className, ...props }) {
  return (
    <propsContext.Provider value={props}>
      <div className={className}>{children}</div>
    </propsContext.Provider>
  );
}

export const useProps = () => useContext(propsContext);
