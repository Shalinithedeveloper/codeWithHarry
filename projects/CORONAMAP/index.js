function updateMap() {
  fetch("/data.json")
    .then(response => response.json())
    .then(rsp => {
      console.log(rsp)
      rsp.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        if (cases>255){
          color = "(255,0,0)"
        }
        else{
          color = `rgb(${cases},0,0)`;
        }




        const marker = new mapboxgl.Marker({
          draggable: false,
          color: color
        })
          .setLngLat([longitude, latitude])
          .addTo(map);




        function onDragEnd() {
          const lngLat = marker.getLngLat();
          coordinates.style.display = 'block';
          coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
        }

        marker.on('dragend', onDragEnd);
      });
    })
}

updateMap();

let array = 2;
console.log(array);