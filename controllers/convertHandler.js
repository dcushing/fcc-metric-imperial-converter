/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var splitted = input.split(/[A-Za-z]/)[0];
    if (splitted == '') {
      return 1;
    } else if (isNaN(splitted)) {
      var checkIfValidFraction = splitted.split('/');
      if (checkIfValidFraction.length <= 2 ) {
          return eval(splitted);
      } else {
        return 'invalid number';
      }
    } else {
    return splitted;
    }
  };
  
  this.getUnit = function(input) {
    //possible input is ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    var matched = /(gal|l|mi|km|lbs|kg)$/i.exec(input); //input.match(/(gal|l|mi|km|lbs|kg)$/i)//
    if (matched) {
      return matched[0];
    } else {
      return "invalid unit";
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.45359;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    return result;
  };
  //example output:
// {initNum: 3.1, initUnit: 'mi', returnNum: 5.0000008, returnUnit: 'km', string: '3.1 miles converts to 5.00002 kilometers'}
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    return initNum + ' ' + initUnit + ' converts to ' + returnNum + ' ' + returnUnit;
  };
  
}

module.exports = ConvertHandler;
