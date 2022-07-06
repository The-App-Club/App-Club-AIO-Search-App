function unicodeToChar(text) {
  return text.replace(/\\u[\dA-F]{4}/gi, function (match) {
    return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
  });
}

function stripHtml(html) {
  let tmp = document.createElement('DIV');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

function coolParse(content) {
  return content[0].map((item) => {
    return item[0]
      .split(/;/)
      .filter((item) => {
        return item !== '';
      })
      .reduce((result, item) => {
        if (item.match(/&#/)) {
          return (
            result +
            item
              .split(/(?=&#)/)
              .map((detailItem) => {
                if (detailItem.match(/&#/)) {
                  return String.fromCodePoint(
                    Number(detailItem.replace(/&#/, ''))
                  );
                } else {
                  return item;
                }
              })
              .join(' ')
          );
        } else {
          return result + ' ' + item;
        }
      }, '')
      .replace(/&#[\dA-F]+/gi, '')
      .trim()
      .replace(/ +/g, ' ');
  });
}

export {stripHtml, unicodeToChar, coolParse};
