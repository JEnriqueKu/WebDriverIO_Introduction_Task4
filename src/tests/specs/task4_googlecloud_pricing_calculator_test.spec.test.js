import {pages} from "../../po/index.js";
import { loadTestData } from "../../utils/data/loadTestData.js";

const env = process.env.ENV;

describe('Google Cloud Pricing Calculator functionality Tests', () => {
    let testData;
    before( async  () => {
        testData = await loadTestData(env);
        await pages("HomePage").open();
        await browser.maximizeWindow();
        //search Google Cloud Platform Pricing Calculator
        await pages("HomePage").header.searchInSearchField(testData.searchQuery);
        await pages("ResultsPage").resultsSection.desiredResult.click()
        //open the form
        await pages("PricingCalculator").addEstimateButton.click();
        await pages("PricingCalculator").addEstimate.computeEngine.click();
        //filling the form
        await pages("PricingCalculator").computeEngine.setNumberOfInstancesIn(testData.instances);
        await pages("PricingCalculator").computeEngine.selectMachineTypeN1Standard8();
        await pages("PricingCalculator").computeEngine.addGpusButton.click();
        await pages("PricingCalculator").computeEngine.selectGPUModel(testData.gpuModel);
        await pages("PricingCalculator").closeMessageContainer();
        await pages("PricingCalculator").computeEngine.selectNumberOfGPUs(testData.numberOfGpus);
        await pages("PricingCalculator").computeEngine.selectLocalSSD2x375GB();
        await pages("PricingCalculator").computeEngine.selectRegionNetherlands();
        await pages("PricingCalculator").computeEngine.selectCommittedUsage(testData.committedUse);
    })

    it('should create an estimate with specified configurations and validate the price is calculated in the right section of the calculator', async () => {
        //get values
        const estimatedCost = await pages("PricingCalculator").costDetails.estimatedCostText()
        const expectedCost = testData.expected.Cost;
        //check the price
        expect(estimatedCost).toEqual(expectedCost);

    });

    it('should verify the filled form data matches the summary', async () => {
        //Open estimate summary
        await pages("PricingCalculator").costDetails.clickShareButton();
        await pages("PricingCalculator").shareEstimate.openEstimateSummary.click();
        await pages("PricingCalculator").changeTab();
        //get values of Cost Estimate Summary
        const machineType = await pages("SummaryPage").costEstimateSummary.machineType.getText();
        const gpuModel = await pages("SummaryPage").costEstimateSummary.gpuModel.getText();
        const numberOfGpus = await pages("SummaryPage").costEstimateSummary.numberOfGpus.getText();
        const localSsd = await pages("SummaryPage").costEstimateSummary.localSsd.getText();
        const numberOfInstances = await pages("SummaryPage").costEstimateSummary.numberOfInstances.getText();
        const operatingSystem = await pages("SummaryPage").costEstimateSummary.operatingSystem.getText();
        const provisionalModel = await pages("SummaryPage").costEstimateSummary.provisionalModel.getText();
        const addGpus = await pages("SummaryPage").costEstimateSummary.addGpus.getText();
        const region = await pages("SummaryPage").costEstimateSummary.region.getText();
        const committedUse = await pages("SummaryPage").costEstimateSummary.committedUse.getText();
        // verify the values matches
        expect(machineType).toEqual(testData.expected.machineType);
        expect(gpuModel).toEqual(testData.expected.gpuModel);
        expect(numberOfGpus).toEqual(testData.expected.numberOfGpus);
        expect(localSsd).toEqual(testData.expected.localSsd);
        expect(numberOfInstances).toEqual(testData.expected.numberOfInstances);
        expect(operatingSystem).toEqual(testData.expected.operatingSystem);
        expect(provisionalModel).toEqual(testData.expected.provisionalModel);
        expect(addGpus).toEqual(testData.expected.addGpus);
        await pages("SummaryPage").costEstimateSummary.provisionalModel.scrollIntoView();
        expect(region).toEqual(testData.expected.region);
        expect(committedUse).toEqual(testData.expected.committedUse);
    });
});