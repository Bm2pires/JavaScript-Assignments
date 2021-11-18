printArray = (library) => {
  for(key in library){
    console.log(`--------------------------------\ntitle: ${library[key].title}\nauthor: ${library[key].author}\nlibraryID: ${library[key].libraryID}\n--------------------------------`)
  }
  console.log("EOF")
}; 

var library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    libraryID: 1254,
  },
  {
    title: "Walter Isaacson",
    author: "Steve Jobs",
    libraryID: 4264,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

printArray(library);

library.sort((a,b) => {
  let titleA = a.title;
  let titleB = b.title;

  if (titleA < titleB) {
    return -1;
  }
  else if (titleB > titleA) {
    return 1;
  }
  return 0;
})

printArray(library);
