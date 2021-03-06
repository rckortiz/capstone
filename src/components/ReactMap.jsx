import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl'
import Marker from 'react-map-gl'

class ReactMap extends Component {
  state = {
    viewport: {
      width: 140,
      height: 250,
      latitude: 26.651114,
      longitude: -81.107549,
      zoom: 7
    }
  }
  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={
            'pk.eyJ1IjoicmNrb3J0aXoiLCJhIjoiY2sxOWVnaHU3MHFqODNjbjJ0YXRkbDN3YiJ9.8CQCDOpTUfLNWXb4j6lgGw'
          }
          mapStyle="mapbox://styles/rckortiz/ck19o4l3k6pat1ctdxxrd0ly1"
        />
        <Marker
          coordinates={[26.651114, -81.107549]}
          anchor="top"
          mapboxApiAccessToken={
            'pk.eyJ1IjoicmNrb3J0aXoiLCJhIjoiY2sxOWVnaHU3MHFqODNjbjJ0YXRkbDN3YiJ9.8CQCDOpTUfLNWXb4j6lgGw'
          }
        ></Marker>
      </div>
    )
  }
}

export default ReactMap

// // API KEY = AIzaSyAwu8Sd3UX1HqZs-7iyS_hNDHfC3I4-FZc
