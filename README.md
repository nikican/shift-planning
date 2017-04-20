
1. **Run the install**. `npm install`
2. **Run the app in development mode**. `npm start -s`
3. **Run the app in production mode**. `npm run build`

Server APIs rarely serve data which is automatically fit for view layer of the app.
Taking that into account I've created [mock data](/src/api/mockShiftApi.js) using guideline about relations among 3 given entities and
I've subsequently normalized it for easier manipulation. Normalization also enables us to potentialy have different visual represenataions of the data without API calls.

Since task does not require any kind of manipulation of displayed data, showing empty grid when there are no shifts fetched is not a problem.
If use case appears, additional request could be made to server to get all employees, so that grid is populated even when there are no shifts.
At this point that would be premature optimization, but possibility has been considered.


**2017-04-20 - NOTE**
As it happens, once you step away from the code you get new insights on how to improve it.

I don't expect you to accept these changes as valid, so you can just revert to earlier version,
