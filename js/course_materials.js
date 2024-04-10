const dataidea_url = "https://backend.dataidea.org";

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

const getLearningMaterials = async () => {
  try {
    const course_material_response = await fetch(
      dataidea_url + "/school/courses"
    );
    const course_materials = await course_material_response.json();
    return course_materials;
  } catch (error) {
    console.error(error);
  }
};

const displayLearningMaterials = async () => {
  const course_materials_container = document.querySelector(
    ".learning-materials"
  );

  const course_materials = await getLearningMaterials();
  course_materials.forEach((course_material) => {
    console.log(course_material);
    course_materials_container.innerHTML += `
  <div class="col-lg-4 col-md-6 mb-4">
      <div class="rounded overflow-hidden mb-2">
          <img class="img-fluid" src="${dataidea_url}${course_material.cover_image}" alt="">
          <div class="bg-secondary p-4">
              <div class="d-flex justify-content-between mb-3">
                  <small class="m-0"><i class="fa fa-users text-primary mr-2"></i>${course_material.student_number} Students</small>
                  <small class="m-0"><i class="far fa-clock text-primary mr-2"></i>${course_material.duration} weeks</small>
              </div>
              <a class="h5" href="">${course_material.name}</a>
              <div class="border-top mt-4 pt-4">
                  <div class="d-flex justify-content-between">
                      <h6 class="m-0"><i class="fa fa-star text-primary mr-2"></i>${course_material.rating} <small></small></h6>
                      <h5 class="m-0">$${course_material.cost}</h5>
                  </div>
              </div>
              <div>
                    <a href="${dataidea_url}/school/download-course-material/${course_material.id}"
                      class="mt-3 btn btn-primary font-weight-semi-bold mt-2 btn-block py-3"
                      type="submit"
                    >
                      Download (Free)
                    </a>
                  </div>
          </div>
      </div>
  </div>
  `;
  });
};

displayLearningMaterials();
