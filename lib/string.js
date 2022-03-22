"use strict";
exports.__esModule = true;
exports.convertCaretToHtml = void 0;
var sampleStr = 'Hi, this is a math string 10^4. Random stuff 2^22 hi 10^653 random ';
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
            if (!Number(currentChar) || currentChar === ' ') {
                isNumber = false;
                firstSubStrIdx = i;
                var numberToSup = string.substring(lastCaretIdx + 1, i);
                var sup = "<sup>".concat(numberToSup, "</sup>");
                var span = currentSpan;
                var fullSpan = span.substring(0, span.length - 7) + sup + span.substring(span.length - 7);
                elementsArr.push(fullSpan);
            }
        }
        if (currentChar === '^') {
            var stringToSpan = string.substring(firstSubStrIdx, i);
            lastCaretIdx = i;
            isNumber = true;
            currentSpan = "<span>".concat(stringToSpan, "</span>");
            // elementsArr.push(span);
        }
        if (i === string.length) {
            if (Number(string[i - 1]))
                continue;
            var stringToSpan = string.substring(firstSubStrIdx, i);
            currentSpan = "<span>".concat(stringToSpan, "</span>");
            elementsArr.push(currentSpan);
        }
    }
    // console.log('elementsArr: ', elementsArr);
    return elementsArr.join('');
};
exports.convertCaretToHtml = convertCaretToHtml;
console.log((0, exports.convertCaretToHtml)(sampleStr));
// console.log('end statement: ', Number(' '))
