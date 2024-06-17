export class ResultsPage {
    constructor() {
    }

    get pageTitle(){
        return "Search results for \"Google Cloud Platform Pricing Calculator\" | Google Cloud";
    }

    get desiredResult(){
        return $(".gsc-thumbnail-inside [href=\"https://cloud.google.com/products/calculator\"]")
    }

}