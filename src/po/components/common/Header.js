import {BaseComponent} from "./BaseComponent.js";


export class Header extends BaseComponent{
    constructor() {
        super("div.TDbJKc");
    }

    get searchFieldButton(){
        return this.rootElement.$(".YSM5S");
    }

    get searchField(){
        return this.rootElement.$(".mb2a7b");
    }

    async searchInSearchField(text){
        await this.searchFieldButton.click();
        await this.searchField.waitForDisplayed();
        await this.searchField.setValue(text);
        await browser.keys('Enter');
    }
}