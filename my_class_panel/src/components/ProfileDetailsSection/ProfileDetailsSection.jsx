import React, { useState, useEffect } from "react";

function ProfileDetailsSection() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: "Anmol Bhoyar",
      noOfBatches: "2",
      email: "anmolbhoyar@gmail.com",
      contact: "9999999999",
      education: "M.Tech (Computer Science)",
      dateOfBirth: "31/03/1997",
      noOfStudents: "40",
  });

  useEffect(() => {
    const setProfileString = JSON.stringify(profile);
    localStorage.setItem("userData", setProfileString);
  }, [profile]);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  const handleChange = (field, value) => {
    if (field == "name") {
        setProfile({...profile,name:value})
    }
    else if(field == "dateOfBirth"){
        setProfile({...profile,dateOfBirth:value})
    }
    else if(field == "email"){
        setProfile({...profile,email:value})
    }
    else if(field == "education"){
        setProfile({...profile,education:value})
    }
    else if(field == "contact"){
        setProfile({...profile,contact:value})
    }
    else if(field == "noOfBatches"){
        setProfile({...profile,noOfBatches:value})
    }
    else if(field == "noOfStudents"){
        setProfile({...profile,noOfStudents:value})
    }
  };

  return (
    <div>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Name :</label>
          <input
            type="text"
            class='form-control'
            id="myInput"
            value={profile?.name}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </div>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Date of birth :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.dateOfBirth}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("dateOfBirth", e.target.value)}
          />
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Email :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.email}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Education :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.education}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("education", e.target.value)}
          />
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Contact :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.contact}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
        </div>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Number of batches :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.noOfBatches}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("noOfBatches", e.target.value)}
          />
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <label class='mb-3' htmlFor="myInput">Total number of students :</label>
          <input
            type="text"
            id="myInput"
            class='form-control'
            value={profile?.noOfStudents}
            readOnly={!isEditMode}
            onChange={(e) => handleChange("noOfStudents", e.target.value)}
          />
        </div>
      </div>
      <div class='row'>
        <div class='col-md-6 mb-3'>
          <button class='btn btn-primary btn-block w-100' onClick={handleEditClick} disabled={isEditMode}>
            Edit
          </button>
        </div>
        <div class='col-md-6 mb-3'>
          <button class='btn btn-success btn-block w-100' onClick={handleSaveClick} disabled={!isEditMode}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetailsSection;
