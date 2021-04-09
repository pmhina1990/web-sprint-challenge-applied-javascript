const Header = (title, date, temp) => {

  const header = document.createElement('div');
  header.classList.add('header');
  
  const headDateSpan = document.createElement('span');
  headDateSpan.classList.add('date');
  headDateSpan.textContent = `${date}`;
  header.append(headDateSpan);

  const headH1 = document.createElement('h1')
  headH1.textContent = `${title}`
  header.append(headH1)

  const headTemp = document.createElement('span')
  headTemp.classList.add('temp')
  headTemp.textContent = `${temp}`
  header.append(headTemp)

  console.log(header);
  return header;
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  document.querySelector(selector).append(Header('Lambda Times', 'April 9th, 2021', '67 Degrees Fahreheit'));
}
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


export { Header, headerAppender }
