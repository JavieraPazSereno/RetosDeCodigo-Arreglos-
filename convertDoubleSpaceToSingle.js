function convertDoubleSpaceToSingle(str) {
    let espacio = str.split("  ");
    return espacio.join(' ');
   }
  module.exports = convertDoubleSpaceToSingle;
  