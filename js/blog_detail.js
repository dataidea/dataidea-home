dataidea_api = "https://api.dataidea.org";

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

const params = new URLSearchParams(window.location.search);

const getBlog = async (id) => {
  const response = await fetch(`${dataidea_api}/blogs/${id}`);
  const blog = await response.json();
  return blog;
};

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

const displayBlog = async () => {
  const blog_id = params.get("id");
  const blog = await getBlog(blog_id);
  const recent_blogs = await getBlogs();
  const author_bio = document.querySelector(".author-bio");
  const blog_container = document.querySelector(".blog-container");
  const recent_blogs_container = document.querySelector(
    ".recent-blogs-container"
  );
  blog_container.innerHTML += `
    <div class="mb-5">
                        <h6 class="text-primary mb-3">${blog.date.slice(
                          0,
                          10
                        )}</h6>
                        <h1 class="mb-5">${blog.title}</h1>
                        <img class="img-fluid rounded w-100 mb-4" src="${dataidea_api}/${
    blog.cover_image
  }" alt="Image">
                       ${blog.content_html}
                    </div>
    `;

  author_bio.innerHTML += `
    <img src="${dataidea_api}/${blog.author.image}" class="img-fluid rounded-circle mx-auto mb-3" style="width: 100px;">
                        <h3 class="text-primary mb-3">${blog.author.name}</h3>
                        <h3 class="text-uppercase mb-4" style="letter-spacing: 5px;">${blog.author.title}</h3>
                        <p class="text-white m-0">${blog.author.profile}</p>`;

  recent_blogs.forEach((blog) => {
    recent_blogs_container.innerHTML += `
<a class="d-flex align-items-center text-decoration-none mb-3" href="">
                            <img class="img-fluid rounded" src="${dataidea_api}/${
      blog.cover_image
    }" height="80px" width="80px" alt="">
                            <div class="pl-3">
                                <h6 class="m-1">${blog.title}</h6>
                                <small>${blog.date.slice(0, 10)}</small>
                            </div>
                        </a>`;
  });
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

displayBlog();
getCategories();
