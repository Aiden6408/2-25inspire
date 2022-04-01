import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImagesService.js"


function _drawImage() {
    console.log(ProxyState.test)
    document.body.style.backgroundImage = `url('${ProxyState.test.url}')`


}



export class ImageController {
    constructor() {
        ProxyState.on('test', _drawImage)
        this.getimage()
        console.log("image controller")


    }
    async getimage() {
        try {
            await imageService.getimage()
        } catch (error) {
            console.error(error)
        }

    }


}