// numeral.js language configuration
// language : english united kingdom (uk)
// author : Dan Ristic : https://github.com/dristic
(function(){var e={delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m"},ordinal:function(e){var t=e%10;return~~(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th"},currency:{symbol:"£"}};typeof module!="undefined"&&module.exports&&(module.exports=e);typeof window!="undefined"&&this.numeral&&this.numeral.language&&this.numeral.language("en-gb",e)})();