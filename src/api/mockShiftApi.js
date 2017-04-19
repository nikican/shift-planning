import moment from 'moment';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const shifts = [
  {
    "displayName": "Waiters' shift 1",
    "name": "Waiters' shift 1",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      },
      {
        "displayName": "Regina Marsh",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Marsh",
        "firstName": "Regina",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bfe3ed008e18ef2bb4"
      }
    ],
    "position": {
      "displayName": "Waiter",
      "name": "Waiter",
      "color": "#a61e4d",
      "id": "58f532bf33f35676473e2f85"
    },
    "endDateSimple": "2017-04-19",
    "endDate": 1492801938658,
    "startDateSimple": "2017-04-19",
    "startDate": 1492601938658,
    "id": "58f532bfac71bb920c1b5131"
  }, {
    "displayName": "Manager's shift",
    "name": "Manager's shift",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Manager",
          "name": "Manager",
          "color": "#6495ED",
          "id": "58f69a7269e3c60f6f4d1efd"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      }
    ],
    "position": {
      "displayName": "Manager",
      "name": "Manager",
      "color": "#6495ED",
      "id": "58f69a7269e3c60f6f4d1efd"
    },
    "endDateSimple": "2017-04-19",
    "endDate": 1492801938658,
    "startDateSimple": "2017-04-19",
    "startDate": 1492601938658,
    "id": "58f532bfe3ed008e18ef2bb4"
  },
  {
    "endDateSimple": "2017-04-17",
    "endDate": 1492551622911,
    "startDateSimple": "2017-04-17",
    "startDate": 1492399431014,
    "name": "Waiter's shift 2",
    "displayName": "Waiter's shift 2",
    "id": "58f5338bc9ca80bbffc12706",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      },
      {
        "displayName": "Regina Marsh",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Marsh",
        "firstName": "Regina",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bfe3ed008e18ef2bb4"
      }
    ],
    "position": {
      "displayName": "Waiter",
      "name": "Waiter",
      "color": "#a61e4d",
      "id": "58f532bf33f35676473e2f85"
    }
  },
  {
    "displayName": "Waiter's shift 3",
    "name": "Waiter's shift 3",
    "endDateSimple": "2017-04-20",
    "endDate": 1492685256020,
    "startDateSimple": "2017-04-20",
    "startDate": 1492675256020,
    "id": "58f5344ea5c1f0e4bb114192",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      }
    ],
    "position": {
      "displayName": "Waiter",
      "name": "Waiter",
      "color": "#a61e4d",
      "id": "58f532bf33f35676473e2f85"
    }
  },
  {
    "displayName": "Waiter's shift 4",
    "name": "Waiter's shift 4",
    "endDateSimple": "2017-04-13",
    "endDate": 1492067388799,
    "startDateSimple": "2017-04-13",
    "startDate": 1492056388799,
    "id": "58f53d3b2a67c97a49cca180",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      }
    ],
    "position": {
      "displayName": "Waiter",
      "name": "Waiter",
      "color": "#a61e4d",
      "id": "58f532bf33f35676473e2f85"
    }
  },
  {
    "displayName": "Waiter's shift 5",
    "name": "Waiter's shift 5",
    "endDateSimple": "2017-04-25",
    "endDate": 1493339962970,
    "startDateSimple": "2017-04-25",
    "startDate": 1493126563631,
    "id": "58f53dcb3f659514555333e4",
    "employees": [
      {
        "displayName": "Valerie Dejesus",
        "position": {
          "displayName": "Waiter",
          "name": "Waiter",
          "color": "#a61e4d",
          "id": "58f532bf33f35676473e2f85"
        },
        "lastName": "Dejesus",
        "firstName": "Valerie",
        "avatar": "http://placehold.it/32x32",
        "id": "58f532bf817816fe0f561340"
      }
    ],
    "position": {
      "displayName": "Waiter",
      "name": "Waiter",
      "color": "#a61e4d",
      "id": "58f532bf33f35676473e2f85"
    }
  }
];


const delay = 1000;

class ShiftApi {
  static fetchShifts(date) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const startOfWeek = moment(date).startOf('week');
        const endOfWeek = moment(date).endOf('week');

        const shiftJSON = {
          shifts: shifts.filter((shift) => {
            const shiftStart = moment(shift.startDate);

            return shiftStart.isBetween(startOfWeek, endOfWeek);
          })
        };

        resolve(Object.assign({}, shiftJSON));
      }, delay);
    });
  }
}

export default ShiftApi;
