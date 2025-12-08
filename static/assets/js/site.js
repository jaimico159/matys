const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const siteHeader = document.querySelector(".site-header");

if (navToggle && primaryNav) {
  const syncNavState = () => {
    if (window.innerWidth > 900) {
      primaryNav.setAttribute("data-open", "true");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    } else if (!navToggle.classList.contains("is-open")) {
      primaryNav.setAttribute("data-open", "false");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("nav-open");
    }
  };

  syncNavState();

  const toggleNav = () => {
    const isOpen = primaryNav.getAttribute("data-open") === "true";
    const nextState = !isOpen;
    primaryNav.setAttribute("data-open", String(nextState));
    navToggle.setAttribute("aria-expanded", String(nextState));
    navToggle.classList.toggle("is-open", nextState);
    document.body.classList.toggle("nav-open", nextState);
  };

  navToggle.addEventListener("click", toggleNav);

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (primaryNav.getAttribute("data-open") === "true") {
        toggleNav();
      }
    });
  });

  window.addEventListener("resize", syncNavState);
}

if (siteHeader) {
  const handleScroll = () => {
    if (window.scrollY > 24) {
      siteHeader.classList.add("is-scrolled");
    } else {
      siteHeader.classList.remove("is-scrolled");
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
}

window.initMap = () => {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  const coordinates = { lat: -16.393984, lng: -71.53321 };
  const map = new google.maps.Map(mapElement, {
    zoom: 17,
    center: coordinates,
    disableDefaultUI: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.business",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dadada" }],
      },
      {
        featureType: "road.highway",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9c9c9" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9e9e9e" }],
      },
    ],
  });

  const marker = new google.maps.Marker({
    position: coordinates,
    map,
    title: "Matys Laundry",
  });

  marker.addListener("click", () => {
    window.open("https://maps.app.goo.gl/N3HxF7iBgk5y2L1dA", "_blank");
  });
};
