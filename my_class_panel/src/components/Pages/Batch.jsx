import React, { useState } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import batchDataMock from "../../Mocks/studentsAndBatches.json";
import BatchWiseData from "../BatchesdataSection/BatchWiseData";

const options = ["Batch 1", "Batch 2"];
const defaultOption = options[0];

function Batch() {
  const [batchData, setBatchData] = useState(batchDataMock);
  const [selectedBatch, setSelectedBatch] = useState("Batch 1");

  const handleBatchChange = (e) => {
    setSelectedBatch(e.value);
  };

  return (
    <div>
      <div className="profile-text">
        <h2>Batches Information</h2>
        <hr></hr>
      </div>
      <div>
        <Dropdown
          options={options}
          onChange={handleBatchChange}
          value={defaultOption}
          placeholder="Select an option"
        />
      </div>
      <div>
        <BatchWiseData selectedBatch={selectedBatch} batchData={batchData} />
      </div>
    </div>
  );
}

export default Batch;
