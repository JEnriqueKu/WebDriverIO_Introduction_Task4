export class SummaryPage {

    constructor() {
    }

    get pageTitle(){
        return "Google Cloud Estimate Summary";
    }

    // selectors

    get machineType() {
        return $("//span[text()='Machine type']/following-sibling::span");
    }

    get gpuModel() {
        return $("//span[text()='GPU Model']/following-sibling::span");
    }

    get numberOfGpus() {
        return $("//span[text()='Number of GPUs']/following-sibling::span");
    }

    get localSsd() {
        return $("//span[text()='Local SSD']/following-sibling::span");
    }

    get numberOfInstances() {
        return $("//span[text()='Number of Instances']/following-sibling::span");
    }

    get operatingSystem() {
        return $("//span[text()='Operating System / Software']/following-sibling::span");
    }

    get provisionalModel() {
        return $("//span[text()='Provisioning Model']/following-sibling::span");
    }

    get addGpus() {
        return $("//span[text()='Add GPUs']/following-sibling::span");
    }

    get region() {
        return $("//span[text()='Region']/following-sibling::span");
    }

    get committedUse() {
        return $("//span[text()='Committed use discount options']/following-sibling::span");
    }

}