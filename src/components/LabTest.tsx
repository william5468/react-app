// src/LabTest.tsx
import React, { useState } from "react";
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
  interpretationMap: (values: number[]) => string;
}

const LabTest: React.FC<LabTestProps> = ({
  title,
  tests,
  interpretationMap,
}) => {
  const [values, setValues] = useState<number[]>(Array(tests.length).fill(0));

  const handleChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = parseFloat(e.target.value);
      const updatedValues = [...values];
      updatedValues[index] = isNaN(newValue) ? 0 : newValue;
      setValues(updatedValues);
    };

  return (
    <div className="lab-test-container">
      <h4>{title}</h4>
      {tests.map((test) => (
        <div key={test.id} className="test-input">
          <span>{test.name}</span>{test.description}{test.RI_Lowest}~{test.RI_Highest}
          <input
            type="number"
            onChange={handleChange(test.id)}
            placeholder="Enter result"
          />
        </div>
      ))}
      <div>
        <strong>Interpretation:</strong> {interpretationMap(values)}
      </div>
    </div>
  );
};

export default LabTest;
