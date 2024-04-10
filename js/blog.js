dataidea_url = "https://api.dataidea.org";

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

const getBlogs = async () => {
  try {
    const blog_response = await fetch(dataidea_url + "/blogs");
    const blogs = await blog_response.json();
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

const displayBlogs = async () => {
  const blog_container = document.querySelector(".blogs-container");
  const blogs = await getBlogs();
  console.log(blogs);
  blogs.forEach((blog) => {
    blog_container.innerHTML += `
            <div class="col-lg-6 mb-4">
            <div
              class="blog-item position-relative overflow-hidden rounded mb-2"
            >
              <img class="img-fluid" src="${dataidea_url}/media/blog_images/pexels-den-romi-mcrod-16988233.jpg" alt="" />
              <a class="blog-overlay text-decoration-none" href="">
                <h5 class="text-white mb-3">
                  ${blog.title}
                </h5>
                <p class="text-primary m-0">${blog.date.slice(0, 10)} ${blog.date.slice(12, 19)}</p>
              </a>
            </div>
          </div>
       `;
  });

  blog_container.innerHTML += `
  <div class="col-12">
            <nav aria-label="Page navigation">
              <ul
                class="pagination pagination-lg justify-content-center mb-0"
              >
                <li class="page-item disabled">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>`;
};

displayBlogs();
