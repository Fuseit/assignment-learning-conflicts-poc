const getUsersDate = require('./jsonLogicTest');

const data = {
  individualAssignment: {
    dueDate: "2020-02-06T14:52:09.000Z"
  },
  audienceAssignments: [
    {
      dueDate: "2020-02-06T14:52:09.000Z"
    },
    {
      dueDate: "2020-02-01T14:52:09.000Z"
    },
    {
      dueDate: "2019-09-01T14:52:09.000Z"
    },
    {
      dueDate: "2020-01-01T14:52:09.000Z"
    }
  ]
};

const result = getUsersDate(data);
console.log(result);