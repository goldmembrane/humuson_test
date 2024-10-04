import { useLocation } from "react-router-dom";
import { pathDivider } from "../util/util";

const EmptyContainer = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div>{pathDivider(pathname)}</div>
    </>
  );
};

export default EmptyContainer;
