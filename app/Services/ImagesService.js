import { ProxyState } from "../AppState.js";
import { sandboxapi } from "./AxiosService.js";




export class ImageService {
    constructor() {

    }
    async getimage() {

        const res = await sandboxapi.get('images')
        ProxyState.image = new Image(res.data)
        console.log(res.data)

    }
}

export const imageService = new ImageService();