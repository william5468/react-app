import React, { useEffect } from "react";

// Define a type for your lab test
type LabTest = {
  id: number; // or another type, such as number
  name: string;
};

interface LabTestSelectorProps {
  labTests?: LabTest[]; // Array of lab tests
  selectedTestId: number | undefined; // Can be a string or undefined
  setSelectedTestId: (id: number) => void; // Function to set selected test ID
  handleCategoryChange: (id: number) => void; // Function to handle category change
}

const LabTestSelector: React.FC<LabTestSelectorProps> = ({
  labTests = [],
  selectedTestId = 0,
  setSelectedTestId = () => {},
  handleCategoryChange = () => {},
}) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const currentIndex = labTests.findIndex(
      (test) => test.id === selectedTestId
    );

    if (event.key === "ArrowUp") {
      if (currentIndex > 0) {
        handleCategoryChange(labTests[currentIndex - 1].id);
      }
    } else if (event.key === "ArrowDown") {
      if (currentIndex < labTests.length - 1) {
        handleCategoryChange(labTests[currentIndex + 1].id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setSelectedTestId, labTests, selectedTestId]);

  return (
    <div style={{ width: "300px", background: "#f4f4f4", padding: "30px" }}>
      <h3>Category</h3>
      {labTests.map((test) => (
        <button
          key={test.id}
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px",
            width: "100%",
            backgroundColor: selectedTestId === test.id ? "#007BFF" : "#ffffff",
            color: selectedTestId === test.id ? "#ffffff" : "#000000",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: selectedTestId === test.id ? "bold" : "normal",
          }}
          onClick={() => handleCategoryChange(test.id)}
        >
          {test.name}
        </button>
      ))}
    </div>
  );
};

export default LabTestSelector;
