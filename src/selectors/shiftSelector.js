import { createSelector } from 'reselect';

import * as arrayUtil from '../utils/arrayUtil';
import * as stringUtil from '../utils/stringUtil';
import * as dateUtil from '../utils/dateUtil';

const getEmployeeFilter = (state) => state.shifts.employeeFilter;
const getEmployees = (state) => state.shifts.entities.employees;
const getShifts = (state) => state.shifts.entities.shifts;
const getPositions = (state) => state.shifts.entities.positions;

//creates data suitable for display in ShiftGrid
export const getShiftData = createSelector(
  [getEmployeeFilter, getEmployees, getShifts, getPositions],
  (employeeFilter, employees, shifts, positions) => {
    const shiftData = [];

    //array of employees for easier traversal
    const employeesArray = employees ?
      Object.keys(employees).map(key => employees[key]) :
      [];

    const visibleEmployees = employeesArray.filter(data => stringUtil.includes(data.displayName, employeeFilter));

    const sortedVisibleEmployees = visibleEmployees.sort(compareEmployeesByDisplayName);

    //get shifts for each employee
    sortedVisibleEmployees.map(employee => {
      const employeesShifts = [];

      employee.shifts.map(shiftId => {
        const shift = shifts[shiftId];

        const employeesShift = {
          ...shift,
          positionName: positions[shift.position].displayName,
          positionColor: positions[shift.position].color,
          duration: dateUtil.getDateDifferenceInHours(shift.endDate, shift.startDate) + " hr"
        };

        employeesShifts.push(employeesShift);
      });

      const shiftsGroupedByDayOfTheWeek = arrayUtil.groupArrayDataByProperty(employeesShifts, 'startDateSimple');

      shiftData.push({
        ...employee,
        ...shiftsGroupedByDayOfTheWeek,
        positionName: positions[employee.position].displayName,
        positionColor: positions[employee.position].color,
      });
    });
    // console.log(shiftData);
    return shiftData;
  }
);

const compareEmployeesByDisplayName = (employeeA, employeeB) => {
  return employeeA.displayName.localeCompare(employeeB.displayName);
};
