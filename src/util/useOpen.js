import { useCallback, useState } from "react";

const useOpen = () => {
  const [isopen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(!isopen);
  }, []);

  return [isopen, handleOpen];
};

export default useOpen;
