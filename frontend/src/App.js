import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import { Room, Star } from "@material-ui/icons";
import "./app.css";

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 46,
    longitude: 17,
    zoom: 4,
  });

  return (
    <div className="App">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/healmasud/cl1lyr23z002s14qayhdct9wd"
      >
        <Marker
          latitude={48.8584}
          longitude={2.2945}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <Room style={{ fontSize: viewport.zoom * 7, color: "slateblue" }} />
        </Marker>
        <Popup
          latitude={48.8584}
          longitude={2.2945}
          closeButton={true}
          closeOnClick={false}
          anchor="left"
        >
          <div className="card">
            <label className="place">Place</label>
            <h4>Eifell Tower</h4>
            <label>Review</label>
            <p className="desc">Betiful Place</p>
            <label>Rating</label>
            <div className="stars">
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
              <Star className="star" />
            </div>
            <label>Information</label>
            <span className="username">
              Created by <b>Abdulla</b>
            </span>
            <span className="date">1 hour ago</span>
          </div>
        </Popup>
      </ReactMapGL>
    </div>
  );
}

export default App;
