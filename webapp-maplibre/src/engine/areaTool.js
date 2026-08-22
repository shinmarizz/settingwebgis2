import { geojsonToWKT } from "@terraformer/wkt"
import { API_BASE_URL } from "../config"

export function storeAreaGeometry(event) {
    const geometry = event.features[0].geometry
    const wkt = geojsonToWKT(geometry)
    
    computeArea(wkt).then((value) => {
        console.log(value)
    })
}

async function computeArea(wkt){
    const response = await fetch(`${API_BASE_URL}L/spatial_computation/area`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ geometry: wkt })
    })

    const result = await response.json()

    return result
}