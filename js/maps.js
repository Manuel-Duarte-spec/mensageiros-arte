
const map = L.map('map').setView([-16.6799, -49.2563], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

const cidades = [
    {nome:'Goiânia', lat:-16.6869, lng:-49.2648},
    {nome:'Pirenópolis', lat:-15.8298, lng:-48.9635},
    {nome:'Trindade', lat:-16.7159, lng:-49.4960},
    {nome:'Goiás', lat:-15.9322, lng:-49.9758},
    {nome:'Aruanã', lat:-14.8358, lng:-50.2883}
];

cidades.forEach(c => {
    L.marker([c.lat, c.lng]).addTo(map)
      .bindPopup(`<b>${c.nome}</b><br>Local documentado no projeto Mensageiros da Arte.`);
});
