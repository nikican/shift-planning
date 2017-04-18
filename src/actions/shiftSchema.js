import { schema } from 'normalizr';

//employee will get array of shift ids to which he belongs
const employeeProcessStrategy = (value, parent) => ({
  ...value, shifts: [parent.id]
});

const employeeMergeStrategy = (entityA, entityB) => ({
  ...entityA,
  ...entityB,
  shifts: [...(entityA.shifts || []), ...(entityB.shifts || [])]
});

export const position = new schema.Entity('positions', {});

export const employee = new schema.Entity('employees', {
  position: position
}, {
    mergeStrategy: employeeMergeStrategy,
    processStrategy: employeeProcessStrategy
  }
);

export const shift = new schema.Entity('shifts', {
  position: position,
  employees: [employee]
});
