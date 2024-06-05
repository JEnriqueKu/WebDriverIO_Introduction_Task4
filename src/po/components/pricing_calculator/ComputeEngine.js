import {BaseComponent} from "../common/BaseComponent.js";

export class ComputeEngine extends BaseComponent{
    constructor() {
        super(".U4lDT");
    }

    // selectors

    get plusNumberOfInstances(){
        return this.rootElement.$("div[class='QiFlid'] button[aria-label='Increment']");
    }

    get machineType(){
        return this.rootElement.$("div[jsname='kgDJk']");
    }

    get machineTypeOptionN1Standard8(){
        return this.rootElement.$("li.MCs1Pd[data-value=\"n1-standard-8\"]")
    }
    
    get addGpusButton(){
        return this.rootElement.$("button[aria-label=\"Add GPUs\"]")
    }

    get gpuModelButton(){
        return this.rootElement.$("div[data-field-type=\"158\"]")
    }

    get numberOfGpusButton(){
        return this.rootElement.$("div[data-field-type=\"174\"]")
    }

    get localSsdButton(){
        return this.rootElement.$("div[data-field-type=\"180\"]")
    }

    get regionButton(){
        return this.rootElement.$("div[data-field-type=\"115\"]")
    }

    // functions

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
        const modelSelector = await this.rootElement.$(models[model.toUpperCase()]);
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
        const gpuSelector = await this.rootElement.$(gpuOptions[numGpus]);
        await gpuSelector.click();
    }

    async selectLocalSSD2x375GB(){
        await this.localSsdButton.click();
        const localStoreSelector = await this.rootElement.$("ul[aria-label=\"Local SSD\"] li[data-value=\"2\"]");
        await localStoreSelector.click();
    }

    async selectRegionNetherlands(){
        await this.regionButton.click();
        await (this.rootElement.$("li[data-value=\"europe-west4\"]")).waitForDisplayed();
        await this.rootElement.$("li[data-value=\"europe-west4\"]").click();
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
        const committedUsageSelector = await this.rootElement.$(timeSelectors[time.toLowerCase()] + " + label");
        await committedUsageSelector.click();
    }

}