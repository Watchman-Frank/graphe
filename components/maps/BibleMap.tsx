'use client';
import { useEffect, useRef } from 'react';
import type { Map as LeafletMap } from 'leaflet';

export interface MapLocation {
  name: string;
  lat: number;
  lng: number;
  description: string;
  passages?: string[];
  type?: 'city' | 'landmark' | 'water' | 'mountain' | 'region';
}

export interface BibleMapData {
  id: string;
  title: string;
  center: [number, number];
  zoom: number;
  locations: MapLocation[];
}

interface Props {
  mapData: BibleMapData;
}

const TYPE_COLORS: Record<string, string> = {
  city:     '#C9A84C',
  landmark: '#E87B7B',
  water:    '#7BB8E8',
  mountain: '#B8E87B',
  region:   '#A87BE8',
};

export default function BibleMap({ mapData }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    // Dynamic import to avoid SSR issues
    import('leaflet').then(L => {
      // Fix default marker icons
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      if (!containerRef.current || mapRef.current) return;

      const map = L.map(containerRef.current, {
        center: mapData.center,
        zoom: mapData.zoom,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // Tile layer — CartoDB Voyager (clean, readable, free)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Add markers
      mapData.locations.forEach(loc => {
        const color = TYPE_COLORS[loc.type ?? 'city'];

        const icon = L.divIcon({
          className: '',
          html: `
            <div style="
              position:relative;
              display:flex;
              flex-direction:column;
              align-items:center;
            ">
              <div style="
                width:14px;height:14px;
                background:${color};
                border:2.5px solid white;
                border-radius:50%;
                box-shadow:0 2px 6px rgba(0,0,0,0.5);
                cursor:pointer;
              "></div>
              <div style="
                margin-top:2px;
                background:rgba(13,12,10,0.85);
                color:${color};
                font-size:10px;
                font-weight:700;
                padding:1px 5px;
                border-radius:4px;
                white-space:nowrap;
                pointer-events:none;
                border:1px solid ${color}40;
                backdrop-filter:blur(4px);
              ">${loc.name}</div>
            </div>`,
          iconSize: [80, 36],
          iconAnchor: [40, 7],
          popupAnchor: [0, -20],
        });

        const passagesHtml = loc.passages?.length
          ? `<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:4px;">
              ${loc.passages.map(p => `<span style="background:rgba(201,168,76,0.15);color:#C9A84C;font-size:10px;padding:2px 6px;border-radius:4px;border:1px solid rgba(201,168,76,0.3)">${p}</span>`).join('')}
             </div>`
          : '';

        const popup = L.popup({
          maxWidth: 260,
          className: 'bible-popup',
        }).setContent(`
          <div style="font-family:sans-serif;padding:4px 2px;">
            <p style="font-weight:700;font-size:13px;color:#C9A84C;margin:0 0 4px;">${loc.name}</p>
            <p style="font-size:11px;color:#c8b89a;line-height:1.5;margin:0;">${loc.description}</p>
            ${passagesHtml}
          </div>`);

        L.marker([loc.lat, loc.lng], { icon }).addTo(map).bindPopup(popup);
      });

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // When map data changes, fly to new center and update markers
  useEffect(() => {
    if (!mapRef.current) return;
    import('leaflet').then(L => {
      if (!mapRef.current) return;
      const map = mapRef.current;

      // Remove existing markers
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) map.removeLayer(layer);
      });

      // Fly to new center
      map.flyTo(mapData.center, mapData.zoom, { duration: 1.2 });

      // Re-add markers
      mapData.locations.forEach(loc => {
        const color = TYPE_COLORS[loc.type ?? 'city'];

        const icon = L.divIcon({
          className: '',
          html: `
            <div style="position:relative;display:flex;flex-direction:column;align-items:center;">
              <div style="width:14px;height:14px;background:${color};border:2.5px solid white;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.5);cursor:pointer;"></div>
              <div style="margin-top:2px;background:rgba(13,12,10,0.85);color:${color};font-size:10px;font-weight:700;padding:1px 5px;border-radius:4px;white-space:nowrap;pointer-events:none;border:1px solid ${color}40;">${loc.name}</div>
            </div>`,
          iconSize: [80, 36],
          iconAnchor: [40, 7],
          popupAnchor: [0, -20],
        });

        const passagesHtml = loc.passages?.length
          ? `<div style="margin-top:8px;display:flex;flex-wrap:wrap;gap:4px;">${loc.passages.map(p => `<span style="background:rgba(201,168,76,0.15);color:#C9A84C;font-size:10px;padding:2px 6px;border-radius:4px;border:1px solid rgba(201,168,76,0.3)">${p}</span>`).join('')}</div>`
          : '';

        const popup = L.popup({ maxWidth: 260, className: 'bible-popup' }).setContent(`
          <div style="font-family:sans-serif;padding:4px 2px;">
            <p style="font-weight:700;font-size:13px;color:#C9A84C;margin:0 0 4px;">${loc.name}</p>
            <p style="font-size:11px;color:#c8b89a;line-height:1.5;margin:0;">${loc.description}</p>
            ${passagesHtml}
          </div>`);

        L.marker([loc.lat, loc.lng], { icon }).addTo(map).bindPopup(popup);
      });
    });
  }, [mapData]);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', height: '100%', minHeight: 420 }}
    />
  );
}
