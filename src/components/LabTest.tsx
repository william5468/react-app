// src/LabTest.tsx
import React, { useState, useEffect } from "react";
import "./LabTest.css"; // Import the CSS file

interface Test {
  id: number;
  name: string;
  description: string;
  RI_Lowest: number;
  RI_Highest: number;
}

interface LabTestProps {
  title: string;
  tests: Test[];
  interpretationMap: (
    testData: {
      name: string;
      value: number;
      RI_Lowest: number;
      RI_Highest: number;
      category: string;
    }[]
  ) => string;
  categoryChanged: boolean;
  setActive: (value: boolean) => void;
}

const LabTest: React.FC<LabTestProps> = ({
  title,
  tests,
  interpretationMap,
  categoryChanged,
  setActive,
}) => {
  useEffect(() => {
    if (categoryChanged) {
      setValues(Array(tests.length).fill(0)); // Reset values when category changes
    }
  }, [categoryChanged, tests.length]);

  const [values, setValues] = useState<number[]>(Array(tests.length).fill(0));

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setActive(false);
      const newValue = parseFloat(e.target.value);
      const updatedValues = [...values];
      updatedValues[index] = isNaN(newValue) ? 0 : newValue;
      setValues(updatedValues);
    };

  // Create an array of test data for interpretation
  const testData = tests.map((test, index) => ({
    name: test.name,
    value: values[index],
    RI_Lowest: test.RI_Lowest,
    RI_Highest: test.RI_Highest,
    category: title, // Pass the category name
  }));

  return (
    <div className="lab-test-container">
      <h4>{title}</h4>
      {tests.map((test, index) => {
        const value = values[index];
        let inputStyle = {};
        if (value)
          if (value < test.RI_Lowest) {
            inputStyle = { backgroundColor: "blue", color: "white" }; // Blue for low
          } else if (value > test.RI_Highest) {
            inputStyle = { backgroundColor: "red", color: "white" }; // Red for high
          } else {
            inputStyle = { backgroundColor: "white", color: "black" }; // Default for normal
          }

        return (
          <div key={test.id} className="test-input">
            <span className="test-name">{test.name}</span>
            <div className="test-details">
              <span className="test-description">
                Description: {test.description}
              </span>
              <span className="test-interval">
                Reference interval: {test.RI_Lowest}~{test.RI_Highest}
              </span>
            </div>
            <input
              type="number"
              onChange={handleChange(index)} // Use index here
              placeholder=""
              style={inputStyle} // Apply dynamic styles
              className="test-input-field"
            />
          </div>
        );
      })}
      <div>
        <strong>Interpretation:</strong> {interpretationMap(testData)}
      </div>
    </div>
  );
};

export default LabTest;
