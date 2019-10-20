const preloadedFlashcards = [
  {
    character: "我们",
    pinyin: "wǒmen",
    meaning: "We, us",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "我们都看见那个人了",
      exampleChinesePinyin: "Wǒmen dōu kànjiàn nàge rén le.",
      exampleEnglishTranslation: "We all saw that man."
    }
  },
  {
    character: "明天",
    pinyin: "míngtiān",
    meaning: "2meaning",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "a222",
      exampleChinesePinyin: "b222",
      exampleEnglishTranslation:
        "This is a random English sentence example. This is a random English sentence example. This is a random English sentence example. This is a random English sentence example."
    }
  },
  {
    character: "电视",
    pinyin: "pinyin3",
    meaning: "3meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a333",
      exampleChinesePinyin: "b333",
      exampleEnglishTranslation: "c333"
    }
  },
  {
    character: "名字",
    pinyin: "pinyin4",
    meaning: "4meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a444",
      exampleChinesePinyin: "b444",
      exampleEnglishTranslation: "c444"
    }
  },
  {
    character: "爱好",
    pinyin: "pinyin5",
    meaning: "5meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a555",
      exampleChinesePinyin: "b555",
      exampleEnglishTranslation: "c555"
    }
  },
  {
    character: "安静",
    pinyin: "pinyin6",
    meaning: "6meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a666",
      exampleChinesePinyin: "b666",
      exampleEnglishTranslation: "c666"
    }
  },
  {
    character: "标准",
    pinyin: "pinyin7",
    meaning: "7meaning",
    level: 4,
    exampleSentence: {
      exampleChineseSentence: "a777",
      exampleChinesePinyin: "b777",
      exampleEnglishTranslation: "c777"
    }
  },
  {
    character: "表演",
    pinyin: "pinyin8",
    meaning: "8meaning",
    level: 4,
    exampleSentence: {
      exampleChineseSentence: "a888",
      exampleChinesePinyin: "b888",
      exampleEnglishTranslation: "c888"
    }
  },
  {
    character: "包裹",
    pinyin: "pinyin9",
    meaning: "9meaning",
    level: 5,
    exampleSentence: {
      exampleChineseSentence: "a999",
      exampleChinesePinyin: "b999",
      exampleEnglishTranslation: "c999"
    }
  },
  {
    character: "傍晚",
    pinyin: "pinyin10",
    meaning: "10meaning",
    level: 5,
    exampleSentence: {
      exampleChineseSentence: "a101010",
      exampleChinesePinyin: "b101010",
      exampleEnglishTranslation: "c101010"
    }
  },
  {
    character: "拜托",
    pinyin: "pinyin11",
    meaning: "11meaning",
    level: 6,
    exampleSentence: {
      exampleChineseSentence: "a111111",
      exampleChinesePinyin: "b111111",
      exampleEnglishTranslation: "c111111"
    }
  },
  {
    character: "癌症",
    pinyin: "pinyin12",
    meaning: "12meaning",
    level: 6,
    exampleSentence: {
      exampleChineseSentence: "a121212",
      exampleChinesePinyin: "b121212",
      exampleEnglishTranslation: "c121212"
    }
  },
  {
    character: "我",
    pinyin: "wǒmen",
    meaning: "We, us",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "我们都看见那个人了",
      exampleChinesePinyin: "Wǒmen dōu kànjiàn nàge rén le.",
      exampleEnglishTranslation: "We all saw that man."
    }
  },
  {
    character: "早上好",
    pinyin: "míngtiān",
    meaning: "2meaning",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "a222",
      exampleChinesePinyin: "b222",
      exampleEnglishTranslation: "test"
    }
  },
  {
    character: "不好意思",
    pinyin: "pinyin3",
    meaning: "3meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a333",
      exampleChinesePinyin: "b333",
      exampleEnglishTranslation: "c333"
    }
  },
  {
    character: "名字",
    pinyin: "pinyin4",
    meaning: "4meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a444",
      exampleChinesePinyin: "b444",
      exampleEnglishTranslation: "c444"
    }
  },
  {
    character: "爱好",
    pinyin: "pinyin5",
    meaning: "5meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a555",
      exampleChinesePinyin: "b555",
      exampleEnglishTranslation: "c555"
    }
  },
  {
    character: "安静",
    pinyin: "pinyin6",
    meaning: "6meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a666",
      exampleChinesePinyin: "b666",
      exampleEnglishTranslation: "c666"
    }
  },
  {
    character: "标准",
    pinyin: "pinyin7",
    meaning: "7meaning",
    level: 4,
    exampleSentence: {
      exampleChineseSentence: "a777",
      exampleChinesePinyin: "b777",
      exampleEnglishTranslation: "c777"
    }
  },
  {
    character: "表演",
    pinyin: "pinyin8",
    meaning: "8meaning",
    level: 4,
    exampleSentence: {
      exampleChineseSentence: "a888",
      exampleChinesePinyin: "b888",
      exampleEnglishTranslation: "c888"
    }
  },
  {
    character: "包裹",
    pinyin: "pinyin9",
    meaning: "9meaning",
    level: 5,
    exampleSentence: {
      exampleChineseSentence: "a999",
      exampleChinesePinyin: "b999",
      exampleEnglishTranslation: "c999"
    }
  },
  {
    character: "傍晚",
    pinyin: "pinyin10",
    meaning: "10meaning",
    level: 5,
    exampleSentence: {
      exampleChineseSentence: "a101010",
      exampleChinesePinyin: "b101010",
      exampleEnglishTranslation: "c101010"
    }
  },
  {
    character: "拜托",
    pinyin: "pinyin11",
    meaning: "11meaning",
    level: 6,
    exampleSentence: {
      exampleChineseSentence: "a111111",
      exampleChinesePinyin: "b111111",
      exampleEnglishTranslation: "c111111"
    }
  },
  {
    character: "癌症",
    pinyin: "pinyin12",
    meaning: "12meaning",
    level: 6,
    exampleSentence: {
      exampleChineseSentence: "a121212",
      exampleChinesePinyin: "b121212",
      exampleEnglishTranslation: "c121212"
    }
  },
  {
    character: "我们",
    pinyin: "wǒmen",
    meaning: "We, us",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "我们都看见那个人了",
      exampleChinesePinyin: "Wǒmen dōu kànjiàn nàge rén le.",
      exampleEnglishTranslation: "We all saw that man."
    }
  },
  {
    character: "明天",
    pinyin: "míngtiān",
    meaning: "2meaning",
    level: 1,
    exampleSentence: {
      exampleChineseSentence: "a222",
      exampleChinesePinyin: "b222",
      exampleEnglishTranslation: "c222"
    }
  },
  {
    character: "电视",
    pinyin: "pinyin3",
    meaning: "3meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a333",
      exampleChinesePinyin: "b333",
      exampleEnglishTranslation: "c333"
    }
  },
  {
    character: "名字",
    pinyin: "pinyin4",
    meaning: "4meaning",
    level: 2,
    exampleSentence: {
      exampleChineseSentence: "a444",
      exampleChinesePinyin: "b444",
      exampleEnglishTranslation: "c444"
    }
  },
  {
    character: "爱好",
    pinyin: "pinyin5",
    meaning: "5meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a555",
      exampleChinesePinyin: "b555",
      exampleEnglishTranslation: "c555"
    }
  },
  {
    character: "安静",
    pinyin: "pinyin6",
    meaning: "6meaning",
    level: 3,
    exampleSentence: {
      exampleChineseSentence: "a666",
      exampleChinesePinyin: "b666",
      exampleEnglishTranslation: "c666"
    }
  }
];
module.exports = preloadedFlashcards;
// export default preloadedFlashcards;
