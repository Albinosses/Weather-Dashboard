import { Loader } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const CustomLoader = () => {
  return (
    <Loader
      style={{ position: "fixed", zIndex: 1000 }}
      size="lg"
      backdrop
      content="Loading your weather"
    />
  );
};

export default CustomLoader;
