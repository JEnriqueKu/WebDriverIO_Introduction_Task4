import {pages} from "../../po/index.js";
import {loadTestData} from "../../utils/commonFunctions.js";

const env = process.env.ENV;

describe('Google Cloud Pricing Calculator functionality Tests', () => {
    let testData;
    before( async  () => {
        testData = await loadTestData(env);
        await pages("HomePage").open();
        await browser.maximizeWindow();
        //search Google Cloud Platform Pricing Calculator
        await pages("HomePage").header.searchInSearchField(testData.searchQuery);
        await pages("ResultsPage").desiredResult.click()
        //open the form
        await pages("PricingCalculator").addEstimateButton.click();
        await pages("PricingCalculator").computeEngine.click();
        //filling the form
        await pages("PricingCalculator").setNumberOfInstancesIn(testData.instances);
        await pages("PricingCalculator").selectMachineTypeN1Standard8();
        await pages("PricingCalculator").addGpusButton.click();
        await pages("PricingCalculator").selectGPUModel(testData.gpuModel);
        await pages("PricingCalculator").closeMessageContainer();
        await pages("PricingCalculator").selectNumberOfGPUs(testData.numberOfGpus);
        await pages("PricingCalculator").selectLocalSSD2x375GB();
        await pages("PricingCalculator").selectRegionNetherlands();
        await pages("PricingCalculator").selectCommittedUsage(testData.committedUse);
    })

    it('should create an estimate with specified configurations and validate the price is calculated in the right section of the calculator', async () => {
        //get values
        const estimatedCost = await pages("PricingCalculator").estimatedCostText()
        const expectedCost = testData.expected.Cost;
        //check the price
        expect(estimatedCost).toEqual(expectedCost);

    });

    it('should verify the filled form data matches the summary', async () => {
        //Open estimate summary
        await pages("PricingCalculator").clickShareButton();
        await pages("PricingCalculator").openEstimateSummary.click();
        await pages("PricingCalculator").changeTab();
        //get values of Cost Estimate Summary
        const machineType = await pages("SummaryPage").machineType.getText();
        const gpuModel = await pages("SummaryPage").gpuModel.getText();
        const numberOfGpus = await pages("SummaryPage").numberOfGpus.getText();
        const localSsd = await pages("SummaryPage").localSsd.getText();
        const numberOfInstances = await pages("SummaryPage").numberOfInstances.getText();
        const operatingSystem = await pages("SummaryPage").operatingSystem.getText();
        const provisionalModel = await pages("SummaryPage").provisionalModel.getText();
        const addGpus = await pages("SummaryPage").addGpus.getText();
        const region = await pages("SummaryPage").region.getText();
        const committedUse = await pages("SummaryPage").committedUse.getText();
        // verify the values matches
        expect(machineType).toEqual(testData.expected.machineType);
        expect(gpuModel).toEqual(testData.expected.gpuModel);
        expect(numberOfGpus).toEqual(testData.expected.numberOfGpus);
        expect(localSsd).toEqual(testData.expected.localSsd);
        expect(numberOfInstances).toEqual(testData.expected.numberOfInstances);
        expect(operatingSystem).toEqual(testData.expected.operatingSystem);
        expect(provisionalModel).toEqual(testData.expected.provisionalModel);
        expect(addGpus).toEqual(testData.expected.addGpus);
        await pages("SummaryPage").provisionalModel.scrollIntoView();
        expect(region).toEqual(testData.expected.region);
        expect(committedUse).toEqual(testData.expected.committedUse);
    });
});