export const convertCaretToHtml = (string: string) => {
  const elementsArr = [];
  let lastCaretIdx = 0;
  let firstSubStrIdx = 0;
  let isNumber = false;
  let currentSpan = ''
  for (let i = 0; i < string.length + 1; i++) {
    const currentChar = string[i];
    if (isNumber) {
      if(isNaN(Number(currentChar)) || currentChar === ' ') {
        isNumber = false;
        firstSubStrIdx = i;
        const numberToSup = string.substring(lastCaretIdx+1, i);
        const sup = `<sup>${numberToSup}</sup>`;
        const span = currentSpan;
        const fullSpan = span.substring(0, span.length - 7) + sup + span.substring(span.length - 7);
        elementsArr.push(fullSpan);
      }
    }
    if (currentChar === '^') {
      const stringToSpan = string.substring(firstSubStrIdx, i);
      lastCaretIdx = i;
      isNumber = true;
      currentSpan = `<span>${stringToSpan}</span>`;
    }

    if (i === string.length) {
      if(!isNaN(Number(string[i - 1]))) continue;
      const stringToSpan = string.substring(firstSubStrIdx, i)
      currentSpan = `<span>${stringToSpan}</span>`
      elementsArr.push(currentSpan);
    }
  }

  return elementsArr.join('');
}