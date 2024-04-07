// Function to fetch and insert navbar and footer content
const fetchHeaderAndFooter = () => {
  // Fetch header content
  fetch("header.html")
    .then((response) => response.text())
    .then(
      (html) => (document.querySelector(".header-container").innerHTML = html)
    );

  // Fetch footer content
  fetch("footer.html")
    .then((response) => response.text())
    .then(
      (html) => (document.querySelector(".footer-container").innerHTML = html)
    );
};

// Call the function to fetch header and footer content
fetchHeaderAndFooter();
