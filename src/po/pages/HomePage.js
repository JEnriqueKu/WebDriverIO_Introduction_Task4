import {Header} from "../components/common/Header.js";
import {openPage} from "../../utils/commonFunctions.js";


export class HomePage {
    constructor() {
        this.url = "https://cloud.google.com/";
        this.header = new Header();
    }

    get pageTitle(){
        return "Cloud Computing Services | Google Cloud";
    }

    open(){
        return openPage(this.url);
    }

}