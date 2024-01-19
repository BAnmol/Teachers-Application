import React, { useState, useEffect } from "react";
import DashboardData from "../../Mocks/dashboardData.json";
import NoticeSection from "../DashboardDataSection/NoticeSection";
import CalenderSection from "../DashboardDataSection/CalenderSection";
function Dashboard() {
  const [user, setUser] = useState("");
  const [noticeData, setNoticeData] = useState("");
  const [events, setEvents] = useState("");
  useEffect(() => {
    setUser(DashboardData.user_name);
    setNoticeData(DashboardData.notice_section);
    setEvents(DashboardData.events)
  });
  return (
    <div>
      <div>
        <h2>{`Welcome, ${user}`}</h2>
      </div>
      <hr></hr>
      <div className="row mb-3">
        <div className="col-md-6">
          <CalenderSection />
        </div>
        <div className="col-md-6">
          <h3>Events Today</h3>
          <div>
            {
              events?.map((ele)=>{
                return(
                  <ul>
                    <li>{ele.name}</li>
                  </ul>
                )
              })
            }
          </div>
        </div>
      </div>
      <div>
        <NoticeSection noticeData={noticeData} />
      </div>
    </div>
  );
}

export default Dashboard;
