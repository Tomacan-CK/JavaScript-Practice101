// FULL CORRECT CODE

// Stage 1: Defensive Parsing and Parameter Guarding
function parsePipelineInputs(rawStart, rawEnd, rawStep) {
  // Coerce inputs to numbers
  let start = Number(rawStart);
  let end = Number(rawEnd);
  let step = rawStep === undefined ? (start <= end ? 1 : -1) : Number(rawStep);

  // Validate that all coerced values are valid numeric primitives and whole integers
  if (
    typeof start !== "number" || Number.isNaN(start) || !Number.isInteger(start) ||
    typeof end !== "number" || Number.isNaN(end) || !Number.isInteger(end) ||
    typeof step !== "number" || Number.isNaN(step) || !Number.isInteger(step)
  ) {
    throw new TypeError("Parsing Error: All inputs (start, end, step) must be valid integers.");
  }

  return { start, end, step };
}

// Stage 2: Strict Range Building with Infinite Loop Prevention
function throwRange(start, end, step) {
  if (step === 0) {
    throw new Error("Step cannot be zero as it causes an infinite loop.");
  }
  if (start < end && step < 0) {
    throw new Error(`Impossible direction: start (${start}) < end (${end}) but step is negative (${step}).`);
  }
  if (start > end && step > 0) {
    throw new Error(`Impossible direction: start (${start}) > end (${end}) but step is positive (${step}).`);
  }

  let result = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  return result;
}

// Stage 3: Strict Summing Guard
function throwSum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Summing Error: Provided argument is not an array.");
  }

  let total = 0;
  for (let number of numbers) {
    if (typeof number !== "number" || Number.isNaN(number)) {
      throw new Error(`Summing Error: Found invalid element '${number}' in array state.`);
    }
    total += number;
  }
  return total;
}

// Problem 18: Defensive Range-Sum Pipeline Coordinator
function defensivePipeline(rawStart, rawEnd, rawStep) {
  let parsedParams = null;
  let generatedRange = null;

  // Pipeline Stage 1: Parsing
  try {
    parsedParams = parsePipelineInputs(rawStart, rawEnd, rawStep);
  } catch (error) {
    console.error("Pipeline Aborted at Stage 1 [Parsing]:", error.message);
    return { success: false, stage: "parsing", error: error.message, result: null };
  }

  // Pipeline Stage 2: Range Building
  try {
    let { start, end, step } = parsedParams;
    generatedRange = throwRange(start, end, step);
  } catch (error) {
    console.error("Pipeline Aborted at Stage 2 [Range Building]:", error.message);
    console.error("Failed Range Step Details:", {
      start: parsedParams.start,
      end: parsedParams.end,
      step: parsedParams.step
    });
    return { success: false, stage: "range", error: error.message, result: null };
  }

  // Pipeline Stage 3: Summing
  try {
    let totalSum = throwSum(generatedRange);
    return { success: true, stage: "complete", error: null, result: totalSum };
  } catch (error) {
    console.error("Pipeline Aborted at Stage 3 [Summing]:", error.message);
    console.error("Corrupted Array State at Failure:", generatedRange);
    return { success: false, stage: "summing", error: error.message, result: null };
  }
}

// --- Test Cases ---

// 1. Successful Pipeline Execution
console.log(defensivePipeline(1, 10, 2));
// Output: { success: true, stage: "complete", error: null, result: 25 }

// 2. Stage 1 Failure (Bad Raw Input)
console.log(defensivePipeline("abc", 10, 1));
// Output:
// Pipeline Aborted at Stage 1 [Parsing]: Parsing Error: All inputs (start, end, step) must be valid integers.
// → { success: false, stage: "parsing", error: "...", result: null }

// 3. Stage 2 Failure (Impossible Range Step)
console.log(defensivePipeline(1, 10, -1));
// Output:
// Pipeline Aborted at Stage 2 [Range Building]: Impossible direction: start (1) < end (10) but step is negative (-1).
// Failed Range Step Details: { start: 1, end: 10, step: -1 }
// → { success: false, stage: "range", error: "...", result: null }