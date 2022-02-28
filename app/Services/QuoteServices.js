import { ProxyState } from "../AppState.js"
import { Quote } from "../Models/QuoteModel.js"
import { sandboxapi } from "./axiosService.js"


class QuoteService {

    async getquote() {

        const res = await sandboxapi.get('quotes')
        ProxyState.quote = new Quote(res.data)
        console.log(ProxyState.quote)

    }
}

export const quoteService = new QuoteService();