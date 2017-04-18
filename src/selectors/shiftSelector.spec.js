import * as shiftSelector from './shiftSelector';

describe('shiftSelector', () => {

  it('should create shift data', () => {

    const expectedShiftData = [{
      '2017-04-19': [{
        displayName: "Waiter's shift 1", duration: '55 hr', endDate: 1492801938658, endDateSimple: "2017-04-19", id: '58f532bfac71bb920c1b5131', "position": "58f532bf33f35676473e2f85", "positionColor": "#a61e4d", "positionName": "Waiter", "startDate": 1492601938658, "startDateSimple": "2017-04-19"
      }], "displayName": "Valerie Dejesus", "id": "58f532bf817816fe0f561340", "position": "58f532bf33f35676473e2f85", "positionColor": "#a61e4d", "positionName": "Waiter", "shifts": ["58f532bfac71bb920c1b5131"]
    }];

    const state = {
      shifts: {
        entities: {
          positions: {
            '58f532bf33f35676473e2f85': {
              displayName: 'Waiter',
              name: 'Waiter',
              color: '#a61e4d',
              id: '58f532bf33f35676473e2f85'
            }
          }, employees: {
            '58f532bf817816fe0f561340': {
              displayName: 'Valerie Dejesus',
              position: '58f532bf33f35676473e2f85',
              id: '58f532bf817816fe0f561340',
              shifts: ['58f532bfac71bb920c1b5131']
            },
          }, shifts: {
            '58f532bfac71bb920c1b5131': {
              displayName: 'Waiter\'s shift 1',
              position: '58f532bf33f35676473e2f85',
              endDateSimple: '2017-04-19',
              endDate: 1492801938658,
              startDateSimple: '2017-04-19',
              startDate: 1492601938658,
              id: '58f532bfac71bb920c1b5131'
            }
          }
        },
        employeeFilter: 'Val'
      }
    };

    const shiftData = shiftSelector.getShiftData(state);

    expect(expectedShiftData).toEqual(shiftData);
  })
});
