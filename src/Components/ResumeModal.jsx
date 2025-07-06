import React from "react";
import "./Styles/resumeModal.scss";

function ResumeModal({ isOpen, onClose, resumeUrl }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Zak-Mumuni-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="resume-modal-header">
          <div>Resume Preview</div>
          <div className="resume-modal-actions">
            <button className="download-btn" onClick={handleDownload}>
              Download PDF
            </button>
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          <iframe
            src={resumeUrl}
            width="100%"
            height="100%"
            title="Resume Preview"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
