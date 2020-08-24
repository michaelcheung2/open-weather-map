const {ConvertWindDirectionToText, ConvertUnixTimestampToTime, ConvertUnixTimestampToDate} = require('./util');

// Unit test the function that is being used to convert wind direction to text
describe("ConvertWindDirectionToText", () => {
    it("should be NNW", () => {
        expect(ConvertWindDirectionToText(330)).toEqual('NNW');
    });
});

// Unit test the function that is being used to format a sunrise/sunset time
describe("ConvertUnixTimestampToTime", () => {
    it("should be 6:16:51", () => {
        expect(ConvertUnixTimestampToTime('1598188611')).toEqual('6:16:51');
    });
});

// Unit test the function that is being used to format a forecasted date
describe("ConvertUnixTimestampToDate", () => {
    it("should be Sun Aug 23 2020", () => {
        expect(ConvertUnixTimestampToDate(1598212800)).toEqual('Sun Aug 23 2020');
    });
});