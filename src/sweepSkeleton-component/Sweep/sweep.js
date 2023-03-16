// import "./sweep.css";

// export default function Sweep(props) {
//   const { children } = props;
//   return (
//     <div className="sweepContainer">
//       {children}
//       <div className="mask">
//         <div className="sweepLight" />
//       </div>
//     </div>
//   );
// }

import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./sweep.module.css";

function Sweep(props) {
  const {
    children,
    lightWidth = 80,
    lightDegree = "22.5deg",
    lightBg = "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .24) 50.04%, rgba(255, 255, 255, 0) 99.37%)",
    duration = "2s"
  } = props;

  const sweepLightStyle = useMemo(() => {
    return {
      width: lightWidth,
      background: lightBg,
      transform: `rotate(${lightDegree}) scaleY(2)`
    };
  }, [lightBg, lightWidth, lightDegree]);

  return (
    <div className={styles.container}>
      {children}

      <div className={styles.mask} style={{ animationDuration: duration }}>
        <div className={styles.sweepLight} style={sweepLightStyle}></div>
      </div>
    </div>
  );
}

Sweep.propTypes = {
  children: PropTypes.node.isRequired,
  lightWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lightDegree: PropTypes.string,
  lightBg: PropTypes.string,
  duration: PropTypes.string
};

export default Sweep;
