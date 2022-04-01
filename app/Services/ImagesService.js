import { ProxyState } from "../AppState.js";
import { Picture } from "../Models/ImageModel.js";
import { sandboxapi } from "./AxiosService.js";




export class ImageService {
    constructor() {

    }
    async getimage() {

        const res = await sandboxapi.get('images')
        console.log(res.data)
        ProxyState.test = new Picture(res.data)

    }
}

export const imageService = new ImageService();