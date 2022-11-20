// Simple function that accepts two parameters and calculates
// the number of hours worked within that range
function workingMinutesBetweenDates(startDate, endDate, dayStart=9, dayEnd=18, includeWeekends=false) 
{
    // Store minutes worked
    var minutesWorked = 0;

    // Validate input
    if (endDate < startDate) { return 0; }

    // Loop from your Start to End dates (by hour)
    var current = startDate;

    // Define work range
    var workHoursStart = dayStart;
    var workHoursEnd = dayEnd;

    // Loop while currentDate is less than end Date (by minutes)
    while(current <= endDate){      
        // Store the current time (with minutes adjusted)
        var currentTime = current.getHours() + (current.getMinutes() / 60);

        // Is the current time within a work day (and if it
        // occurs on a weekend or not)                   
        if(currentTime >= workHoursStart && currentTime < workHoursEnd && (includeWeekends ? current.getDay() !== 0 && current.getDay() !== 6 : true)){
              minutesWorked++;
        }

        // Increment current time
        current.setTime(current.getTime() + 1000 * 60);
    }
    return minutesWorked;
    return (minutesWorked / 60).toFixed(2);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function SecondsToDhm(seconds) 
{
  if(seconds<60)
     seconds=60
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600*24));
  var h = Math.floor(seconds % (3600*24) / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + 'd' : "";
  var hDisplay = h > 0 ? h + 'h' : "";
  var mDisplay = m > 0 ? m + 'm' : "";
  
  var str = '';
  var del ='';
  if(dDisplay != '')
  {
    str += dDisplay;
    del = ",";
  }
  if(hDisplay != '')
  {
    str += del+hDisplay;
    del = ",";
  }
  if(mDisplay != '')
  {
    str += del+mDisplay;
    del = ",";
  }
  return str;
}
function exit(error='')
{
  throw new Error( error);
}
function DiffInMin(first,second)
{
  return (second.getTime() - first.getTime())/(1000*60);
}
function CreateNewSheet(name)
{
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var yourNewSheet = activeSpreadsheet.getSheetByName(name);
  if (yourNewSheet == null) 
  {
    yourNewSheet = activeSpreadsheet.insertSheet();
    yourNewSheet.setName(name);
  }
}
function CopySheetData(src,dest)
{
  var source = SpreadsheetApp.getActiveSpreadsheet();
  var srcsheet = source.getSheetByName(src);
  var destsheet = source.getSheetByName(dest);

  if (destsheet != null) 
  {
    source.deleteSheet(destsheet);
  }
  srcsheet.copyTo(source).setName(dest);
}