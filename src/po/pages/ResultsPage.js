export class ResultsPage {
    constructor() {
    }

    get desiredResult(){
        return $(".gsc-thumbnail-inside [href=\"https://cloud.google.com/products/calculator\"]")
    }

}