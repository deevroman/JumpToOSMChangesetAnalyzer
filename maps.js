module.exports = [
   {
    name: "OpenStreetMap",
    category: "Changeset Analizers",
    domain: "www.openstreetmap.org",
    urlPattern: /www\.openstreetmap\.org\/changeset/,
    getUrl(changeset) {
      return 'https://www.openstreetmap.org/changeset/' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changeset\/(\d[0-9]*)/);
      return [changeset];
    },
  },
   {
    name: "OSMCha",
    category: "Changeset Analizers",
    domain: "osmcha.mapbox.com",
    urlPattern: /osmcha\.org\/changesets/,
    getUrl(changeset) {
      return 'https://osmcha.org/changesets/' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changesets\/(\d[0-9]*)/);
      return [changeset];
    },
  },
  {
    name: "achavi",
    category: "Changeset Analizers",
    domain: "overpass-api.de",
    urlPattern: /overpass-api\.de\/achavi/,
    getUrl(changeset) {
      return 'https://overpass-api.de/achavi/?changeset=' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changeset=(\d[0-9]*)/);
      return [changeset];
    },
  },
  {
    name: "ResultMaps",
    category: "Changeset Analizers",
    domain: "neis-one.org",
    urlPattern: /resultmaps\.neis\-one\.org\/osm\-change\-viz/,
    getUrl(changeset) {
      return 'https://resultmaps.neis-one.org/osm-change-viz?c=' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/osm-change-viz\?c=(\d[0-9]*)/);
      return [changeset];
    },
  },
  {
    name: "osm-revert",
    category: "Changeset Analizers",
    domain: "revert.monicz.dev",
    urlPattern: /\//,
    getUrl(changeset) {
      return 'https://revert.monicz.dev?changesets=' + changeset;
    },
    getLatLonZoom(url) {
      const [, changeset] = url.match(/changesets\?c=(\d[0-9]*)/);
      return [changeset];
    },
  },
];
