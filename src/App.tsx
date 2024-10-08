// src/App.tsx
import React, { useState, useRef } from "react";
import LabTest from "./components/LabTest";
import LabTestSelector from "./components/LabTestSelector";

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

const App = () => {
  const categoryChangedREF = useRef(false);
  const [StateVariable, SetStateVariable] = useState(false);
  const [isChildActive, setIsChildActive] = useState(false);
  const handleSetChildActive = (value: boolean) => {
    setIsChildActive(value);
  };
  const handleCategoryChange = (newCategory: number) => {
    setIsChildActive(true);
    setSelectedTestId(newCategory);
    console.log(isChildActive);
  };
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
  const ClearInterpretationMap = () => {
    return "";
  };

  // Example interpretation function
  const interpretationMap = (
    testData: {
      name: string;
      value: number;
      RI_Lowest: number;
      RI_Highest: number;
      category: string;
    }[]
  ) => {
    // Extracting specific tests
    // Extracting specific tests
    // Extracting specific tests
    // Extracting specific tests
    const tests = {
      ALB: testData.find((test) => test.name === "ALB"),
      PLT: testData.find((test) => test.name === "PLT"),
      FIB: testData.find((test) => test.name === "FIB"),
      CRP: testData.find((test) => test.name === "CRP"),
      IG: testData.find((test) => test.name === "IG"),
      LeftShift: testData.find((test) => test.name === "Left Shift"),
      WBC: testData.find((test) => test.name === "WBC"),
      Globulin: testData.find((test) => test.name === "Globulin"),
      CRE: testData.find((test) => test.name === "CRE"),
      URE: testData.find((test) => test.name === "URE"),
      CA: testData.find((test) => test.name === "CA"),
      P: testData.find((test) => test.name === "P"),
      ALT: testData.find((test) => test.name === "ALT"),
      AST: testData.find((test) => test.name === "AST"),
      GGT: testData.find((test) => test.name === "GGT"),
      ALP: testData.find((test) => test.name === "ALP"),
      TB: testData.find((test) => test.name === "TB"),
      FTP: testData.find((test) => test.name === "FTP"),
      HB: testData.find((test) => test.name === "HB"),
      CK: testData.find((test) => test.name === "CK"),
      URE_CRE: testData.find((test) => test.name === "URE/CRE"),
      LDH: testData.find((test) => test.name === "LDH"),
      AMY: testData.find((test) => test.name === "AMY"),
      HsTNI: testData.find((test) => test.name === "HsTNI"),
      MCV: testData.find((test) => test.name === "MCV"),
      PT: testData.find((test) => test.name === "PT"),
      APTT: testData.find((test) => test.name === "APTT"),
      D_dimer: testData.find((test) => test.name === "D-dimer"),
      NA: testData.find((test) => test.name === "NA"), // Added Na
      K: testData.find((test) => test.name === "K"), // Added K
      CL: testData.find((test) => test.name === "CL"), // Added Cl
      PH: testData.find((test) => test.name === "PH"), // Added pH
      PO2: testData.find((test) => test.name === "PO2"), // Added PO2
      PCO2: testData.find((test) => test.name === "PCO2"), // Added PCO2
      HCO3: testData.find((test) => test.name === "HCO3"), // Added HCO3
      SaO2: testData.find((test) => test.name === "SaO2"), // Added SaO2
    };

    const results = {
      CHO: 0,
      TG: 0,
      ALB: (tests.ALB?.value ?? 0) < (tests.ALB?.RI_Lowest ?? Infinity),
      PLT: (tests.PLT?.value ?? 0) < (tests.PLT?.RI_Lowest ?? Infinity),
      FIB: (tests.FIB?.value ?? 0) < (tests.FIB?.RI_Lowest ?? Infinity),
      CRP: (tests.CRP?.value ?? 0) > (tests.CRP?.RI_Highest ?? -Infinity),
      IG: (tests.IG?.value ?? 0) > (tests.IG?.RI_Highest ?? -Infinity),
      LeftShift:
        (tests.LeftShift?.value ?? 0) >
        (tests.LeftShift?.RI_Highest ?? -Infinity),
      WBC: (tests.WBC?.value ?? 0) < (tests.WBC?.RI_Lowest ?? Infinity),
      Globulin:
        (tests.Globulin?.value ?? 0) >
        (tests.Globulin?.RI_Highest ?? -Infinity),
      CRE: (tests.CRE?.value ?? 0) > (tests.CRE?.RI_Highest ?? -Infinity),
      URE: (tests.URE?.value ?? 0) > (tests.URE?.RI_Highest ?? -Infinity),
      URE_Low: (tests.URE?.value ?? 0) < (tests.URE?.RI_Lowest ?? Infinity),
      CA: (tests.CA?.value ?? 0) < (tests.CA?.RI_Lowest ?? Infinity),
      P: (tests.P?.value ?? 0) > (tests.P?.RI_Highest ?? -Infinity),
      ALT: (tests.ALT?.value ?? 0) > (tests.ALT?.RI_Highest ?? -Infinity),
      AST: (tests.AST?.value ?? 0) > (tests.AST?.RI_Highest ?? -Infinity),
      GGT: (tests.GGT?.value ?? 0) > (tests.GGT?.RI_Highest ?? -Infinity),
      ALP: (tests.ALP?.value ?? 0) > (tests.ALP?.RI_Highest ?? -Infinity),
      TB: (tests.TB?.value ?? 0) > (tests.TB?.RI_Highest ?? -Infinity),
      FTP: (tests.FTP?.value ?? 0) > (tests.FTP?.RI_Highest ?? -Infinity),
      HB: (tests.HB?.value ?? 0) < (tests.HB?.RI_Lowest ?? Infinity),
      CK: (tests.CK?.value ?? 0) > (tests.CK?.RI_Highest ?? -Infinity),
      URE_CRE:
        (tests.URE_CRE?.value ?? 0) > (tests.URE_CRE?.RI_Highest ?? -Infinity),
      LDH: (tests.LDH?.value ?? 0) > (tests.LDH?.RI_Highest ?? -Infinity),
      AMY: (tests.AMY?.value ?? 0) > (tests.AMY?.RI_Highest ?? -Infinity),
      HsTNI: (tests.HsTNI?.value ?? 0) > (tests.HsTNI?.RI_Highest ?? -Infinity),
      PT: (tests.PT?.value ?? 0) > (tests.PT?.RI_Highest ?? -Infinity),
      APTT: (tests.APTT?.value ?? 0) > (tests.APTT?.RI_Highest ?? -Infinity),
      D_dimer:
        (tests.D_dimer?.value ?? 0) > (tests.D_dimer?.RI_Highest ?? -Infinity),
      NA: tests.NA?.value ?? 0,
      K: tests.K?.value ?? 0,
      CL: tests.CL?.value ?? 0,
      pH: tests.PH?.value ?? 0,
      PO2: tests.PO2?.value ?? 0,
      PCO2: tests.PCO2?.value ?? 0,
      HCO3: tests.HCO3?.value ?? 0,
      SaO2: tests.SaO2?.value ?? 0,
    };

    let interpretation = "";
    let warnings = [];

    // Check for liver only if category is "Liver"
    if (testData.some((test) => test.category === "Liver")) {
      if (results.ALT && results.AST) {
        if ((tests.ALT?.value ?? 0) > (tests.AST?.value ?? 0)) {
          interpretation +=
            "Suspect mild liver damage, consider chronic hepatitis / NAFLD.";
        } else {
          interpretation +=
            "Suspect severe liver damage, consider acute hepatitis / ARLD.";
        }
      } else if (results.ALT && !results.AST) {
        interpretation += "Suspect slight liver damage.";
      } else if (results.AST && !results.ALT) {
        interpretation +=
          "Liver damage not likely, please consider Heart / Skeletal muscle / RBC / WBC origin to explain the increased AST.";
      }

      if (results.GGT) {
        interpretation +=
          " GGT high suggests Drugs / Alcohol / Biliary involvement.";
      }

      if (results.TB) {
        interpretation += " TB high suggests compromised liver metabolism,";
        const tbValue = tests.TB?.value ?? 0; // Default to 0 if undefined
        const albValue = tests.ALB?.value ?? 0; // Default to 0 if undefined

        const tbRatio = (tbValue / (tbValue + albValue)) * 100;
        if (tbRatio < 30) {
          interpretation += " if DB/TB <30% consider hemolysis.";
        } else if (tbRatio > 70) {
          interpretation += " if DB/TB >70% consider biliary obstruction.";
        }
      }

      if (results.ALB) {
        interpretation +=
          " ALB low suggests compromised liver synthesis, please rule out other causes of low ALB before interpretation.";
      }

      if (!results.ALT && !results.AST && results.ALB && results.TB) {
        interpretation = "Suspect cirrhosis.";
      }
    }

    // Check for biliary only if category is "Biliary"
    if (testData.some((test) => test.category === "Biliary")) {
      if (results.GGT && results.ALP) {
        interpretation += "Suspect Biliary involvement.";
      } else if (results.GGT && !results.ALP) {
        interpretation +=
          "Biliary involvement not likely, consider Alcohol / Drugs for increased GGT.";
      } else if (!results.GGT && results.ALP) {
        interpretation +=
          "Biliary involvement not likely, consider inflammation / bone / intestine / placenta as causes of increased ALP.";
      } else {
        interpretation += "Biliary involvement not likely.";
      }
    }

    // Check for sepsis only if category is "Sepsis"
    if (testData.some((test) => test.category === "Sepsis")) {
      const lowPLT = results.PLT;
      const lowFIB = results.FIB;
      const highCRP = results.CRP;

      const allFulfilled = lowPLT && lowFIB && highCRP;
      const anyFulfilled = lowPLT || lowFIB || highCRP;

      if (allFulfilled) {
        interpretation += "Highly suspect sepsis. ";
      } else if (anyFulfilled) {
        interpretation += "Suspect sepsis. ";
      } else {
        interpretation += "Sepsis not likely. ";
      }
      if (lowPLT) {
        interpretation +=
          "Low PLT can occur in various infections (including Malaria), Malignancy & followed Chemotherapy, and MAHA/Thal/HS.";
      }
    }

    // Check for kidney only if category is "Kidney"
    if (testData.some((test) => test.category === "Kidney")) {
      if (results.URE_Low) {
        interpretation += "Low URE, consider Cirrhosis / Malnutrition. ";
      }
      if (results.CRE) {
        interpretation +=
          "Suspect CKD/AKI, please correlate with patient's muscle mass & CK result.";
        if (results.URE) {
          interpretation +=
            " Supported by high URE, except in patient having GI bleeding / low EABV.";
        }
        if (results.CA) {
          interpretation += " Low CA suggests CKD.";
        }
        if (results.P) {
          interpretation += " High P suggests CKD.";
        }
      } else {
        interpretation += "No signs of CKD/AKI.";
      }
    }

    // Check for infection only if category is "Infection"
    if (testData.some((test) => test.category === "Infection")) {
      const allHigh = results.LeftShift && results.IG && results.CRP;
      const anyHigh = results.LeftShift || results.IG || results.CRP;

      if (allHigh) {
        interpretation +=
          "High chance of bacterial infection, please rule out viral infection first. ";
      } else if (anyHigh) {
        interpretation +=
          "Bacterial infection is possible, please rule out viral infection first. ";
      } else {
        interpretation += "Bacterial infection not likely. ";
      }

      if (allHigh || anyHigh) {
        // Check WBC only if all are low
        if (results.WBC) {
          if (results.LeftShift) {
            interpretation += "Severe infection, patient in critical stage. ";
          } else {
            interpretation += "Initial stage of infection. ";
          }
        } else if (results.LeftShift) {
          interpretation += "Active stage of infection. ";
        }
      }
    }

    // Check for prognosis
    if (testData.some((test) => test.category === "Prognosis")) {
      if (tests.ALB && tests.PLT) {
        if (results.ALB && results.PLT) {
          interpretation += "Really Bad prognosis. ";
        } else if (results.ALB || results.PLT) {
          interpretation += "Bad prognosis. ";
        }
      }
    }
    // Check for cell damage only if category is "Cell Damage"
    if (testData.some((test) => test.category === "Cell damage")) {
      const highLDH = results.LDH;
      const highCK = results.CK;
      const highHsTNI = results.HsTNI;

      if (highLDH && highCK && highHsTNI) {
        interpretation += "Suspect MI.";
      }
      if (highCK && highHsTNI && !highLDH) {
        interpretation +=
          "Low LDH is suspicious as it does not correlate with MI.";
      }
      if (highCK && !highHsTNI) {
        interpretation += "Suspect Skeletal muscle origin.";
      }
      if ((tests.CK?.value ?? 0) > 1000) {
        interpretation += " Sky high CK supports rhabdomyolysis.";
      }

      if (tests.CK && tests.CK.value / (tests.AST?.value || 1) > 10) {
        interpretation += " High CK/AST ratio supports Skeletal muscle origin.";
      }
      if (highLDH && !highCK && !results.AST) {
        interpretation +=
          "Consider causes other than Cardiac / Muscle for increased LDH.";
      }
      if (results.AMY) {
        interpretation += "Suspect pancreatitis.";
      }
    }

    // Evaluate malnutrition likelihood for Nutrition category
    if (testData.some((test) => test.category === "Nutrition")) {
      if (results.ALB || results.CHO || results.TG) {
        interpretation += "Suspect malnutrition. ";
        // Collect warnings about low ALB causes
        if (results.CRP || results.Globulin) {
          warnings.push("inflammation");
        }
        if (results.CRE || results.FTP) {
          warnings.push("nephrotic syndrome");
        }
        if (results.HB) {
          warnings.push("hemorrhage");
        }
        if (results.ALT || results.TB) {
          warnings.push("liver disease");
        }
        if (results.CK) {
          warnings.push("burn");
        }
        if (results.URE_CRE) {
          warnings.push("GI bleeding");
        }
      } else {
        interpretation += "Malnutrition not likely. ";
      }
    }

    // Combine warnings if any exist
    if (warnings.length > 0) {
      interpretation += `Please beware of low ALB caused by ${warnings.join(
        ", "
      )}. `;
    }
    // Anemia interpretation logic
    if (testData.some((test) => test.category === "Anemia")) {
      const refHBLowest = tests.HB?.RI_Lowest ?? Infinity;
      const refMCVLowest = tests.MCV?.RI_Lowest ?? Infinity;
      const refMCVHigh = tests.MCV?.RI_Highest ?? -Infinity;

      // Check for anemia
      if (tests.HB && tests.HB.value < refHBLowest) {
        interpretation += "The patient has anemia. ";

        if (tests.MCV && tests.MCV.value > refMCVHigh) {
          interpretation +=
            "Macrocytic anaemia, consider B12/Folate deficiency. ";
        } else if (tests.MCV && tests.MCV.value < refMCVLowest) {
          interpretation +=
            "Microcytic anaemia, consider Thalassemia/Chronic disease. ";
        } else {
          interpretation +=
            "Normocytic anaemia, consider Aplastic/Renal failure. ";
        }

        if (tests.URE_CRE && tests.URE_CRE.value > 20) {
          // Adjust threshold as needed
          interpretation +=
            "GI bleeding suspected, which can be a cause of anaemia.";
        } else {
          interpretation +=
            "GI bleeding not likely, consider hemorrhage from other sites as cause of anaemia.";
        }
      }
    }

    // Coagulation interpretation logic
    if (testData.some((test) => test.category === "Coagulation")) {
      const isPTHigh = results.PT;
      const isAPTTHigh = results.APTT;
      const isD_dimerHigh = results.D_dimer;
      const isFIBLow =
        (tests.FIB?.value ?? 0) < (tests.FIB?.RI_Lowest ?? Infinity);

      if (isPTHigh && isAPTTHigh) {
        if (isFIBLow && isD_dimerHigh) {
          interpretation += "DIC/Sepsis suspected. ";
        } else {
          interpretation +=
            "Factor deficiency due to Primary/Inhibitor/Liver disease/Vitamin K deficiency is suspected. ";
        }
      }
      if (isD_dimerHigh) {
        interpretation +=
          "Other than DIC, D-dimer high in SIRS, heart disease, after surgery, RA, and pregnancy, please correlate with clinical detail.";
      }
    }
    if (testData.some((test) => test.category === "Electrolyte")) {
      // Electrolyte interpretation logic
      const isNaHigh = results.NA > (tests.NA?.RI_Highest ?? Infinity);
      const isNaLow = results.NA < (tests.NA?.RI_Lowest ?? -Infinity);
      const isKHigh = results.K > (tests.K?.RI_Highest ?? Infinity);
      const isKLow = results.K < (tests.K?.RI_Lowest ?? -Infinity);
      const NaClDifference = results.NA - results.CL;

      if (isNaHigh) {
        interpretation +=
          "Hypernatremia, please check TP / GLU / phone ward for IV NACL, HB & POsm for dehydration, ADH for DI. ";
      } else if (isNaLow) {
        interpretation +=
          "Hyponatremia, please check TP / GLU / phone ward for Drip arm, TP / TG / CHO for Electrolyte exclusion effect, GLU for dilutional effect, UOsm for overhydration, clinical details of burn / vomit / diarrhea for hypovolemia, clinical details of Cirrhosis / CHF / Nephrotic syndrome / Hypothyroidism for high ADH caused by decreased EABV, ADH / UA for SIADH / HCTZ, and K / ALDO / Cortisol for Adrenal insufficiency. ";
      }

      if (isKHigh) {
        interpretation +=
          "Hyperkalemia, please check CRE for CKD, PH for Acidosis (DKA), CK for Burn / Rhabdomyolysis, UA / P for carcinoma, BTNS for Transfusion, ALDO / Cortisol for Adrenal insufficiency, clinical details of ACEI / ARB use for induced Adrenal insufficiency, TSH / FT4 for Hypothyroidism. ";
      }
      if (isKLow) {
        interpretation +=
          "Hypokalemia,please check PH for Alkalosis (Vomiting) / Acidosis (Diarrhoea, GI loss > Shifting effect), MG for ROMK induced HypoK, clinical details of Hypertension for Thiazide diuretics use, ALDO / Cortisol for Cushing, TSH / FT4 for Hyperthyroidism. ";
      }
      if (NaClDifference < 30) {
        interpretation += "Na-Cl < 30 suggests metabolic acidosis. ";
      } else if (NaClDifference > 40) {
        interpretation += "Na-Cl > 40 suggests metabolic alkalosis. ";
      }
    }
    if (testData.some((test) => test.category === "Blood gas")) {
      // Blood gas interpretation logic
      const isMetabolicAcidosis = results.pH < 7.4 && results.HCO3 < 24;
      const isRespiratoryAcidosis =
        results.pH < 7.4 && results.PCO2 >= 40 && !isMetabolicAcidosis;
      const isMetabolicAlkalosis = results.pH > 7.4 && results.HCO3 >= 24;
      const isRespiratoryAlkalosis =
        results.pH > 7.4 && results.PCO2 < 40 && !isMetabolicAlkalosis;

      if (isMetabolicAcidosis) {
        interpretation += "Metabolic acidosis (pH<7.4 & HCO3<24).";
      } else if (isRespiratoryAcidosis) {
        interpretation +=
          "Respiratory acidosis (pH<7.4 & PCO2>=40 & HCO3>=24)).";
      }
      if (isMetabolicAlkalosis) {
        interpretation += "Metabolic alkalosis (pH>7.4 & HCO3>=24).";
      } else if (isRespiratoryAlkalosis) {
        interpretation += "Respiratory alkalosis (pH>7.4 & PCO2<40 & HCO3<24).";
      }

      // Calculate anion gap
      const anionGap = results.NA - (results.CL + results.HCO3);
      if (anionGap >= 14) {
        interpretation += `HAGMA exist (${anionGap}>=14).`;
      }

      // Calculate corrected HCO3
      const correctedHCO3 = results.HCO3 + (anionGap - 12);
      if (correctedHCO3 > 26 && anionGap >= 14) {
        interpretation += `Metabolic Alkalosis also exists based on corrected HCO3 (${correctedHCO3.toFixed(2)} > 26)`;
      } else if (correctedHCO3 < 22 && anionGap >= 14) {
        interpretation += `Non-Gap Acidosis also exists based on corrected HCO3 (${correctedHCO3.toFixed(2)} < 22)`;
      } else if (anionGap >= 14) {
        interpretation += `Pure Gap Acidosis based on corrected HCO3 (22 < ${correctedHCO3.toFixed(2)} < 26)`;
      }


      // If metabolic alkalosis, calculate PCO2 range
      if (isMetabolicAlkalosis) {
        const lowestPCO2 = 40 + 0.5 * (results.HCO3 - 24);
        const highestPCO2 = 40 + 1 * (results.HCO3 - 24);
        if (results.PCO2 >= lowestPCO2 && results.PCO2 <= highestPCO2) {
          interpretation += `PCO2 ${results.PCO2} within ${lowestPCO2.toFixed(
            2
          )} ~ ${highestPCO2.toFixed(
            2
          )}, PCO2 change can be explained by compensation. `;
        } else {
          if (results.PCO2 < lowestPCO2) {
            interpretation += `PCO2 ${
              results.PCO2
            } not within ${lowestPCO2.toFixed(2)} ~ ${highestPCO2.toFixed(
              2
            )}, suggest coexistence of respiratory alkalosis. `;
          } else {
            interpretation += `PCO2 ${
              results.PCO2
            } not within ${lowestPCO2.toFixed(2)} ~ ${highestPCO2.toFixed(
              2
            )}, suggest coexistence of respiratory acidosis. `;
          }
        }
      }
      // If metabolic acidosis, calculate PCO2 range
      if (isMetabolicAcidosis) {
        const highestPCO2 = 40 - 1 * (24 - results.HCO3);
        const lowestPCO2 = 40 - 1.3 * (24 - results.HCO3);
        if (results.PCO2 >= lowestPCO2 && results.PCO2 <= highestPCO2) {
          interpretation += `PCO2 ${results.PCO2} within ${lowestPCO2.toFixed(
            2
          )} ~ ${highestPCO2.toFixed(
            2
          )}, PCO2 change can be explained by compensation. `;
        } else {
          if (results.PCO2 < lowestPCO2) {
            interpretation += `PCO2 ${
              results.PCO2
            } not within ${lowestPCO2.toFixed(2)} ~ ${highestPCO2.toFixed(
              2
            )}, suggest coexistence of respiratory alkalosis. `;
          } else {
            interpretation += `PCO2 ${
              results.PCO2
            } not within ${lowestPCO2.toFixed(2)} ~ ${highestPCO2.toFixed(
              2
            )}, suggest insufficient compensation. `;
          }
        }
      }

      // If respiratory acidosis, calculate HCO3 range
      if (isRespiratoryAcidosis) {
        const lowestHCO3 = 24 + 0.1 * (results.PCO2 - 40);
        const highestHCO3 = 24 + 0.35 * (results.PCO2 - 40);
        if (results.HCO3 >= lowestHCO3 && results.HCO3 <= highestHCO3) {
          interpretation += `HCO3 ${results.HCO3} within ${lowestHCO3.toFixed(
            2
          )} ~ ${highestHCO3.toFixed(
            2
          )}, HCO3 change can be explained by compensation for Chronic Respiratory Acidosis, suggest coexistence of metabolic alkalosis in Acute Respiratory Acidosis. `;
        } else {
          if (results.HCO3 < lowestHCO3) {
            interpretation += `HCO3 ${
              results.HCO3
            } not within ${lowestHCO3.toFixed(2)} ~ ${highestHCO3.toFixed(
              2
            )}, lower than expected HCO3 suggest insufficient compensation for Respiratory Acidosis `;
          } else {
            interpretation += `HCO3 ${
              results.HCO3
            } not within ${lowestHCO3.toFixed(2)} ~ ${highestHCO3.toFixed(
              2
            )}, suggest coexistence of metabolic alkalosis.`;
          }
        }
      }

      // If respiratory alkalosis, calculate HCO3 range
      if (isRespiratoryAlkalosis) {
        const highestHCO3 = 24 - 0.2 * (40 - results.PCO2);
        const lowestHCO3 = 24 - 0.5 * (40 - results.PCO2);
        if (results.HCO3 >= lowestHCO3 && results.HCO3 <= highestHCO3) {
          interpretation += `HCO3 ${results.HCO3} within ${lowestHCO3.toFixed(
            2
          )} ~ ${highestHCO3.toFixed(
            2
          )}, HCO3 change can be explained by compensation for Chronic Respiratory Alkalosis, suggest coexistence of metabolic acidosis in Acute Respiratory Alkalosis. `;
        } else {
          if (results.HCO3 < lowestHCO3) {
            interpretation += `HCO3 ${
              results.HCO3
            } not within ${lowestHCO3.toFixed(2)} ~ ${highestHCO3.toFixed(
              2
            )}, lower than expected HCO3 suggest coexistence of metabolic acidosis.`;
          } else {
            interpretation += `HCO3 ${
              results.HCO3
            } not within ${lowestHCO3.toFixed(2)} ~ ${highestHCO3.toFixed(
              2
            )}, higher than expected HCO3 suggest insufficient compensation for Respiratory Alkalosis`;
          }
        }
      }
      
    }
    return interpretation.trim();
  };
  // Define tests data with the correct type
  const testsData: TestsData = {
    1: [
      {
        id: 1,
        name: "ALB",
        description: "Low ALB suggests Malnutrition",
        RI_Lowest: 35,
        RI_Highest: 52,
      },
      {
        id: 2,
        name: "CHO",
        description: "Low CHO suggests Malnutrition",
        RI_Lowest: 0,
        RI_Highest: 5,
      },
      {
        id: 3,
        name: "TG",
        description: "Low TG suggests Malnutrition",
        RI_Lowest: 0,
        RI_Highest: 2,
      },
      {
        id: 4,
        name: "CRP",
        description: "ALB low in inflammation",
        RI_Lowest: 0,
        RI_Highest: 5,
      },
      {
        id: 5,
        name: "Globulin",
        description: "ALB low in inflammation",
        RI_Lowest: 25,
        RI_Highest: 39,
      },
      {
        id: 6,
        name: "CRE",
        description: "ALB low in nephrotic syndrome",
        RI_Lowest: 65,
        RI_Highest: 109,
      },
      {
        id: 7,
        name: "HB",
        description: "ALB low after hemorrhage",
        RI_Lowest: 13.4,
        RI_Highest: 17.1,
      },
      {
        id: 8,
        name: "ALT",
        description: "ALB low in liver disease",
        RI_Lowest: 0,
        RI_Highest: 53,
      },
      {
        id: 9,
        name: "TB",
        description: "ALB low in liver disease",
        RI_Lowest: 0,
        RI_Highest: 19,
      },
      {
        id: 10,
        name: "CK",
        description: "Low ALB after burn",
        RI_Lowest: 39,
        RI_Highest: 308,
      },
      {
        id: 11,
        name: "FTP",
        description: "ALB low in nephrotic syndrome",
        RI_Lowest: 34,
        RI_Highest: 54,
      },
      {
        id: 12,
        name: "URE/CRE",
        description: "Low ALB after GI bleeding",
        RI_Lowest: 8,
        RI_Highest: 140,
      },
    ],
    2: [
      {
        id: 1,
        name: "ALB",
        description: "Low ALB suggests bad prognosis",
        RI_Lowest: 35,
        RI_Highest: 52,
      },
      {
        id: 13,
        name: "PLT",
        description: "Low ALB suggests bad prognosis",
        RI_Lowest: 145,
        RI_Highest: 370,
      },
    ],
    3: [
      {
        id: 14,
        name: "WBC",
        description: "WBC = production - comsumption, low in serious infection",
        RI_Lowest: 3.7,
        RI_Highest: 9.2,
      },
      {
        id: 15,
        name: "Left Shift",
        description: "Left Shift indicate marrow response to infection",
        RI_Lowest: 0,
        RI_Highest: 0,
      },
      {
        id: 16,
        name: "IG",
        description: "IG indicate substantial marrow response to infection",
        RI_Lowest: 0,
        RI_Highest: 0,
      },
      {
        id: 4,
        name: "CRP",
        description: "inflammation in infection",
        RI_Lowest: 0,
        RI_Highest: 5,
      },
    ],
    4: [
      {
        id: 13,
        name: "PLT",
        description: "sepsis, leukaemia, DIC, MAHA",
        RI_Lowest: 145,
        RI_Highest: 370,
      },
      {
        id: 17,
        name: "FIB",
        description: "sepsis, inflammation, liver",
        RI_Lowest: 2,
        RI_Highest: 4,
      },
      {
        id: 4,
        name: "CRP",
        description: "inflammation",
        RI_Lowest: 0,
        RI_Highest: 5,
      },
    ],
    5: [
      {
        id: 6,
        name: "CRE",
        description: "CKD, skeletal muscle",
        RI_Lowest: 65,
        RI_Highest: 109,
      },
      {
        id: 18,
        name: "URE",
        description: "CKD, nutrition",
        RI_Lowest: 3.1,
        RI_Highest: 7.8,
      },
      {
        id: 19,
        name: "CA",
        description: "CKD, vitamin D, Calcitonin",
        RI_Lowest: 2.15,
        RI_Highest: 2.55,
      },
      {
        id: 20,
        name: "P",
        description: "CKD, vitamin D, Calcitonin",
        RI_Lowest: 0.72,
        RI_Highest: 1.39,
      },
    ],
    6: [
      {
        id: 21,
        name: "ALT",
        description: "Liver",
        RI_Lowest: 0,
        RI_Highest: 53,
      },
      {
        id: 22,
        name: "AST",
        description: "ACET, Alcohol, acute liver damage",
        RI_Lowest: 0,
        RI_Highest: 32,
      },
      {
        id: 23,
        name: "GGT",
        description: "Biliary tract, Drugs, Alcohol, liver",
        RI_Lowest: 0,
        RI_Highest: 45,
      },
      {
        id: 9,
        name: "TB",
        description: "Biliary obstruction, Hemolysis, Liver",
        RI_Lowest: 0,
        RI_Highest: 19,
      },
      {
        id: 1,
        name: "ALB",
        description: "Low ALB suggests Malnutrition",
        RI_Lowest: 35,
        RI_Highest: 52,
      },
    ],
    7: [
      {
        id: 23,
        name: "GGT",
        description: "Biliary tract, Drugs, Alcohol, liver",
        RI_Lowest: 0,
        RI_Highest: 45,
      },
      {
        id: 24,
        name: "ALP",
        description: "Biliary tract, bone, intestine, placenta, APR",
        RI_Lowest: 43,
        RI_Highest: 105,
      },
    ],
    8: [
      {
        id: 25,
        name: "LDH",
        description: "Liver, Cardiac, Muscle, Hemolysis, Lung, Carcinoma",
        RI_Lowest: 106,
        RI_Highest: 218,
      },
      {
        id: 10,
        name: "CK",
        description: "Cardiac, Skeletal muscle",
        RI_Lowest: 39,
        RI_Highest: 308,
      },
      {
        id: 39,
        name: "AMY",
        description: "Pancreatitis",
        RI_Lowest: 33,
        RI_Highest: 120,
      },
      {
        id: 26,
        name: "HsTNI",
        description: "MI",
        RI_Lowest: 0,
        RI_Highest: 19.8,
      },
      {
        id: 22,
        name: "AST",
        description: "ACET, Alcohol, acute liver damage",
        RI_Lowest: 0,
        RI_Highest: 32,
      },
    ],
    9: [
      {
        id: 7,
        name: "HB",
        description: "Hemorrhage, Hemolysis, Marrow insufficiency",
        RI_Lowest: 13.4,
        RI_Highest: 17.1,
      },
      {
        id: 27,
        name: "MCV",
        description: "Iron, Folate/B12 deficiency, chronic inflammation, liver",
        RI_Lowest: 82,
        RI_Highest: 97,
      },
      {
        id: 12,
        name: "URE/CRE",
        description: "GI bleeding",
        RI_Lowest: 8,
        RI_Highest: 140,
      },
    ],
    10: [
      {
        id: 28,
        name: "PT",
        description: "liver, DIC, factor inhibitor / deficiency",
        RI_Lowest: 10,
        RI_Highest: 12.3,
      },
      {
        id: 29,
        name: "APTT",
        description: "liver, DIC, factor inhibitor / deficiency",
        RI_Lowest: 28.2,
        RI_Highest: 38.2,
      },
      {
        id: 17,
        name: "FIB",
        description: "liver, sepsis",
        RI_Lowest: 2,
        RI_Highest: 4,
      },
      {
        id: 30,
        name: "D-dimer",
        description: "DIC",
        RI_Lowest: 0,
        RI_Highest: 300,
      },
    ],
    11: [
      {
        id: 31,
        name: "NA",
        description:
          "Hydration, ADH, cortisol, FT4, displacement, dilution, liver, kidney",
        RI_Lowest: 137,
        RI_Highest: 144,
      },
      {
        id: 32,
        name: "K",
        description: "CKD, PH, CK, HB, TLS, FT4",
        RI_Lowest: 3.5,
        RI_Highest: 4.5,
      },
      {
        id: 33,
        name: "CL",
        description: "Anion gap calculation, CL wasting metabolic alkalosis",
        RI_Lowest: 98,
        RI_Highest: 107,
      },
    ],
    12: [
      {
        id: 34,
        name: "PH",
        description: "Low PH suggests Acidosis, High PH suggests Alkalosis",
        RI_Lowest: 7.32,
        RI_Highest: 7.45,
      },
      {
        id: 35,
        name: "PCO2",
        description: "Respiratory related acid-base change",
        RI_Lowest: 35,
        RI_Highest: 45,
      },
      {
        id: 36,
        name: "HCO3",
        description: "Metabolic related acid-base change",
        RI_Lowest: 23,
        RI_Highest: 27,
      },
      {
        id: 31,
        name: "NA",
        description:
          "Hydration, ADH, cortisol, FT4, displacement, dilution, liver, kidney",
        RI_Lowest: 137,
        RI_Highest: 144,
      },
      {
        id: 33,
        name: "CL",
        description: "Anion gap calculation, CL wasting metabolic alkalosis",
        RI_Lowest: 98,
        RI_Highest: 107,
      },

      {
        id: 37,
        name: "PO2",
        description: "O2 supply",
        RI_Lowest: 3.33,
        RI_Highest: 5.33,
      },
      {
        id: 38,
        name: "SaO2",
        description: "O2 distribution",
        RI_Lowest: 92,
        RI_Highest: 98.5,
      },
    ],
  };

  const [selectedTestId, setSelectedTestId] = useState<number>(1); // Default to first test

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <LabTestSelector
        labTests={labTests}
        selectedTestId={selectedTestId} // Pass the selectedTestId
        setSelectedTestId={setSelectedTestId} // Pass the setter function
        handleCategoryChange={handleCategoryChange}
      />
      {/* Main Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Lab Result Analyzer</h1>
        <LabTest
          title={
            labTests.find((test) => test.id === selectedTestId)?.name || ""
          }
          tests={testsData[selectedTestId]} // Now TypeScript recognizes this
          interpretationMap={
            isChildActive ? ClearInterpretationMap : interpretationMap
          }
          categoryChanged={isChildActive}
          setActive={handleSetChildActive}
        />
      </div>
    </div>
  );
};

export default App;
