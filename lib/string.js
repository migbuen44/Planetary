"use strict";
exports.__esModule = true;
exports.convertCaretToHtml = void 0;
var sampleStr = 'Hi, this is a math string 10^4. Random stuff 2^22 hi 10^653';
var convertCaretToHtml = function (string) {
    var elementsArr = [];
    var lastCaretIdx = 0;
    var firstSubStrIdx = 0;
    var isNumber = false;
    var currentSpan = '';
    for (var i = 0; i < string.length + 1; i++) {
        // for each caret
        // keep track of index of last caret detected
        // section off all previous text into a div
        // keep iterating until char is not a number
        // then get that section of text and return with superscript tags
        // on last character cut out the substring of last character idx
        // ... to the idx of last caret detected and return as a div
        var currentChar = string[i];
        if (isNumber) {
            // console.log('isNumber currentChar: ', currentChar);
            var charAsNumber = Number(currentChar);
            // console.log('isNumber type of char: ', typeof charAsNumber);
            if (isNaN(Number(currentChar)) || currentChar === ' ') {
                isNumber = false;
                firstSubStrIdx = i;
                var numberToSup = string.substring(lastCaretIdx + 1, i);
                var sup = "<sup>".concat(numberToSup, "</sup>");
                elementsArr.push(sup);
            }
        }
        if (currentChar === '^') {
            var stringToSpan = string.substring(firstSubStrIdx, i);
            lastCaretIdx = i;
            isNumber = true;
            var span = "<span>".concat(stringToSpan, "</span>");
            elementsArr.push(span);
        }
        if (i === string.length) {
            console.log('isNumber: ', isNumber);
            if (isNumber)
                continue;
            var stringToSpan = string.substring(firstSubStrIdx, i);
            var span = "<span>".concat(stringToSpan, "</span>");
            elementsArr.push(span);
        }
    }
    console.log('elementsArr: ', elementsArr);
};
exports.convertCaretToHtml = convertCaretToHtml;
(0, exports.convertCaretToHtml)(sampleStr);
// console.log('end statement: ', Number(' '))
