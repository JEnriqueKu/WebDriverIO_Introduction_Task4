import {BaseComponent} from "../common/BaseComponent.js";

export class CostEstimateSummary extends BaseComponent{
    constructor() {
        super(".qBohdf.AlLELb");
    }


    get machineType() {
        return this.rootElement.$("//span[text()='Machine type']/following-sibling::span");
    }

    get gpuModel() {
        return this.rootElement.$("//span[text()='GPU Model']/following-sibling::span");
    }

    get numberOfGpus() {
        return this.rootElement.$("//span[text()='Number of GPUs']/following-sibling::span");
    }

    get localSsd() {
        return this.rootElement.$("//span[text()='Local SSD']/following-sibling::span");
    }

    get numberOfInstances() {
        return this.rootElement.$("//span[text()='Number of Instances']/following-sibling::span");
    }

    get operatingSystem() {
        return this.rootElement.$("//span[text()='Operating System / Software']/following-sibling::span");
    }

    get provisionalModel() {
        return this.rootElement.$("//span[text()='Provisioning Model']/following-sibling::span");
    }

    get addGpus() {
        return this.rootElement.$("//span[text()='Add GPUs']/following-sibling::span");
    }

    get region() {
        return this.rootElement.$("//span[text()='Region']/following-sibling::span");
    }

    get committedUse() {
        return this.rootElement.$("//span[text()='Committed use discount options']/following-sibling::span");
    }

}