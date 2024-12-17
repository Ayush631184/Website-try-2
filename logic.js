document.addEventListener("DOMContentLoaded", () => {
  // Header animation
  const header = document.querySelector("header");
  header.style.opacity = "0";
  header.style.transform = "translateY(-20px)";
  setTimeout(() => {
    header.style.transition = "all 1s ease";
    header.style.opacity = "1";
    header.style.transform = "translateY(0)";
  }, 200);

  // Main logo animation
  const mainLogo = document.querySelector("main .logo img");
  mainLogo.style.opacity = "0";
  mainLogo.style.transform = "scale(0.8)";
  setTimeout(() => {
    mainLogo.style.transition = "all 1s ease";
    mainLogo.style.opacity = "1";
    mainLogo.style.transform = "scale(1)";
  }, 600);

  // Search bar animation
  const searchBar = document.querySelector(".search_bar");
  searchBar.style.opacity = "0";
  searchBar.style.transform = "translateY(20px)";
  setTimeout(() => {
    searchBar.style.transition = "all 1s ease";
    searchBar.style.opacity = "1";
    searchBar.style.transform = "translateY(0)";
  }, 1000);

  // Background fade-in animation
  const background = document.querySelector("main .background img");
  background.style.opacity = "0";
  setTimeout(() => {
    background.style.transition = "opacity 1.5s ease";
    background.style.opacity = "0.4";
  }, 400);
});