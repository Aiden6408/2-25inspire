import { ProxyState } from "../AppState.js"
import { imageService } from "../Services/ImagesService.js"


function _drawImage() {
    console.log(ProxyState.image)
    // document.getElementById('body').style.backgroundImage = `url('${ProxyState.image}')`






}



export class ImageController {
    constructor() {
        ProxyState.on('image', _drawImage)
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