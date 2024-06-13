import {changeTab} from "../../utils/commonFunctions.js"


export class PricingCalculatorPage {
    constructor() {
    }

    // selectors

    get addEstimateButton(){
        return $("span.UywwFc-vQzf8d")
    }

    get computeEngine(){
        return $("//h2[text()='Compute Engine']")
    }

    get plusNumberOfInstances(){
        return $("div.QiFlid button[aria-label='Increment']");
    }

    get machineType(){
        return $("div[jsname='kgDJk']");
    }

    get machineTypeOptionN1Standard8(){
        return $("li.MCs1Pd[data-value=\"n1-standard-8\"]")
    }

    get addGpusButton(){
        return $("button[aria-label=\"Add GPUs\"]")
    }

    get gpuModelButton(){
        return $("div[data-field-type=\"158\"]")
    }

    get numberOfGpusButton(){
        return $("div[data-field-type=\"174\"]")
    }

    get localSsdButton(){
        return $("div[data-field-type=\"180\"]")
    }

    get regionButton(){
        return $("div[data-field-type=\"115\"]")
    }

    get estimatedCost(){
        return $(".wFCpDb");
    }

    get shareButton(){
        return $("button[aria-label='Open Share Estimate dialog'] span[jsname='Xr1QTb']");
    }

    get openEstimateSummary(){
        return $("a[track-name='open estimate summary']");
    }

    // functions

    changeTab(){
        return changeTab();
    }

    async closeMessageContainer(){
        try {
            await $("#container .close").click();
        } catch (e){

        }
    }

    async setNumberOfInstancesIn(instances){
        for (let i = 1; i < instances; i++) {
            await this.plusNumberOfInstances.click();
        }
    }

    async selectMachineTypeN1Standard8(){
        await this.machineType.click();
        await this.machineTypeOptionN1Standard8.click();
    }

    /**
     *
     * @param model {'NVIDIA T4' | 'NVIDIA V100' | 'NVIDIA TESLA P4' | 'NVIDIA TESLA P100' | 'NVIDIA TESLA K80'}
     * @returns {Promise<void>}
     */
    async selectGPUModel(model){
        const models = {
            'NVIDIA T4': 'li[data-value="nvidia-tesla-t4"]',
            'NVIDIA V100': 'li[data-value="nvidia-tesla-v100"]',
            'NVIDIA TESLA P4': 'li[data-value="nvidia-tesla-p4"]',
            'NVIDIA TESLA P100': 'li[data-value="nvidia-tesla-p100"]',
            'NVIDIA TESLA K80': 'li[data-value="nvidia-tesla-k80"]'
        }
        await this.gpuModelButton.click();
        const modelSelector = await $(models[model.toUpperCase()]);
        await modelSelector.click();
    }

    /**
     *
     * @param numGpus {'1' | '2' | '4'}
     * @returns {Promise<void>}
     */
    async selectNumberOfGPUs(numGpus) {
        const gpuOptions = {
            '1': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"1\"]',
            '2': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"2\"]',
            '4': 'ul[aria-label=\"Number of GPUs\"] li[data-value=\"4\"]'
        };

        await this.numberOfGpusButton.click();
        const gpuSelector = await $(gpuOptions[numGpus]);
        await gpuSelector.click();
    }

    async selectLocalSSD2x375GB(){
        await this.localSsdButton.click();
        const localStoreSelector = await $("ul[aria-label=\"Local SSD\"] li[data-value=\"2\"]");
        await localStoreSelector.click();
    }

    async selectRegionNetherlands(){
        await this.regionButton.click();
        await ($("li[data-value=\"europe-west4\"]")).waitForDisplayed();
        await $("li[data-value=\"europe-west4\"]").click();
    }

    /**
     *
     * @param time {'None' | '1 Year' | '3 Years'}
     * @returns {Promise<void>}
     */
    async selectCommittedUsage(time){
        const timeSelectors = {
            'none': '.e2WL2b input[id="none"]',
            '1 year': '.e2WL2b input[id="1-year"]',
            '3 years': '.e2WL2b input[id="3-years"]'
        }
        const committedUsageSelector = await $(timeSelectors[time.toLowerCase()] + " + label");
        await committedUsageSelector.click();
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