dataidea_url = "http://127.0.0.1:8000";

const replaceUsername = () => {
  // pick username from local storage
  const user = document.querySelector(".user");
  let username = localStorage.getItem("username");
  console.log(username);
  console.log(user);

  if (username) {
    user.innerHTML = `
    <a class="py-2 px-4 ml-auto d-lg-block" href="#"
    >logged in as ${username}</a
  > <a class="btn btn-danger logout" href="" onclick="logOut()">Signout</a
>`;
  } else {
    user.innerHTML = `
    <a class="btn btn-primary py-2 px-4 ml-auto d-lg-block" href="/frontend/login.html"
          >Signin</a
        >`;
  }
};

const logOut = async () => {
  const logout_response = await fetch(`${dataidea_url}/accounts/logout/`, {
    method: "POST",
    headers: {
      "X-CSRFToken": "{{ csrf_token }}",
    },
  });

  const logout_data = await logout_response.json();

  if (logout_response.ok) {
    localStorage.removeItem("username");
    window.location.reload();
    alert("logged out");
  } else {
    alert("Logout failed");
  }
};

// Function to fetch and insert navbar and footer content
const fetchHeaderAndFooter = () => {
  // Fetch header content
  fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
      document.querySelector(".header-container").innerHTML = html;
      // replace username in navbar
      replaceUsername();
    });

  // Fetch footer content
  fetch("footer.html")
    .then((response) => response.text())
    .then(
      (html) => (document.querySelector(".footer-container").innerHTML = html)
    );
};

// Call the function to fetch header and footer content
fetchHeaderAndFooter();
