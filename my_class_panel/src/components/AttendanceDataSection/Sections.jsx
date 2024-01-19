import React, { useState } from "react";

let data = [
  {
    heading: "Leave Application",
    name: "Jane Smith",
    batch: "Batch 1",
    reason: "Family function at my place.",
  },
  {
    heading: "Unable to attend school",
    name: "Tyler Adams",
    batch: "Batch 2",
    reason: "I am not well.",
  },
  {
    heading: "Leave application due to personal reason",
    name: "Avery Turner",
    batch: "Batch 2",
    reason: "I will not be able to attend school.",
  },
];

function Sections(props) {
  const [approvalStatus, setApprovalStatus] = useState({});
  const [approvedData, setApprovedData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);

  const handleApproval = (index) => {
    setApprovalStatus((prevStatus) => ({
      ...prevStatus,
      [index]: "Approved",
    }));
    setApprovedData((prevData) => [...prevData, data[index]]);
  };

  const handleRejection = (index) => {
    setApprovalStatus((prevStatus) => ({
      ...prevStatus,
      [index]: "Rejected",
    }));
    setRejectedData((prevData) => [...prevData, data[index]]);
  };

  return (
    <div>
      <div>
        {props.selectedTab=='Permissions' && data.length>0 ? data?.map((item, ind) => {
          return (
            <div key={ind} class='card p-3 mb-3'>
              <h4>{item.heading}</h4>
              <div>{item.name}</div>
              <div>{item.batch}</div>
              <div>{item.reason}</div>
              <div className="section-btn">
                <button
                  onClick={() => handleApproval(ind)}
                  disabled={approvalStatus[ind]}
                  className="btn btn-primary"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleRejection(ind)}
                  disabled={approvalStatus[ind]}
                  className="btn btn-danger mx-3"
                >
                  Reject
                </button>
              </div>
              <div>Status: {approvalStatus[ind]}</div>
            </div>
          );
        }) : props.selectedTab=='Permissions' && data.length>0 ? "No records found" : ''}
      </div>
      <div>
        {props.selectedTab=='Approvals' && approvedData.length>0 ? approvedData.map((item, ind) => (
          <div key={ind} class='card p-3 mb-3'>
            <h4>{item.heading}</h4>
            <div>{item.name}</div>
            <div>{item.batch}</div>
            <div>{item.reason}</div>
          </div>
        )) : props.selectedTab=='Approvals' && approvedData.length==0  ? "No records found" : ""}
      </div>
      <div>
        {props.selectedTab=='Rejections' && rejectedData.length>0 ? rejectedData.map((item, ind) => (
          <div key={ind} class='card p-3 mb-3'>
            <h4>{item.heading}</h4>
            <div>{item.name}</div>
            <div>{item.batch}</div>
            <div>{item.reason}</div>
          </div>
        )) : props.selectedTab=='Rejections' && rejectedData.length==0 ? "No records found" :""}
      </div>
    </div>
  );
}

export default Sections;
