import { MapContainer, TileLayer, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const RouteMap = () => {
  const route: [number, number][] = [
    [48.170069, 17.280419],
    [48.171344, 17.293903],
    [48.171521, 17.295407],
    [48.173990, 17.296470],
    [48.174723, 17.297198],
    [48.175713, 17.297696],
    [48.177371, 17.297999],
    [48.177730, 17.298185],
    [48.177904, 17.298557],
    [48.179106, 17.298848],
    [48.179607, 17.298743],
    [48.180206, 17.298545],
    [48.180503, 17.297187],
    [48.180392, 17.293847],
    [48.180222, 17.293047],
    [48.179908, 17.292366],
    [48.180144, 17.290723],
    [48.179086, 17.289211],
    [48.179631, 17.288021],
    [48.179863, 17.286943],
    [48.180178, 17.283757],
    [48.179122, 17.283392],
    [48.178664, 17.282566],
    [48.177397, 17.282415],
    [48.177155, 17.282218],
    [48.172411, 17.279650],
    [48.172552, 17.281123],
    [48.170019, 17.279762],
    [48.170069, 17.280419]
    ];

  return (
    <MapContainer center={[48.175016, 17.290808]} zoom={(window.innerWidth >= 1024) ? 15 : 14} className="w-full h-64 mapa">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Polyline positions={route} color="blue" />
    </MapContainer>
  );
};

export default RouteMap;
