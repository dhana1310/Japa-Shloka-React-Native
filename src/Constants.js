export const errorCode = "Please add the shlokas first!!";

export const defaultSelectedBooks = ["BG", "SB", "CC"];
export const defaultUiState = { timeLineName: "All time", numOfDays: 35000, currentSelectedBooks: defaultSelectedBooks, flowType: true };
export const createSequenceList = (lastNumber) =>
  Array(lastNumber)
    .fill()
    .map((element, index) => index + 1);

export function populateToast(show, severity, title, msg, width) {
  return {
    show: show,
    severity: severity,
    title: title,
    msg: msg,
    width: width,
  };
}

export const getDefaultBooksList = () => {
  return [
    { bookShortCode: "BG", bookName: "Bhagavad-gītā", isSelected: true },
    { bookShortCode: "SB", bookName: "Śrīmad-Bhāgavatam", isSelected: true },
    { bookShortCode: "CC", bookName: "Śrī Caitanya-caritāmṛta", isSelected: true },
  ];
};

export const getDefaultTimeList = () => {
  return [
    { timeLineName: "1 week", numOfDays: 7, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    { timeLineName: "2 weeks", numOfDays: 14, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    { timeLineName: "1 month", numOfDays: 30, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    { timeLineName: "2 months", numOfDays: 60, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    { timeLineName: "6 months", numOfDays: 180, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    { timeLineName: "1 year", numOfDays: 365, currentSelectedBooks: defaultSelectedBooks, flowType: true },
    defaultUiState,
  ];
};

export const getDefaultTimeLineName = (name) => {
  var localTimeLine = defaultUiState;
  getDefaultTimeList().forEach((timeLine) => {
    if (timeLine.timeLineName === name) {
      localTimeLine = timeLine;
    }
  });
  return localTimeLine;
};

export const getDefaultBookName = (shortCode) => {
  var defaultBookName = "";
  getDefaultBooksList().forEach((bookList) => {
    if (bookList.bookShortCode === shortCode) {
      defaultBookName = bookList.bookName;
    }
  });
  return defaultBookName;
};

export const defaultCurrentSelectedDetails = {
  error: null,
  onScreenCurrentBook: "",
  onScreenCurrentCanto: "",
  onScreenCurrentChapterNumber: "",
  allShlokasList: [
    {
      bookShortCode: "BG",
      bookName: "Bhagavad-gītā",
      chaptersList: [
        // {
        //   chapterNumber: "",
        //   selectedShlokas: [{
        //     shlokaNumber: 12,
        //     addedDate: "23-12-2022"
        // }],
        // },
      ],
      cantosList: [
        // {
        //   cantoNumber: "",
        //   chaptersList: [
        //     {
        //       chapterNumber: "",
        //       selectedShlokas: [],
        //     },
        //   ],
        // },
      ],
    },
    {
      bookShortCode: "SB",
      bookName: "Śrīmad-Bhāgavatam",
      chaptersList: [],
      cantosList: [],
    },
    {
      bookShortCode: "CC",
      bookName: "Śrī Caitanya-caritāmṛta",
      chaptersList: [],
      cantosList: [],
    },
  ],
};

export const shlokaList = [
  {
    bookShortCode: "",
    bookName: "Select the book",
    cantosList: [],
    chaptersList: [],
  },
  {
    bookShortCode: "BG",
    bookName: "Bhagavad-gītā",
    cantosList: [],
    chaptersList: [
      {
        chapterNumber: "1",
        allShlokaCount: createSequenceList(46),
      },
      {
        chapterNumber: "2",
        allShlokaCount: createSequenceList(72),
      },
      { chapterNumber: "3", allShlokaCount: createSequenceList(43) },
      { chapterNumber: "4", allShlokaCount: createSequenceList(42) },
      { chapterNumber: "5", allShlokaCount: createSequenceList(29) },
      {
        chapterNumber: "6",
        allShlokaCount: createSequenceList(47),
      },
      {
        chapterNumber: "7",
        allShlokaCount: createSequenceList(30),
      },
      {
        chapterNumber: "8",
        allShlokaCount: createSequenceList(28),
      },
      {
        chapterNumber: "9",
        allShlokaCount: createSequenceList(34),
      },
      {
        chapterNumber: "10",
        allShlokaCount: createSequenceList(42),
      },
      {
        chapterNumber: "11",
        allShlokaCount: createSequenceList(55),
      },
      {
        chapterNumber: "12",
        allShlokaCount: createSequenceList(20),
      },
      {
        chapterNumber: "13",
        allShlokaCount: createSequenceList(35),
      },
      {
        chapterNumber: "14",
        allShlokaCount: createSequenceList(27),
      },
      {
        chapterNumber: "15",
        allShlokaCount: createSequenceList(20),
      },
      {
        chapterNumber: "16",
        allShlokaCount: createSequenceList(24),
      },
      {
        chapterNumber: "17",
        allShlokaCount: createSequenceList(28),
      },
      {
        chapterNumber: "18",
        allShlokaCount: createSequenceList(78),
      },
    ],
  },
  {
    bookShortCode: "SB",
    bookName: "Śrīmad-Bhāgavatam",
    cantosList: [
      {
        cantoNumber: "1",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(23),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(58),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(60),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(40),
          },
        ],
      },
      {
        cantoNumber: "2",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(53),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(29),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(51),
          },
        ],
      },
      {
        cantoNumber: "3",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(53),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(56),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(47),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "26",
            allShlokaCount: createSequenceList(72),
          },
          {
            chapterNumber: "27",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "28",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "29",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "30",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "31",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "32",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "33",
            allShlokaCount: createSequenceList(37),
          },
        ],
      },
      {
        cantoNumber: "4",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(66),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(53),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(82),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(67),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(27),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(32),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(63),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(79),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(62),
          },
          {
            chapterNumber: "26",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "27",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "28",
            allShlokaCount: createSequenceList(65),
          },
          {
            chapterNumber: "29",
            allShlokaCount: createSequenceList(85),
          },
          {
            chapterNumber: "30",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "31",
            allShlokaCount: createSequenceList(31),
          },
        ],
      },
      {
        cantoNumber: "5",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(41),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(23),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(20),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(19),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(19),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(14),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(20),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(17),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(16),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(16),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(29),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(24),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(19),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(17),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(9),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(15),
          },
          {
            chapterNumber: "26",
            allShlokaCount: createSequenceList(40),
          },
        ],
      },
      {
        cantoNumber: "6",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(68),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(54),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(27),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(23),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(65),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(41),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(78),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(28),
          },
        ],
      },
      {
        cantoNumber: "7",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(56),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(70),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(80),
          },
        ],
      },
      {
        cantoNumber: "8",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(29),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(47),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(11),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(62),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(32),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(61),
          },
        ],
      },
      {
        cantoNumber: "9",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(71),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(16),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(27),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(41),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(17),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(29),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(67),
          },
        ],
      },
      {
        cantoNumber: "10",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(69),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(53),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(32),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(23),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(59),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(64),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(67),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(32),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(16),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(20),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "26",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "27",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "28",
            allShlokaCount: createSequenceList(17),
          },
          {
            chapterNumber: "29",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "30",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "31",
            allShlokaCount: createSequenceList(19),
          },
          {
            chapterNumber: "32",
            allShlokaCount: createSequenceList(22),
          },
          {
            chapterNumber: "33",
            allShlokaCount: createSequenceList(39),
          },
          {
            chapterNumber: "34",
            allShlokaCount: createSequenceList(32),
          },
          {
            chapterNumber: "35",
            allShlokaCount: createSequenceList(26),
          },
          {
            chapterNumber: "36",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "37",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "38",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "39",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "40",
            allShlokaCount: createSequenceList(30),
          },
          {
            chapterNumber: "41",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "42",
            allShlokaCount: createSequenceList(38),
          },
          {
            chapterNumber: "43",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "44",
            allShlokaCount: createSequenceList(51),
          },
          {
            chapterNumber: "45",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "46",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "47",
            allShlokaCount: createSequenceList(69),
          },
          {
            chapterNumber: "48",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "49",
            allShlokaCount: createSequenceList(31),
          },
          {
            chapterNumber: "50",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "51",
            allShlokaCount: createSequenceList(63),
          },
          {
            chapterNumber: "52",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "53",
            allShlokaCount: createSequenceList(57),
          },
          {
            chapterNumber: "54",
            allShlokaCount: createSequenceList(60),
          },
          {
            chapterNumber: "55",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "56",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "57",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "58",
            allShlokaCount: createSequenceList(58),
          },
          {
            chapterNumber: "59",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "60",
            allShlokaCount: createSequenceList(59),
          },
          {
            chapterNumber: "61",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "62",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "63",
            allShlokaCount: createSequenceList(53),
          },
          {
            chapterNumber: "64",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "65",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "66",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "67",
            allShlokaCount: createSequenceList(28),
          },
          {
            chapterNumber: "68",
            allShlokaCount: createSequenceList(54),
          },
          {
            chapterNumber: "69",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "70",
            allShlokaCount: createSequenceList(47),
          },
          {
            chapterNumber: "71",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "72",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "73",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "74",
            allShlokaCount: createSequenceList(54),
          },
          {
            chapterNumber: "75",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "76",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "77",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "78",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "79",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "80",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "81",
            allShlokaCount: createSequenceList(41),
          },
          {
            chapterNumber: "82",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "83",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "84",
            allShlokaCount: createSequenceList(71),
          },
          {
            chapterNumber: "85",
            allShlokaCount: createSequenceList(59),
          },
          {
            chapterNumber: "86",
            allShlokaCount: createSequenceList(59),
          },
          {
            chapterNumber: "87",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "88",
            allShlokaCount: createSequenceList(40),
          },
          {
            chapterNumber: "89",
            allShlokaCount: createSequenceList(65),
          },
          {
            chapterNumber: "90",
            allShlokaCount: createSequenceList(50),
          },
        ],
      },
      {
        cantoNumber: "11",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(24),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(23),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(74),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(33),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(24),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(46),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(58),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(48),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(45),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(37),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(29),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(36),
          },
          {
            chapterNumber: "26",
            allShlokaCount: createSequenceList(35),
          },
          {
            chapterNumber: "27",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "28",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "29",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "30",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "31",
            allShlokaCount: createSequenceList(28),
          },
        ],
      },
      {
        cantoNumber: "12",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(41),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(44),
          },
          {
            chapterNumber: "3",
            allShlokaCount: createSequenceList(52),
          },
          {
            chapterNumber: "4",
            allShlokaCount: createSequenceList(43),
          },
          {
            chapterNumber: "5",
            allShlokaCount: createSequenceList(13),
          },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(80),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(25),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(49),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(42),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(50),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(69),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(23),
          },
        ],
      },
    ],
  },
  {
    bookShortCode: "CC",
    bookName: "Śrī Caitanya-caritāmṛta",
    cantosList: [
      {
        cantoNumber: "Adi",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(110),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(121),
          },
          { chapterNumber: "3", allShlokaCount: createSequenceList(114) },
          { chapterNumber: "4", allShlokaCount: createSequenceList(277) },
          { chapterNumber: "5", allShlokaCount: createSequenceList(235) },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(120),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(171),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(85),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(55),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(164),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(61),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(96),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(124),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(97),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(34),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(111),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(336),
          },
        ],
      },
      {
        cantoNumber: "Madhya",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(287),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(95),
          },
          { chapterNumber: "3", allShlokaCount: createSequenceList(219) },
          { chapterNumber: "4", allShlokaCount: createSequenceList(213) },
          { chapterNumber: "5", allShlokaCount: createSequenceList(161) },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(286),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(155),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(313),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(365),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(190),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(243),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(222),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(209),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(257),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(302),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(290),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(234),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(229),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(257),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(406),
          },
          {
            chapterNumber: "21",
            allShlokaCount: createSequenceList(149),
          },
          {
            chapterNumber: "22",
            allShlokaCount: createSequenceList(169),
          },
          {
            chapterNumber: "23",
            allShlokaCount: createSequenceList(127),
          },
          {
            chapterNumber: "24",
            allShlokaCount: createSequenceList(355),
          },
          {
            chapterNumber: "25",
            allShlokaCount: createSequenceList(283),
          },
        ],
      },
      {
        cantoNumber: "Antya",
        chaptersList: [
          {
            chapterNumber: "1",
            allShlokaCount: createSequenceList(223),
          },
          {
            chapterNumber: "2",
            allShlokaCount: createSequenceList(172),
          },
          { chapterNumber: "3", allShlokaCount: createSequenceList(272) },
          { chapterNumber: "4", allShlokaCount: createSequenceList(239) },
          { chapterNumber: "5", allShlokaCount: createSequenceList(164) },
          {
            chapterNumber: "6",
            allShlokaCount: createSequenceList(329),
          },
          {
            chapterNumber: "7",
            allShlokaCount: createSequenceList(173),
          },
          {
            chapterNumber: "8",
            allShlokaCount: createSequenceList(103),
          },
          {
            chapterNumber: "9",
            allShlokaCount: createSequenceList(153),
          },
          {
            chapterNumber: "10",
            allShlokaCount: createSequenceList(162),
          },
          {
            chapterNumber: "11",
            allShlokaCount: createSequenceList(108),
          },
          {
            chapterNumber: "12",
            allShlokaCount: createSequenceList(155),
          },
          {
            chapterNumber: "13",
            allShlokaCount: createSequenceList(139),
          },
          {
            chapterNumber: "14",
            allShlokaCount: createSequenceList(123),
          },
          {
            chapterNumber: "15",
            allShlokaCount: createSequenceList(99),
          },
          {
            chapterNumber: "16",
            allShlokaCount: createSequenceList(151),
          },
          {
            chapterNumber: "17",
            allShlokaCount: createSequenceList(73),
          },
          {
            chapterNumber: "18",
            allShlokaCount: createSequenceList(121),
          },
          {
            chapterNumber: "19",
            allShlokaCount: createSequenceList(112),
          },
          {
            chapterNumber: "20",
            allShlokaCount: createSequenceList(157),
          },
        ],
      },
    ],
  },
];
