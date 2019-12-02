const getUsersDate = require('./jsonLogicTest');

describe('getUsersDate', () => {
  const indData = {
    individualAssignment: {
      dueDate: "2020-02-06T14:52:09.000Z"
    }
  };

  const date1 = { dueDate: "2020-02-06T14:52:09.000Z" };
  const date2 = { dueDate: "2020-02-01T14:52:09.000Z" };
  const date3 = { dueDate: "2019-09-01T14:52:09.000Z" };
  const date4 = { dueDate: "2020-01-01T14:52:09.000Z" };
  const genAudData = (a, b, c, d) => ({
    audienceAssignments: [a, b, c, d]
  });

  const earliest = date3.dueDate;
  it('should be a function', () => {
    expect(getUsersDate).toBeInstanceOf(Function);
  });

  describe('with no data', () => {
    it('should return the string "No dates"', () => {
      expect(getUsersDate()).toBe("No dates")
    });
  });

  describe('with only individual due date', () => {
    it('should return the individual due date', () => {
      expect(getUsersDate(indData)).toBe(indData.individualAssignment.dueDate)
    });
  });

  describe('with only audience due dates', () => {
    describe('in different orders', () => {
      it('should always return the earliest one', () => {
        expect(getUsersDate(genAudData(date1, date2, date3, date4))).toBe(earliest);
        expect(getUsersDate(genAudData(date4, date3, date2, date1))).toBe(earliest);
        expect(getUsersDate(genAudData(date3, date2, date4, date1))).toBe(earliest);
        expect(getUsersDate(genAudData(date2, date4, date1, date3))).toBe(earliest);
        expect(getUsersDate(genAudData(date3, date1, date4, date2))).toBe(earliest);
      });
    });
  });

  describe('with both types of asignment', () => {
    it('should return the earliest one', () => {
      const data = {
        ...indData,
        ...genAudData(date1, date2, date3, date4)
      };

      expect(getUsersDate(data)).toBe(indData.individualAssignment.dueDate);
    });
  });
});
