
import React from "react"
const LoaderSpinner = ({ color, size = 32 }) => {
    return <div className="spinner-border" role="status" style={{ fontSize: size / 2, color, width: size + "px", height: size + "px" }}>
    </div>
}
export default LoaderSpinner;