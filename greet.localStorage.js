function storeCounter(localStorage) {
  if (localStorage.count == undefined) {
    localStorage.setItem(count: 0);
  }
  localStorage.count++;
  return localStorage.count;
}
