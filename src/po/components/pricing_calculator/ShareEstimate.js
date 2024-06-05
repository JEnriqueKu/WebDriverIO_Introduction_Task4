import {BaseComponent} from "../common/BaseComponent.js";

export class ShareEstimate extends BaseComponent{
    constructor() {
        super("div.ZgevAb");
    }

    get openEstimateSummary(){
        return this.rootElement.$("a[track-name='open estimate summary']");
    }

}