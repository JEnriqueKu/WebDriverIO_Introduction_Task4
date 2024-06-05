import {BaseComponent} from "../common/BaseComponent.js";

export class CostDetails extends BaseComponent{
    constructor() {
        super("div.uMSQA");
    }

    get estimatedCost(){
        return this.rootElement.$(".wFCpDb");
    }

    get shareButton(){
        return $("button[aria-label='Open Share Estimate dialog'] span[jsname='Xr1QTb']");
    }

    async estimatedCostText(){
        let text = (await this.estimatedCost.getText()).replace(/\n+/g, " ");
        text = text.replace(/\$\d{1,3}(,\d{3})*(\.\d{1,2})?/, '$$[amount]');
        return text;
    }

    async clickShareButton(){
        await browser.pause(500);
        await this.shareButton.click();
    }
}