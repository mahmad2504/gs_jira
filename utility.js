function Configuration() 
{
  this.Load = function(settings_sheet_name='Settings')
  {
    var userProperties = PropertiesService.getUserProperties();
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(settings_sheet_name);  
    values = sheet.getRange(1,2,5,1).getValues();
    
    if(
      (String(values[0]).trim()=='') || 
      (String(values[1]).trim()=='') || 
      (String(values[2]).trim()=='') || 
      (String(values[3]).trim()=='') ||
      (String(values[4]).trim()=='')
      )
    {
      throw new Error( "Invalid Configuration" );
    }
    userProperties.setProperty('URL',String(values[0]));
    userProperties.setProperty('TOKEN',String(Utilities.base64Encode(values[1]+":"+values[2])));
    userProperties.setProperty('BOARD',String(values[3]));
    userProperties.setProperty('SPRINT',String(values[4]));
  }
}
function LoadConfig(sheetname)
{
  var conf = new Configuration();
  conf.Load(sheetname);
}
function GetConfig(param)
{
  var userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty(param);
}

