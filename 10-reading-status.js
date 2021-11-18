var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

var displayReadingStatus = (library) => {
  for (const key in library) {
    console.log(
      `Title: ${library[key].title}\nAuthor: ${library[key].author}\nReading status: ${library[key].readingStatus}\n`
    );
  }
};

displayReadingStatus(library);
