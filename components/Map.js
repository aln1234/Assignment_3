import { Component } from "react";
import ReactMapGL from "react-map-gl";

class Map extends Component {
  state = {
    viewport: {
      width: "1440px",
      height: "700px",
      latitude: 27.786880437039336,
      longitude: 85.32745380972857,

      zoom: 13,
    },
  };

  render() {
    return (
      <div className="flex flex-row gap-4 items-center max-w-7xl ">
        <div className="ml-2">
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              defaultChecked
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault1"
            >
              Province Layer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault2"
            >
              District Layer
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexRadioDefault2"
            >
              Municipality
            </label>
          </div>
        </div>
        <div className="mt-2 mr-12">
          <ReactMapGL
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxApiAccessToken="pk.eyJ1IjoiYWxuMTIzIiwiYSI6ImNqdTNybTN3MzBxZjQzeW83cDdubXhtODYifQ.1lKZvftA9PTq2XepnR3dzQ"
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({ viewport })}
          />
        </div>
      </div>
    );
  }
}

export default Map;

