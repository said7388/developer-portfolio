import React from 'react';
import { certificationData } from "@/utils/data/certificationData";

const CertificationCard = ({ certification }) => {
  return (
    <div className="bg-[#0f0b24] text-[#EFF3F4] p-6 rounded-lg mb-4 transition-transform duration-300 hover:scale-110 shadow-xl hover:shadow-2xl border-l-4 border-[#16f2b3]">
      <h3 className="text-xl font-semibold mb-2">{certification.title}</h3>
      <p className="mb-1">
        <span className="font-medium">Issued by:</span> {certification.issuedBY}
      </p>
      <p className="mb-1">
        <span className="font-medium">Issued date:</span> {certification.IssuedDate}
      </p>
      <p className="mb-4">
        <span className="font-medium">Credential ID:</span> {certification.CredentialID}
      </p>
      <a
        href={certification.CertificateURL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 rounded border-2 border-[#EFF3F4] transition-all duration-300 hover:bg-[#231d4b] hover:text-violet-600 hover:border-[#0F0C41]"
      >
        Show Credential
      </a>
    </div>
  );
};


const Certifications = () => {
  return (
    <div id="certifications" className="certifications-section">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-[#EFF3F4] mb-6">My Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationData.map((certification) => (
            <CertificationCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
