const lat = 40.7459;
const lng = -74.0048;

// Ініціалізує карту Leaflet із вибраною локацією.
const map = L.map("map", {
  scrollWheelZoom: false,
}).setView([lat, lng], 19);

L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap",
}).addTo(map);

const redPinIcon = L.icon({
  iconUrl: "./assets/icons/pin.svg",
  iconSize: [106, 106],
  iconAnchor: [70, 106],
  popupAnchor: [0, -106],
});

const popupContent = `
<div style="font-family: sans-serif; line-height: 1.4; color: #333;">
    <h3 style="margin: 0 0 5px; font-weight: bold;">High Line Park</h3>
    <p style="margin: 0; font-size: 13px;">New York, NY 10011</p>
    <p style="margin: 0; font-size: 13px;">+001 356 868 2454</p>
</div>
`;

const marker = L.marker([lat, lng], { icon: redPinIcon }).addTo(map);

marker
  .bindPopup(popupContent, {
    className: "custom-popup",
    maxWidth: 250,
    minWidth: 200,
  })
  .openPopup();
