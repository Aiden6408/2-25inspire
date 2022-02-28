import { ProxyState } from "../AppState.js"
import { quoteService } from "../Services/QuoteServices.js"



function _drawquote() {

    let quote = ProxyState.quote
    document.getElementById('quote').innerHTML = quote.Template






}

export class QuoteController {
    constructor() {
        console.log("qoute controller")
        quoteService.getquote()
        ProxyState.on('quote', _drawquote)

        _drawquote()
    }

}