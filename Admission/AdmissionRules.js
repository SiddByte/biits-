import React from 'react';
import './AdmissionRules.css';

function AdmissionPage() {
  return (
    <div className="admission-page-rules">
      <header className="admission-header-rules">
        <h1>Admission Rules and Steps</h1>
      </header>
      <div className="container-rules">
        <div className="section">
          <h2>Admission Rules</h2>
          <ul>
            <li>Applicants must meet the minimum eligibility criteria for each program.</li>
            <li>All applications must be submitted online through our admission portal.</li>
            <li>Application fees must be paid during the submission of the application.</li>
            {/* Add more rules here */}
          </ul>
        </div>

        <div className="section">
          <h2>Admission Steps</h2>
          <ol>
            <li>Review the admission guidelines and program requirements.</li>
            <li>Create an account on our admission portal.</li>
            <li>Complete the online application form, providing all necessary information.</li>
            <li>Pay the application fee online.</li>
            {/* Add more steps here */}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default AdmissionPage;
