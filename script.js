//Array for storing the history of color used
var historyOfColor = [];
var favouriteColor = [];

//For red RGB slider
var redval = document.getElementById("red").value;
var onRedChng = function(){
  redval = document.getElementById("red").value;
  document.getElementById("redValue").value = redval;
  byrgbSlider();
  getHexValue();
}
document.getElementById("red").addEventListener('change', onRedChng);

//For green RGB slider
var greenval = document.getElementById("green").value;
var onGreenChng = function(){
  greenval = document.getElementById("green").value;
  document.getElementById("greenValue").value = greenval;
  byrgbSlider();
  getHexValue();
}
document.getElementById("green").addEventListener('change', onGreenChng);

//For blue RGB slider
var blueval = document.getElementById("blue").value;
var onBlueChng = function(){
  blueval = document.getElementById("blue").value;
  document.getElementById("blueValue").value = blueval;
  byrgbSlider();
  getHexValue();
}

document.getElementById("blue").addEventListener('change', onBlueChng);

//function to change color of current color div by rgb slider
var byrgbSlider = function(){
  var ccobj = document.getElementById("dynacolor");
  var redst = new String(redval);
  var greenst = new String (greenval);
  var bluest = new String(blueval);
  var rgbArgu = new String ('rgb(' + redst + ','+greenst+','+bluest+')');
  ccobj.style.background = rgbArgu;
  historyOfColor.push(rgbArgu);
  colorDial();
}


//for HSL slider
//For hue
var hueval = document.getElementById("hue").value;
var onHueChng = function(){
  hueval = document.getElementById("hue").value;
  document.getElementById("hueValue").value = hueval;
  byhslSlider();
  getHexValue();
}
document.getElementById("hue").addEventListener('change', onHueChng);
//for Intensity
var intensityval = document.getElementById("intensity").value;
var onIntensityChng = function(){
  intensityval = document.getElementById("intensity").value;
  document.getElementById("intensityValue").value = intensityval;
  byhslSlider();
  getHexValue();
}
document.getElementById("intensity").addEventListener('change', onIntensityChng);

//function to change color of current color div by HSL slider
var byhslSlider = function(){
  var ccobj = document.getElementById("dynacolor");
  var huest = new String(hueval);
  var intensityst = new String(intensityval);
  var hslArgu = new String('hsl('+huest+','+intensityst+'%,'+intensityst+'%)');
  ccobj.style.background = hslArgu;
  historyOfColor.push(hslArgu);
  colorDial();
}

//for hex code input field
var hexcode = document.getElementById("hexValue").value;
var onHexChng = function(){
  hexcode = document.getElementById("hexValue").value;
  byhexInputBox();
}
document.getElementById("hex").addEventListener('change', onHexChng);
var byhexInputBox = function(){
  var ccobj = document.getElementById("dynacolor");
  var hexst = new String('#'+hexcode);
  ccobj.style.background = hexst;
  historyOfColor.push(hexst);
  colorDial();
}


//For the color dial
var colorDial = function(){
  var firstobj = document.getElementById("first");
  firstobj.style.background = historyOfColor[historyOfColor.length - 1];
  if (historyOfColor.length > 1){
    var secondobj = document.getElementById("second");
    secondobj.style.background = historyOfColor[historyOfColor.length - 2];
  }
  if(historyOfColor.length > 2){
    var thirdobj = document.getElementById("third");
    thirdobj.style.background = historyOfColor[historyOfColor.length - 3];
  }
  if(historyOfColor.length > 3){
    var fourthobj = document.getElementById("fourth");
    fourthobj.style.background = historyOfColor[historyOfColor.length - 4];
  }
  if(historyOfColor.length > 4){
    var fifthobj = document.getElementById("fifth");
    fifthobj.style.background = historyOfColor[historyOfColor.length - 5];
  }
  if(historyOfColor.length > 5){
    var sixthobj = document.getElementById("sixth");
    sixthobj.style.background = historyOfColor[historyOfColor.length - 6];
  }
  if(historyOfColor.length > 6){
    var seventhobj = document.getElementById("seventh");
    seventhobj.style.background = historyOfColor[historyOfColor.length - 7];
  }
  if(historyOfColor.length > 7){
    var eighthobj = document.getElementById("eighth");
    eighthobj.style.background = historyOfColor[historyOfColor.length - 8];
  }
  if(historyOfColor.length > 8){
    var ninthobj = document.getElementById("ninth");
    ninthobj.style.background = historyOfColor[historyOfColor.length - 9];
  }
  if(historyOfColor.length > 9){
    var tenthobj = document.getElementById("tenth");
    tenthobj.style.background = historyOfColor[historyOfColor.length - 10];
  }
  if(historyOfColor.length > 10){
    var eleventhobj = document.getElementById("eleventh");
    eleventhobj.style.background = historyOfColor[historyOfColor.length - 11];
  }
  if(historyOfColor.length > 11){
    var twelvethobj = document.getElementById("twelveth");
    twelvethobj.style.background = historyOfColor[historyOfColor.length - 12];
  }
}

