// javascript
export const FIELD = {
  ID: "id",
  TEXT: "text"
};

// === Управление одной инструкцией ===

export function getEmptyInstruction() {
  return getInstruction();
}

export function getInstruction(text = "") {
  return {
    [FIELD.ID]: crypto.randomUUID(),
    [FIELD.TEXT]: text
  };
}

export function updateInstruction(instruction, newValue) {
  return { ...instruction, [FIELD.TEXT]: newValue };
}

// === Управление массивом инструкций ===

export function getDefaultInstructionsArray() {
  return [getEmptyInstruction()];
}

export function addInstruction(instructions, newInstruction) {
  return [...instructions, newInstruction];
}

export function removeInstruction(instructions, targetId) {
  return instructions.filter((instr) => instr[FIELD.ID] !== targetId);
}

export function updateInstructionInArray(instructions, targetId, newValue) {
  return instructions.map((instruction) =>
    instruction[FIELD.ID] === targetId
      ? updateInstruction(instruction, newValue)
      : instruction
  );
}