let dataidea_api = "https://api.dataidea.org";
// const test_api = "http://127.0.0.1:8000/";
// dataidea_api = test_api;

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
    const blog_response = await fetch(dataidea_api + "/blogs");
    const blogs = await blog_response.json();
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

const getCategories = async () => {
  try {
    const category_response = await fetch(dataidea_api + "blogs/categories");
    const categories = await category_response.json();
    return categories;
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
              <img class="img-fluid" src="${dataidea_api}/${
      blog.cover_image
    }" alt="" />
              <a class="blog-overlay text-decoration-none" href="blog_detail.html?id=${
                blog.id
              }">
                <h5 class="text-white mb-3">
                  ${blog.title}
                </h5>
                <p class="text-primary m-0">${blog.date.slice(
                  0,
                  10
                )} ${blog.date.slice(12, 19)}</p>
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

const displayCategories = async () => {
  const category_container = document.querySelector(".categories-container");
  const tags_container = document.querySelector(".tags-container");
  const categories = await getCategories();
  console.log(categories);
  categories.forEach((category) => {
    category_container.innerHTML += `
    <li
                  class="list-group-item d-flex justify-content-between align-items-center px-0"
                >
                  <a href="" class="text-decoration-none h6 m-0"
                    >${category.name}</a
                  >
                  <span class="badge badge-primary badge-pill">98</span>
                </li>
    `;

    tags_container.innerHTML += `
    <a href="" class="btn btn-outline-primary m-1">${category.name}</a>`;
  });
};

displayBlogs();
displayCategories();
