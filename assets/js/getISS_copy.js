        const mymap = L.map('issMap').setView([0, 0], 6);
      
        
        L.mapbox.accessToken = 'pk.eyJ1IjoicmVhZHJpMjA1IiwiYSI6ImNrYzU1dGFjbjBlamwyc3RpZmtpeGNjcTYifQ.nhMHaWYNmRRyAeYUBuPJrA';
        
        const attribution = '© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

        const tileSize = 512;
        const maxZoom = 18;
        const zoomOffset = -1;

        const tileUrl = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' + L.mapbox.accessToken;
        const tiles = L.tileLayer(tileUrl, { attribution }, tileSize, maxZoom, zoomOffset);
        
        tiles.addTo(mymap);

      // Making a marker with a custom icon
      const issIcon = L.icon({
        iconUrl: 'assets/images/ISS.png',
        iconSize: [50, 32],
        iconAnchor: [25, 16]
      });
      let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

      const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

      let firstTime = true;

      async function getISS() {
        const response = await fetch(api_url);
        const data = await response.json();
        const { latitude, longitude, velocity } = data;
        
        // Always set the view to current lat lon and zoom!
        mymap.setView([latitude, longitude], mymap.getZoom());
        marker.setLatLng([latitude, longitude]);
        
        console.log(latitude, longitude, velocity);

        document.getElementById('lat').textContent = latitude.toFixed(2);
        document.getElementById('lon').textContent = longitude.toFixed(2);
        document.getElementById('velocity').textContent = velocity.toFixed(0);
      }      
      
      getISS();
      setInterval(getISS, 1000);
