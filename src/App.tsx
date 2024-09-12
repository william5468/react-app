// src/App.tsx
import React, { useState } from "react";
import LabTest from "./components/LabTest";

// Define the structure for a single test
interface Test {
  id: number;
  name: string;
}

// Define the structure for tests data
interface TestsData {
  [key: number]: Test[];
}

const App: React.FC = () => {
  // Define lab tests
  const labTests = [
    { id: 1, name: "Nutrition" },
    { id: 2, name: "Prognosis" },
    { id: 3, name: "Infection" },
    // Add more tests as needed
  ];

  // Example interpretation function
  const interpretationMap = (values: number[]): string => {
    const avg = values.reduce((a, b) => a + b, 0) / values.length;
    if (isNaN(avg)) return "No values provided"; // Handle case with no values
    return `Average: ${avg.toFixed(2)}`; // Return as a string
  };

  // Define tests data with the correct type
  const testsData: TestsData = {
    1: [
      { id: 1, name: "ALB" },
      { id: 2, name: "CHO" },
      { id: 3, name: "TG" },
      { id: 4, name: "CRP" },
      { id: 5, name: "A/G" },
      { id: 6, name: "CRE" },
      { id: 7, name: "HB" },
      { id: 8, name: "ALT" },
      { id: 9, name: "TB" },
      { id: 10, name: "CK" },
      { id: 11, name: "FTP" },
      { id: 12, name: "URE/CRE" },
    ],
    2: [
      { id: 1, name: "ALB" },
      { id: 13, name: "PLT" },
    ],
    3: [
      { id: 14, name: "WBC" },
      { id: 15, name: "Left Shift" },
      { id: 16, name: "IG" },
      { id: 4, name: "CRP" },
    ],
  };

  const [selectedTestId, setSelectedTestId] = useState<number>(1); // Default to first test

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "300px", background: "#f4f4f4", padding: "30px" }}>
        <h3>Lab Tests</h3>
        {labTests.map((test) => (
          <button
            key={test.id}
            style={{
              display: "block",
              margin: "10px 0",
              padding: "10px",
              width: "100%",
              backgroundColor:
                selectedTestId === test.id ? "#007BFF" : "#ffffff", // Change color based on selection
              color: selectedTestId === test.id ? "#ffffff" : "#000000", // Text color
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: selectedTestId === test.id ? "bold" : "normal", // Bold text for selected button
            }}
            onClick={() => setSelectedTestId(test.id)}
          >
            {test.name}
          </button>
        ))}
      </div>

      {/* Main Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Lab Result Analyzer</h1>
        <LabTest
          title={
            labTests.find((test) => test.id === selectedTestId)?.name || ""
          }
          tests={testsData[selectedTestId]} // Now TypeScript recognizes this
          interpretationMap={interpretationMap}
        />
      </div>
    </div>
  );
};

export default App;
