
// JavaScript to handle toggle button for responsive design
function toggleNavbar() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}




// Function to toggle the mobile navigation menu
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.classList.toggle("show-menu");
}

// Add event listener to the hamburger icon
const hamburgerIcon = document.querySelector(".hamburger-icon");
hamburgerIcon.addEventListener("click", toggleMobileMenu);

// Function to handle form submission (contact form)
function handleFormSubmit(event) {
  event.preventDefault();
  // Implement form submission logic here
  // You can use AJAX to submit the form data to the server
  // Display a success message or handle form validation errors
}

// Add event listener to the contact form
const contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", handleFormSubmit);

// Sample data for projects in the portfolio section (replace this with your projects)
const projects = [
  {
    title: "Project 1",
    image: "images/project1.jpg",
    description: "Description of Project 1",
    // Add more project data here...
  },
  {
    title: "Project 2",
    image: "images/project2.jpg",
    description: "Description of Project 2",
    // Add more project data here...
  },
  // Add more projects here...
];

// Function to generate project cards in the portfolio section
function generateProjectCards() {
  const portfolioSection = document.querySelector("#portfolio");
  const projectCards = projects.map((project) => `
      <div class="project-card">
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `);
  portfolioSection.innerHTML = projectCards.join("");
}

// Call the function to generate project cards when the page loads
document.addEventListener("DOMContentLoaded", generateProjectCards);



// JavaScript to handle the collapsible work experience sections
const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});

// JavaScript to handle the collapsible education items
const educationItems = document.querySelectorAll(".education-item");

educationItems.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsed");
    const details = this.querySelectorAll("p");
    details.forEach((p) => {
      p.style.display = this.classList.contains("collapsed") ? "none" : "block";
    });
  });
});


// JavaScript to handle hobby card click event (optional)
const hobbyCards = document.querySelectorAll(".hobby-card");

hobbyCards.forEach((card) => {
  card.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});


// JavaScript to handle smooth scrolling (optional)
const footerLinks = document.querySelectorAll(".footer-links a");

footerLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
