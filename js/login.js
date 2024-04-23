dataidea_api = "http://127.0.0.1:8000/";
const params = new URLSearchParams(window.location.search);

const getCSRFToken = () => {
  var cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.substring(0, 10) === "csrftoken=") {
        cookieValue = decodeURIComponent(cookie.substring(10));
        break;
      }
    }
  }
  return cookieValue;
};

const login = async () => {
  var csrfToken = getCSRFToken();
  if (csrfToken === null) {
    console.error("CSRF token not found");
    return;
  }

  var formData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  const login_response = await fetch(`${dataidea_api}/accounts/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken,
    },
    body: JSON.stringify(formData),
  });

  const login_data = await login_response.json();

  if (login_response.ok) {
    next = params.get("next");

    if (next === null) {
      next = "/frontend/index.html";
    }

    window.location.href = `${next}?username=${login_data.username}`;
    localStorage.setItem("username", login_data.username);
  } else {
    alert("Login failed");
  }
};
