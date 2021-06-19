let CurrentPageNumber = 1;

// this is for identify page number
export const HandlePageNumber = (action) => {
  if (action == "next") {
    CurrentPageNumber++;
    console.log("next");
  } else if (action == "prev") {
    console.log("prev");
    CurrentPageNumber--;
    if (CurrentPageNumber == 0) {
      CurrentPageNumber = 1;
    }
  }

  return CurrentPageNumber;
};
export const RefreshPageNumber = () => {
  CurrentPageNumber = 1;
  return CurrentPageNumber;
};
