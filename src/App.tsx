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
    { id: 4, name: "Sepsis" },
    { id: 5, name: "Kidney" },
    { id: 6, name: "Liver" },
    { id: 7, name: "Biliary" },
    { id: 8, name: "Cell damage" },
    { id: 9, name: "Anemia" },
    { id: 10, name: "Coagulation" },
    { id: 11, name: "Electrolyte" },
    { id: 12, name: "Blood gas" },
    // Add more tests as needed
  ];

  // Example interpretation function
  const interpretationMap = (values: number[]): string => {
    return values
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
    4: [
      { id: 13, name: "PLT" },
      { id: 17, name: "FIB" },
      { id: 4, name: "CRP" },
    ],    
    5: [
      { id: 6, name: "CRE" },
      { id: 18, name: "URE" },
      { id: 19, name: "CA" },
      { id: 20, name: "P" },
    ],     
    6: [
      { id: 21, name: "ALT" },
      { id: 22, name: "AST" },
      { id: 23, name: "GGT" },
      { id: 9, name: "TB" },
      { id: 1, name: "ALB" },
    ],  
    7: [
      { id: 23, name: "GGT" },
      { id: 24, name: "ALP" },
    ],     
    8: [
      { id: 25, name: "LDH" },
      { id: 10, name: "CK" },
      { id: 26, name: "HsTNI" },
      { id: 22, name: "AST" },
    ],    
    9: [
      { id: 7, name: "HB" },
      { id: 27, name: "MCV" },
      { id: 12, name: "URE/CRE" },
    ],    
    10: [
      { id: 28, name: "PT" },
      { id: 29, name: "APTT" },
      { id: 17, name: "FIB" },
      { id: 30, name: "D-dimer" },
    ],    
    11: [
      { id: 31, name: "NA" },
      { id: 32, name: "K" },
      { id: 33, name: "CL" },
    ],         
    12: [
      { id: 34, name: "PH" },
      { id: 35, name: "PCO2" },
      { id: 36, name: "HCO3" },
      { id: 37, name: "PO2" },      
      { id: 38, name: "SaO2" },      
    ],         
  };

  const [selectedTestId, setSelectedTestId] = useState<number>(1); // Default to first test

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
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
