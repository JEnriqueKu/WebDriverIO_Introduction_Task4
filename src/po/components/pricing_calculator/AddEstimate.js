import {BaseComponent} from "../common/BaseComponent.js";

export class AddEstimate extends BaseComponent{
    constructor() {
        super("div .bwApif-cnG4Wd");
    }

    get computeEngine(){
        return this.rootElement.$("//h2[text()='Compute Engine']")
    }


}