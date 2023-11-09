let sheetID = "1AykXwXXtj4FNwRgfnrKhpzRUur9B0wnAs0QeMlzaXSM";
let sheetTitle = "Sheet1";
let sheetRange = "A1:Z993";
let fullURL =
  "https://docs.google.com/spreadsheets/d/" +
  sheetID +
  "/gviz/tq?sheet=" +
  sheetTitle +
  "&range=" +
  sheetRange;
fetch(fullURL)
  .then((res => res.text()))
  .then((rep) => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    console.log(rep);
  });