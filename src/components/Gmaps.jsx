import React, { Component } from 'react'

class componentName extends Component {
  render() {
    return (
      <div>
        <div id="map"></div>
        <script>
          const initmap =()=>
          {(uluru = { lat: 23.344, lng: 131.036 })}
        </script>
        <script
          async
          defer
          src="https://maps.googleapis.com/maps.api/js?key=AIzaSyAwu8Sd3UX1HqZs-7iyS_hNDHfC3I4-FZc&callback=initMap"
        ></script>
      </div>
    )
  }
}

export default componentName

// // API KEY = AIzaSyAwu8Sd3UX1HqZs-7iyS_hNDHfC3I4-FZc

// const Gmaps = () => {
//   const Initmap = () => {
//     let uluru = { lat: -25.344, lng: 131.036 };
//     let map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 4, center: uluru});
//     let marker = new google.maps.Marker({position: uluru, map: map});
//     }

//   }

//   return (
//     <div>
//       <div id="map"></div>
//       <script>function</script>
//     </div>
//   )
// }

// export default Gmaps
