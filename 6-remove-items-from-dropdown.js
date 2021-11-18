var removecolor = () => {
  let select = document.getElementById("colorSelect");

  for (i = 0; i < select.length; i++) {
    if (select.options[i].selected) {
      select.remove(i);
    }
  }
};
