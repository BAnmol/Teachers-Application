import React, { useState } from "react";
import Sections from "./Sections";
function AttendanceTabsSection() {
  const [selectedTab, setSelectedTab] = useState("Permissions");
  const handleTabSelection = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div>
        <div className="row">
          <div
            onClick={() => handleTabSelection("Permissions")}
            className={`col ${selectedTab === "Permissions" ? "active" : ""}`}
          >
            Requests
          </div>
          <div
            onClick={() => handleTabSelection("Approvals")}
            className={`col ${selectedTab === "Approvals" ? "active" : ""}`}
          >
            Approvals
          </div>
          <div
            onClick={() => handleTabSelection("Rejections")}
            className={`col ${selectedTab === "Rejections" ? "active" : ""}`}
          >
            Rejections
          </div>
        </div>
        <hr></hr>
      </div>
      <div>
         <Sections selectedTab={selectedTab} />
      </div>
    </div>
  );
}

export default AttendanceTabsSection;
