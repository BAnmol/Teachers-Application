import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import Modal from "react-modal";
function BatchWiseData(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredData =
    props.selectedBatch === "Batch 1"
      ? props?.batchData?.batch_1?.students?.filter((ele) =>
          ele.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : props?.batchData?.batch_2?.students?.filter((ele) =>
          ele.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Search:
          </label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Enter name to search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table className="table table-bordered">
          <thead>
            <th className="text-center">Roll No.</th>
            <th className="text-center">Name</th>
            <th className="text-center">DOB</th>
            <th className="text-center">Batch</th>
            <th className="text-center">Gender</th>
            <th className="text-center">Contact No.</th>
            <th className="text-center">Age</th>
            <th className="text-center">View</th>
          </thead>
          <tbody>
            {props.selectedBatch == "Batch 1"
              ? filteredData.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td title="Serial Number">{ele.sr_no}</td>
                      <td title="Name">{ele.name}</td>
                      <td title="Date of birth">{ele.dob}</td>
                      <td title="Batch">{props.selectedBatch}</td>
                      <td title="Gender">{ele.gender}</td>
                      <td title="Contact Number">{ele.contact_number}</td>
                      <td title="Age">{ele.age}</td>
                      <td title="View" onClick={() => handleViewStudent(ele)}>
                        {" "}
                        {<FaEye />}
                      </td>
                    </tr>
                  );
                })
              : filteredData.map((ele, i) => {
                  return (
                    <tr key={i}>
                      <td title="Serial Number">{ele.sr_no}</td>
                      <td title="Name">{ele.name}</td>
                      <td title="Date of birth">{ele.dob}</td>
                      <td title="Batch">{props.selectedBatch}</td>
                      <td title="Gender">{ele.gender}</td>
                      <td title="Contact Number">{ele.contact_number}</td>
                      <td title="Age">{ele.age}</td>
                      <td title="View" onClick={() => handleViewStudent(ele)}>
                        {<FaEye />}
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
        <div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Student Details"
          >
            <h2>Student Informtaion</h2>
            {selectedStudent && (
              <div>
                <p>Name: {selectedStudent.name}</p>
                <p>Roll No.: {selectedStudent.sr_no}</p>
                <p>DOB: {selectedStudent.dob}</p>
                <p>Age: {selectedStudent.age}</p>
                <p>Email: {selectedStudent.email}</p>
                <p>Contact Details: {selectedStudent.contact_number}</p>
              </div>
            )}
            <button onClick={closeModal}>Close</button>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default BatchWiseData;
