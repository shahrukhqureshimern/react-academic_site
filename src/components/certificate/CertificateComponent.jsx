import React from 'react';
import certificateImage from '../certificate/Certificate.jpg';

const CertificateComponent = () => {
  const handleDownloadCertificate = () => {
    // Replace 'path/to/certificate.jpg' with the actual path to your certificate image
    const certificateImagePath = 'certificate/Certificate.jpg';

    // Create a link element
    const downloadLink = document.createElement('a');

    // Set the href and download attributes directly on the link
    downloadLink.href = certificateImagePath;
    downloadLink.download = 'certificate.jpg';

    // Trigger a click on the link to start the download
    downloadLink.click();
  };

  return (
    <div className='start'>
      <div className='button' onClick={handleDownloadCertificate}>
        GET CERTIFICATE
      </div>
    </div>
  );
};

export default CertificateComponent;
