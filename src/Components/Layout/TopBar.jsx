import React, { useContext, useEffect, useState } from "react";
import "./Topbar.css";

const TopBars = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      <div className="topbar-info">
        For order related queries, please call at 647-402-5465
      </div>
    </div>
  );
};

export default TopBars;
