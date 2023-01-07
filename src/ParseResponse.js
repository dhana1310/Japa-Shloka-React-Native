const parseResponse = (response, savedDisplayUiState) => {
  var allShlokasFromResponse = [];
  var fromDate = new Date();
  fromDate.setDate(fromDate.getDate() - savedDisplayUiState.numOfDays);
  if (response && response.allShlokasList) {
    response.allShlokasList
      .filter((book) => savedDisplayUiState.currentSelectedBooks.includes(book.bookShortCode))
      .forEach((book) => {
        if (book.chaptersList.length > 0) {
          book.chaptersList.forEach((chapter) => {
            chapter.selectedShlokas
              .filter((shloka) => isShlokaFallingWithinTheRange(fromDate, shloka.addedDate))
              .forEach((shloka) => {
                allShlokasFromResponse.push(book.bookShortCode + " " + chapter.chapterNumber + "." + shloka.shlokaNumber);
              });
          });
        }
        if (book.cantosList.length > 0) {
          book.cantosList.forEach((canto) => {
            canto.chaptersList.forEach((chapter) => {
              chapter.selectedShlokas
                .filter((shloka) => isShlokaFallingWithinTheRange(fromDate, shloka.addedDate))
                .forEach((shloka) => {
                  allShlokasFromResponse.push(book.bookShortCode + " " + canto.cantoNumber + (book.bookShortCode === "CC" ? " " : ".") + chapter.chapterNumber + "." + shloka.shlokaNumber);
                });
            });
          });
        }
      });
  }
  return allShlokasFromResponse;
};

const isShlokaFallingWithinTheRange = (fromDate, shlokaInsertedDate) => {
  var shlokaDate = new Date(shlokaInsertedDate);
  return shlokaDate > fromDate;
};

export default parseResponse;
