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
      { id: 1, name: "ALB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 2, name: "CHO", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 3, name: "TG", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 4, name: "CRP", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 5, name: "A/G", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 6, name: "CRE", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 7, name: "HB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 8, name: "ALT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 9, name: "TB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 10, name: "CK", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 11, name: "FTP", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 12, name: "URE/CRE", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],
    2: [
      { id: 1, name: "ALB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 13, name: "PLT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],
    3: [
      { id: 14, name: "WBC", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 15, name: "Left Shift", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 16, name: "IG", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 4, name: "CRP", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],
    4: [
      { id: 13, name: "PLT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 17, name: "FIB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 4, name: "CRP", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],    
    5: [
      { id: 6, name: "CRE", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 18, name: "URE", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 19, name: "CA", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 20, name: "P", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],     
    6: [
      { id: 21, name: "ALT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 22, name: "AST", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 23, name: "GGT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 9, name: "TB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 1, name: "ALB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],  
    7: [
      { id: 23, name: "GGT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 24, name: "ALP", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],     
    8: [
      { id: 25, name: "LDH", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 10, name: "CK", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 26, name: "HsTNI", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 22, name: "AST", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],    
    9: [
      { id: 7, name: "HB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 27, name: "MCV", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 12, name: "URE/CRE", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],    
    10: [
      { id: 28, name: "PT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 29, name: "APTT", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 17, name: "FIB", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 30, name: "D-dimer", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],    
    11: [
      { id: 31, name: "NA", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 32, name: "K", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 33, name: "CL", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
    ],         
    12: [
      { id: 34, name: "PH", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 35, name: "PCO2", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 36, name: "HCO3", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },
      { id: 37, name: "PO2", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },      
      { id: 38, name: "SaO2", description: "Low ALB suggests Malnutrition", RI_Lowest: 34, RI_Highest: 54 },      
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
