// src/App.tsx
import React, { useState } from "react";
import LabTest from "./components/LabTest";

// Define the structure for a single test
interface Test {
  id: number;
  name: string;
  description: string;
  RI_Lowest: number;
  RI_Highest: number;
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
    const interpretations = values.map((value, index) => {
      if (value < 34) return `Test ${index + 1} is below normal range.`;
      if (value > 54) return `Test ${index + 1} is above normal range.`;
      return `Test ${index + 1} is normal.`;
    });
  
    return interpretations.join(" "); // Join interpretations into a single string
  };

  // Define tests data with the correct type
  const testsData: TestsData = {
    1: [
      { id: 1, name: "ALB", description: "Low ALB suggests Malnutrition", RI_Lowest: 35, RI_Highest: 52 },
      { id: 2, name: "CHO", description: "Low CHO suggests Malnutrition", RI_Lowest: 0, RI_Highest: 5 },
      { id: 3, name: "TG", description: "Low TG suggests Malnutrition", RI_Lowest: 0, RI_Highest: 2 },
      { id: 4, name: "CRP", description: "ALB low in inflammation", RI_Lowest: 0, RI_Highest: 5 },
      { id: 5, name: "Globulin", description: "ALB low in inflammation", RI_Lowest: 25, RI_Highest: 39 },
      { id: 6, name: "CRE", description: "ALB low in nephrotic syndrome", RI_Lowest: 65, RI_Highest: 109 },
      { id: 7, name: "HB", description: "ALB low after hemorrhage", RI_Lowest: 13.4, RI_Highest: 17.1 },
      { id: 8, name: "ALT", description: "ALB low in liver disease", RI_Lowest: 0, RI_Highest: 53 },
      { id: 9, name: "TB", description: "ALB low in liver disease", RI_Lowest: 0, RI_Highest: 19 },
      { id: 10, name: "CK", description: "Low ALB after burn", RI_Lowest: 39, RI_Highest: 308 },
      { id: 11, name: "FTP", description: "ALB low in nephrotic syndrome", RI_Lowest: 34, RI_Highest: 54 },
      { id: 12, name: "URE/CRE", description: "Low ALB after GI bleeding", RI_Lowest: 0, RI_Highest: 0 },
    ],
    2: [
      { id: 1, name: "ALB", description: "Low ALB suggests bad prognosis", RI_Lowest: 35, RI_Highest: 52 },
      { id: 13, name: "PLT", description: "Low ALB suggests bad prognosis", RI_Lowest: 145, RI_Highest: 370 },
    ],
    3: [
      { id: 14, name: "WBC", description: "WBC = production - comsumption, low in serious infection", RI_Lowest: 3.7, RI_Highest: 9.2 },
      { id: 15, name: "Left Shift", description: "Left Shift indicate marrow response to infection", RI_Lowest: 0, RI_Highest: 0 },
      { id: 16, name: "IG", description: "IG indicate substantial marrow response to infection", RI_Lowest: 0, RI_Highest: 0 },
      { id: 4, name: "CRP", description: "inflammation in infection", RI_Lowest: 0, RI_Highest: 5 },
    ],
    4: [
      { id: 13, name: "PLT", description: "sepsis, leukaemia, DIC, MAHA", RI_Lowest: 145, RI_Highest: 370 },
      { id: 17, name: "FIB", description: "sepsis, inflammation, liver", RI_Lowest: 0, RI_Highest: 0 },
      { id: 4, name: "CRP", description: "inflammation", RI_Lowest: 0, RI_Highest: 5 },
    ],    
    5: [
      { id: 6, name: "CRE", description: "CKD, skeletal muscle", RI_Lowest: 65, RI_Highest: 109 },
      { id: 18, name: "URE", description: "CKD, nutrition", RI_Lowest: 3.1, RI_Highest: 7.8 },
      { id: 19, name: "CA", description: "CKD, vitamin D, Calcitonin", RI_Lowest: 2.15, RI_Highest: 2.55 },
      { id: 20, name: "P", description: "CKD, vitamin D, Calcitonin", RI_Lowest: 0.72, RI_Highest: 1.39 },
    ],     
    6: [
      { id: 21, name: "ALT", description: "Liver", RI_Lowest: 0, RI_Highest: 53 },
      { id: 22, name: "AST", description: "ACET, Alcohol, acute liver damage", RI_Lowest: 0, RI_Highest: 32 },
      { id: 23, name: "GGT", description: "Biliary tract, Drugs, Alcohol, liver", RI_Lowest: 0, RI_Highest: 45 },
      { id: 9, name: "TB", description: "Biliary obstruction, Hemolysis, Liver", RI_Lowest: 0, RI_Highest: 19 },
      { id: 1, name: "ALB", description: "Low ALB suggests Malnutrition", RI_Lowest: 35, RI_Highest: 52 },
    ],  
    7: [
      { id: 23, name: "GGT", description: "Biliary tract, Drugs, Alcohol, liver", RI_Lowest: 0, RI_Highest: 45 },
      { id: 24, name: "ALP", description: "Biliary tract, bone, intestine, placenta, APR", RI_Lowest: 43, RI_Highest: 105 },
    ],     
    8: [
      { id: 25, name: "LDH", description: "Liver, Cardiac, Muscle, Hemolysis, Lung, Carcinoma", RI_Lowest: 106, RI_Highest: 218 },
      { id: 10, name: "CK", description: "Cardiac, Skeletal muscle", RI_Lowest: 39, RI_Highest: 308 },
      { id: 39, name: "AMY", description: "Pancreatitis", RI_Lowest: 33, RI_Highest: 120 },
      { id: 26, name: "HsTNI", description: "MI", RI_Lowest: 0, RI_Highest: 19.8 },
      { id: 22, name: "AST", description: "ACET, Alcohol, acute liver damage", RI_Lowest: 0, RI_Highest: 32 },
    ],    
    9: [
      { id: 7, name: "HB", description: "Hemorrhage, Hemolysis, Marrow insufficiency", RI_Lowest: 13.4, RI_Highest: 17.1 },
      { id: 27, name: "MCV", description: "Iron, Folate/B12 deficiency, chronic inflammation, liver", RI_Lowest: 82, RI_Highest: 97 },
      { id: 12, name: "URE/CRE", description: "GI bleeding", RI_Lowest: 0, RI_Highest: 0 },
    ],    
    10: [
      { id: 28, name: "PT", description: "liver, DIC, factor inhibitor / deficiency", RI_Lowest: 10, RI_Highest: 12.3 },
      { id: 29, name: "APTT", description: "liver, DIC, factor inhibitor / deficiency", RI_Lowest: 28.2, RI_Highest: 38.2 },
      { id: 17, name: "FIB", description: "liver, sepsis", RI_Lowest: 0, RI_Highest: 0 },
      { id: 30, name: "D-dimer", description: "DIC", RI_Lowest: 0, RI_Highest: 300 },
    ],    
    11: [
      { id: 31, name: "NA", description: "Hydration, ADH, cortisol, FT4, displacement, dilution, liver, kidney", RI_Lowest: 137, RI_Highest: 144 },
      { id: 32, name: "K", description: "CKD, PH, CK, HB, TLS, FT4", RI_Lowest: 3.5, RI_Highest: 4.5 },
      { id: 33, name: "CL", description: "Anion gap calculation, CL wasting metabolic alkalosis", RI_Lowest: 98, RI_Highest: 107 },
    ],         
    12: [
      { id: 34, name: "PH", description: "Low PH suggests Acidosis, High PH suggests Alkalosis", RI_Lowest: 7.32, RI_Highest: 7.45 },
      { id: 35, name: "PCO2", description: "Respiratory related acid-base change", RI_Lowest: 25, RI_Highest: 29 },
      { id: 36, name: "HCO3", description: "Metabolic related acid-base change", RI_Lowest: 23, RI_Highest: 27 },
      { id: 37, name: "PO2", description: "O2 supply", RI_Lowest: 3.33, RI_Highest: 5.33 },      
      { id: 38, name: "SaO2", description: "O2 distribution", RI_Lowest: 92, RI_Highest: 98.5 },      
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
