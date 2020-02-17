import React, { useContext } from "react"
import "./overlay.scss"
import { GlobalStateContext, GlobalDispatchContext } from "../context/store"

const Overlay = () => {
  const state = useContext(GlobalStateContext)
  const dispatch = useContext(GlobalDispatchContext)
  const { showOverlay, url } = state

  var overlayItem = document.querySelector(".overlay-item")
  var stopVideo = function(element) {
    var iframe = element.querySelector("iframe")
    var video = element.querySelector("video")
    if (iframe) {
      var iframeSrc = iframe.src
      iframe.src = iframeSrc
    }
    if (video) {
      video.pause()
    }
  }

  const styleOverlay = {
    display: showOverlay ? "flex" : "none",
  }
  const youtubeUrl = `https://www.youtube.com/embed/${url}`
  return (
    <div style={styleOverlay} className="overlay">
      <div className="overlay-item">
        <iframe
          title="youtube-player"
          id="ytplayer"
          type="text/html"
          width="100%"
          height="100%"
          src={youtubeUrl}
          frameBorder="0"
          allow="fullscreen"
        ></iframe>
        <button
          onClick={() => {
            dispatch({ type: "hideOverlay" })
            stopVideo(overlayItem)
          }}
          className="overlay-close"
        >
          X
        </button>
        This is overlay item
      </div>
    </div>
  )
}

export default Overlay
