import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"

const sampleStr = 'Hi, this is a math string 10^4. Random stuff 2^22 hi 10^653'

export const convertCaretToHtml = (string: string) => {
  const elementsArr = [];
  let lastCaretIdx = 0;
  let firstSubStrIdx = 0;
  let isNumber = false;
  let currentSpan = ''
  for (let i = 0; i < string.length + 1; i++) {
    // for each caret
      // keep track of index of last caret detected
      // section off all previous text into a div
      // keep iterating until char is not a number
        // then get that section of text and return with superscript tags
        // on last character cut out the substring of last character idx
        // ... to the idx of last caret detected and return as a div
    const currentChar = string[i];
    if (isNumber) {
      // console.log('isNumber currentChar: ', currentChar);
      let charAsNumber = Number(currentChar);
      // console.log('isNumber type of char: ', typeof charAsNumber);
      if(isNaN(Number(currentChar)) || currentChar === ' ') {
        isNumber = false;
        firstSubStrIdx = i;
        const numberToSup = string.substring(lastCaretIdx+1, i);
        const sup = `<sup>${numberToSup}</sup>`
        elementsArr.push(sup);
      }
    }
    if (currentChar === '^') {
      const stringToSpan = string.substring(firstSubStrIdx, i);
      lastCaretIdx = i;
      isNumber = true;
      const span = `<span>${stringToSpan}</span>`;
      elementsArr.push(span);
    }

    if (i === string.length) {
      const stringToSpan = string.substring(firstSubStrIdx, i)
      const span = `<span>${stringToSpan}</span>`
      elementsArr.push(span);
    }
  }

  console.log('elementsArr: ', elementsArr);
}

convertCaretToHtml(sampleStr);
// console.log('end statement: ', Number(' '))
