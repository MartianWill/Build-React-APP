import "./styles.css";
import "./Skeleton/index";
import Skeleton from "./Skeleton";
import Sweep from "./Sweep/sweep";

export default function App() {
  return (
    <div>
      <Sweep>
        <Skeleton />
      </Sweep>
    </div>
  );
}

// video bili, change to typescript.
