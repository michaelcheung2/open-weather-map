// Helper function to convert wind direction to text
function ConvertWindDirectionToText(dir) {
    let val = Math.round( (dir/22.5) + .5);
    let arr = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"]
    return arr[(val % 16)]
}

// Helper function to convert unix timestsamp to time
function ConvertUnixTimestampToTime(dt) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(dt * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Return the formatted time in 10:30:23 format
    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2); 
}

// Helper function to convert unix timestamp to date
function ConvertUnixTimestampToDate(dt) {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    var date = new Date(+dt * 1000);
    return date.toDateString();
}

module.exports = {ConvertWindDirectionToText, ConvertUnixTimestampToTime, ConvertUnixTimestampToDate};