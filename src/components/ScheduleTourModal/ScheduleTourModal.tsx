"use client";

import React, { useState } from "react";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { Button } from "../Button";

export interface ScheduleTourModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleTourModal: React.FC<ScheduleTourModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    childName: "",
    age: "",
    parentName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      childName: "",
      age: "",
      parentName: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
    setLoading(false);
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetForm, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.childName.trim()) {
      newErrors.childName = "Child's name is required";
    }
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent's name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&family=Prompt:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');

        .modal-submit-3d-btn:hover {
          background-color: #ff5f95 !important;
          top: 2px !important;
        }
        .modal-submit-3d-btn:active {
          top: 5px !important;
          background-color: #e03570 !important;
        }
        .modal-cancel-3d-btn:hover {
          background-color: #f1f5f9 !important;
          top: 2px !important;
        }
        .modal-cancel-3d-btn:active {
          top: 5px !important;
          background-color: #cbd5e1 !important;
        }
        .custom-visit-modal {
          background-color: #fffdf8 !important;
          border: 2.5px solid rgba(126, 92, 179, 0.18) !important;
          border-radius: 28px !important;
          box-shadow: 0 25px 60px rgba(46, 46, 142, 0.15) !important;
        }
        .custom-visit-modal > div:first-child {
          padding: 24px 28px 16px 28px !important;
          border-bottom: 2px dashed rgba(126, 92, 179, 0.15) !important;
          background-color: #fffdf8 !important;
        }
        .custom-visit-modal label {
          font-family: 'Prompt', sans-serif !important;
          font-weight: 600 !important;
          color: #00084b !important;
          font-size: 14px !important;
        }
        .custom-visit-modal input,
        .custom-visit-modal textarea {
          background-color: #ffffff !important;
          border: 2px solid rgba(126, 92, 179, 0.15) !important;
          color: #00084b !important;
          border-radius: 16px !important;
          padding: 12px 16px !important;
          font-family: 'Prompt', sans-serif !important;
          font-size: 15px !important;
          transition: all 0.2s ease-in-out !important;
        }
        .custom-visit-modal input::placeholder,
        .custom-visit-modal textarea::placeholder {
          color: #94a3b8 !important;
          font-family: 'Prompt', sans-serif !important;
          font-size: 14px !important;
        }
        .custom-visit-modal input:focus,
        .custom-visit-modal textarea:focus {
          border-color: #7e5cb3 !important;
          box-shadow: 0 0 0 4px rgba(126, 92, 179, 0.15) !important;
          outline: none !important;
          background-color: #ffffff !important;
        }
        .custom-visit-modal button[aria-label="Close modal"] {
          color: #7e5cb3 !important;
          background-color: rgba(126, 92, 179, 0.05) !important;
          border: 1px solid rgba(126, 92, 179, 0.1) !important;
          transition: all 0.2s ease !important;
        }
        .custom-visit-modal button[aria-label="Close modal"]:hover {
          background-color: #f94a8a !important;
          color: #ffffff !important;
          transform: rotate(90deg) !important;
        }
        @media (min-width: 1025px) {
          .custom-visit-modal {
            max-width: 1200px !important;
            width: 1200px !important;
            height: 550px !important;
            max-height: 550px !important;
            margin: auto !important;
          }
          .custom-visit-modal > div:first-child {
            padding: 28px 36px 16px 36px !important;
          }
          .custom-visit-modal .overflow-y-auto {
            padding: 28px 36px !important;
          }
        }
        @media (max-width: 1024px) {
          .custom-visit-modal {
            width: 95vw !important;
            height: auto !important;
            max-height: 90vh !important;
          }
        }
      `}</style>

      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={
          <div className="flex flex-col gap-0.5 text-left">
            <span
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: "13px",
                fontWeight: 800,
                color: "#f94a8a",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}
            >
              Welcome to BTVAS
            </span>
            <span
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: "28px",
                fontWeight: 800,
                color: "#00084b",
                lineHeight: 1.1,
              }}
            >
              Schedule a Tour
            </span>
          </div>
        }
        className="custom-visit-modal"
        size="xl"
      >
        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center text-center py-12 px-4 h-full">
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#e8fbf2",
                border: "2px dashed #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "40px" }}>🌟</span>
            </div>
            <h4
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "24px",
                fontWeight: 900,
                color: "#00084b",
                marginBottom: "12px",
              }}
            >
              Tour Scheduled Successfully!
            </h4>
            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "16px",
                color: "#4B5563",
                lineHeight: "1.6",
                maxWidth: "480px",
                marginBottom: "24px",
              }}
            >
              Thank you, <strong style={{ color: "#7e5cb3" }}>{formData.parentName}</strong>! We
              have received your tour request for{" "}
              <strong style={{ color: "#f94a8a" }}>{formData.childName}</strong>. Our team will
              reach out to you within 24 business hours to confirm your tour time.
            </p>
            <Button variant="secondary" onClick={handleClose} size="md">
              Great, Thank You!
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col justify-center h-full text-left gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 flex flex-col gap-3.5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Child's Name"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    placeholder="Enter child's name"
                    error={errors.childName}
                    required
                    className="!py-2.5 !rounded-xl"
                  />
                  <Input
                    label="Child's Age (or DOB)"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="e.g. 4 years old"
                    error={errors.age}
                    className="!py-2.5 !rounded-xl"
                  />
                </div>

                <Input
                  label="Parent's / Guardian's Name"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  placeholder="Enter parent's name"
                  error={errors.parentName}
                  required
                  className="!py-2.5 !rounded-xl"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="parent@example.com"
                    error={errors.email}
                    required
                    className="!py-2.5 !rounded-xl"
                  />
                  <Input
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    error={errors.phone}
                    required
                    className="!py-2.5 !rounded-xl"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-1.5 w-full">
                <label className="text-sm font-bold text-navy-deep font-sans select-none pl-1">
                  How Can We Help You? (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your child's needs or your preferred date/time for the tour..."
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-navy focus:ring-2 focus:ring-navy/10 transition-all font-sans text-base resize-none"
                  style={{ height: "208px" }}
                />
              </div>
            </div>

            <div
              className="flex gap-4 justify-end items-center"
              style={{
                marginTop: "32px",
                paddingTop: "24px",
                paddingBottom: "8px",
                borderTop: "2px dashed rgba(126, 92, 179, 0.15)",
              }}
            >
              <div style={{ position: "relative", width: "110px", height: "45px", flexShrink: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "110px",
                    height: "40px",
                    backgroundColor: "#cbd5e1",
                    borderRadius: "20px",
                  }}
                />
                <button
                  type="button"
                  onClick={handleClose}
                  disabled={loading}
                  className="modal-cancel-3d-btn"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "110px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#f8fafc",
                    color: "#475569",
                    border: "1.5px solid #cbd5e1",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "top 0.1s ease, background-color 0.2s ease",
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  Cancel
                </button>
              </div>
              <div style={{ position: "relative", width: "168px", height: "45px", flexShrink: 0 }}>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "168px",
                    height: "40px",
                    backgroundColor: "#c93360",
                    borderRadius: "20px",
                  }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="modal-submit-3d-btn"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "168px",
                    height: "40px",
                    borderRadius: "20px",
                    backgroundColor: "#FF4880",
                    color: "#ffffff",
                    border: "none",
                    cursor: loading ? "default" : "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "top 0.1s ease, background-color 0.2s ease",
                    fontFamily: "'Comic Sans MS', 'Chalkboard SE', cursive",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </span>
                  ) : (
                    "Schedule Tour"
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};