/*Getting favourites by clicking on the color dial and storing it in an array*/
var firstclk = function(){
  var firstobj = document.getElementById("first");
  favouriteColor.push(firstobj.style.background);
  showfav();
}
var secondclk = function(){
  var secondobj = document.getElementById("second");
  favouriteColor.push(secondobj.style.background);
  showfav();
}
var thirdclk = function(){
  var thirdobj = document.getElementById("third");
  favouriteColor.push(thirdobj.style.background);
  showfav();
}
var fourthclk = function(){
  var fourthobj = document.getElementById("fourth");
  favouriteColor.push(fourthobj.style.background);
  showfav();
}
var fifthclk = function(){
  var fifthobj = document.getElementById("fifth");
  favouriteColor.push(fifthobj.style.background);
  showfav();
}
var sixthclk = function(){
  var sixthobj = document.getElementById("sixth");
  favouriteColor.push(sixthobj.style.background);
  showfav();
}
var seventhclk = function(){
  var seventhobj = document.getElementById("seventh");
  favouriteColor.push(seventhobj.style.background);
  showfav();
}
var eighthclk = function(){
  var eighthobj = document.getElementById("eighth");
  favouriteColor.push(eighthobj.style.background);
  showfav();
}
var ninthclk = function(){
  var ninthobj = document.getElementById("ninth");
  favouriteColor.push(ninthobj.style.background);
  showfav();
}
var tenthclk = function(){
  var tenthobj = document.getElementById("tenth");
  favouriteColor.push(tenthobj.style.background);
  showfav();
}
var eleventhclk = function(){
  var eleventhobj = document.getElementById("eleventh");
  favouriteColor.push(eleventhobj.style.background);
  showfav();
}
var twelvethclk = function(){
  var twelvethobj = document.getElementById("twelveth");
  favouriteColor.push(twelvethobj.style.background);
  showfav();
}
document.getElementById('first').addEventListener('click', firstclk);
document.getElementById('second').addEventListener('click', secondclk);
document.getElementById('third').addEventListener('click', thirdclk);
document.getElementById('fourth').addEventListener('click', fourthclk);
document.getElementById('fifth').addEventListener('click', fifthclk);
document.getElementById('sixth').addEventListener('click', sixthclk);
document.getElementById('seventh').addEventListener('click', seventhclk);
document.getElementById('eighth').addEventListener('click', eighthclk);
document.getElementById('ninth').addEventListener('click', ninthclk);
document.getElementById('tenth').addEventListener('click', tenthclk);
document.getElementById('eleventh').addEventListener('click', eleventhclk);
document.getElementById('twelveth').addEventListener('click', twelvethclk);

/*to show the favourite color*/
var showfav = function(){
  var firstobj = document.getElementById("firstfav");
  firstobj.style.background = favouriteColor[favouriteColor.length - 1];
  var firstcodeobj = document.getElementById('firstcode');
  firstcodeobj.innerHTML = favouriteColor[favouriteColor.length - 1];
  if (favouriteColor.length > 1){
    var secondobj = document.getElementById("secondfav");
    secondobj.style.background = favouriteColor[favouriteColor.length - 2];
    var secondcodeobj = document.getElementById('secondcode');
    secondcodeobj.innerHTML = favouriteColor[favouriteColor.length - 2];
  }
  if(favouriteColor.length > 2){
    var thirdobj = document.getElementById("thirdfav");
    thirdobj.style.background = favouriteColor[favouriteColor.length - 3];
    var thirdcodeobj = document.getElementById('thirdcode');
    thirdcodeobj.innerHTML = favouriteColor[favouriteColor.length - 3];
  }
  if(favouriteColor.length > 3){
    var fourthobj = document.getElementById("fourthfav");
    fourthobj.style.background = favouriteColor[favouriteColor.length - 4];
    var fourthcodeobj = document.getElementById('fourthcode');
    fourthcodeobj.innerHTML = favouriteColor[favouriteColor.length - 4];
  }
  if(favouriteColor.length > 4){
    var fifthobj = document.getElementById("fifthfav");
    fifthobj.style.background = favouriteColor[favouriteColor.length - 5];
    var fifthcodeobj = document.getElementById('fifthcode');
    fifthcodeobj.innerHTML = favouriteColor[favouriteColor.length - 5];
  }
  if(favouriteColor.length > 5){
    var sixthobj = document.getElementById("sixthfav");
    sixthobj.style.background = favouriteColor[favouriteColor.length - 6];
    var sixthcodeobj = document.getElementById('sixthcode');
    sixthcodeobj.innerHTML = favouriteColor[favouriteColor.length - 6];
  }
  if(favouriteColor.length > 6){
    var seventhobj = document.getElementById("seventhfav");
    seventhobj.style.background = favouriteColor[favouriteColor.length - 7];
    var seventhcodeobj = document.getElementById('seventhcode');
    seventhcodeobj.innerHTML = favouriteColor[favouriteColor.length - 7];
  }
  if(favouriteColor.length > 7){
    var eighthobj = document.getElementById("eighthfav");
    eighthobj.style.background = favouriteColor[favouriteColor.length - 8];
    var eighthcodeobj = document.getElementById('eighthcode');
    eighthcodeobj.innerHTML = favouriteColor[favouriteColor.length - 8];
  }
}


/*Binding for the hexcode*/

var getHexValue = function(){
  var currentColor = historyOfColor[historyOfColor.length - 1];
  var valueForRed = currentColor.slice(4,currentColor.indexOf(','));
  var valueForGreen = currentColor.slice(currentColor.indexOf(',') + 1, currentColor.lastIndexOf(','))
  var valueForBlue = currentColor.slice(currentColor.lastIndexOf(',') + 1, currentColor.indexOf(')'));
  var redNumVal = parseInt(valueForRed, 10);
  var greenNumVal = parseInt(valueForGreen, 10);
  var blueNumVal = parseInt(valueForBlue, 10);
  var hexforred = redNumVal.toString(16);
  hexforred = hexforred.length == 1? '0' + hexforred: hexforred;
  var hexforgreen = greenNumVal.toString(16);
  hexforgreen = hexforgreen.length == 1? '0' + hexforgreen: hexforgreen;
  var hexforblue = blueNumVal.toString(16);
  hexforblue = hexforblue.length == 1 ? '0' + hexforblue: hexforblue;
  var hexVal = hexforred + hexforgreen + hexforblue;
  var hexobj = document.getElementById("hexValue");
  hexobj.value = hexVal;
}
