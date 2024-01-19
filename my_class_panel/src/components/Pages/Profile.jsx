import React from "react";
import ProfileDetailsSection from '../ProfileDetailsSection/ProfileDetailsSection';
function Profile() {
  return (
    <div>
      <div className="profile-text">
        <h2>Profile Information</h2>
        <hr></hr>
      </div>
      <div>
        <ProfileDetailsSection />
      </div>
    </div>
  );
}

export default Profile;
