import {pages} from "../../po/index.js";
import {smokeTestData} from "../../utils/data/smokeTestData.js";

describe('Google Cloud Pricing Calculator Smoke Tests', () => {

    it('should open the home page', async () => {
        await pages("HomePage").open();
        await browser.maximizeWindow();

        expect(browser).toHaveTitle(smokeTestData.homePageTitle);
    });

    it('should display the search field and search button on the home page', async () => {
        const searchFieldIsPresent = await pages("HomePage").header.searchField;
        const searchFieldButtonIsPresent = await pages("HomePage").header.searchFieldButton;

        expect(searchFieldIsPresent).toBePresent();
        expect(searchFieldButtonIsPresent).toBePresent();
    });

    it('should open the result page', async () => {
        await pages("HomePage").header.searchInSearchField(smokeTestData.searchQuery);

        expect(browser).toHaveTitle(smokeTestData.resultsPageTitle);
    });

    it('should display the desired result on the results page', async () => {
        const desiredResultIsPresent = await pages("ResultsPage").resultsSection.desiredResult;

        expect(desiredResultIsPresent).toBePresent();
    });


    it('should open the pricing calculator page', async () => {
        await pages("ResultsPage").resultsSection.desiredResult.click();

        expect(browser).toHaveTitle(smokeTestData.pricingCalculatorPageTitle);
    });

    it('should display all elements on the pricing calculator page', async () => {
        const addEstimateIsPresent = await pages("PricingCalculator").addEstimateButton;
        expect(addEstimateIsPresent).toBePresent();

        await pages("PricingCalculator").addEstimateButton.click();

        const computeEngineIsPresent = await pages("PricingCalculator").computeEngine;
        expect(computeEngineIsPresent).toBePresent();

        await pages("PricingCalculator").addEstimate.computeEngine.click();

        const plusNumberOfInstancesIsPresent = await pages("PricingCalculator").computeEngine.plusNumberOfInstances;
        expect(plusNumberOfInstancesIsPresent).toBePresent();

        const machineTypeIsPresent = await pages("PricingCalculator").computeEngine.machineType;
        expect(machineTypeIsPresent).toBePresent();

        const machineTypeOptionN1Standard8IsPresent = await pages("PricingCalculator").computeEngine.machineTypeOptionN1Standard8;
        expect(machineTypeOptionN1Standard8IsPresent).toBePresent();

        const addGpusButtonIsPresent = await pages("PricingCalculator").computeEngine.addGpusButton;
        expect(addGpusButtonIsPresent).toBePresent();

        const gpuModelButtonIsPresent = await pages("PricingCalculator").computeEngine.gpuModelButton;
        expect(gpuModelButtonIsPresent).toBePresent();

        const numberOfGpusButtonIsPresent = await pages("PricingCalculator").computeEngine.numberOfGpusButton;
        expect(numberOfGpusButtonIsPresent).toBePresent();

        const localSsdButtonIsPresent = await pages("PricingCalculator").computeEngine.localSsdButton;
        expect(localSsdButtonIsPresent).toBePresent();

        const regionButtonIsPresent = await pages("PricingCalculator").computeEngine.regionButton;
        expect(regionButtonIsPresent).toBePresent();

        const estimatedCostIsPresent = await pages("PricingCalculator").costDetails.estimatedCost;
        expect(estimatedCostIsPresent).toBePresent();

        const shareButtonIsPresent = await pages("PricingCalculator").costDetails.shareButton;
        expect(shareButtonIsPresent).toBePresent();

        await pages("PricingCalculator").closeMessageContainer();
        await pages("PricingCalculator").costDetails.clickShareButton();

        const openEstimateSummaryIsPresent = await pages("PricingCalculator").shareEstimate.openEstimateSummary;
        expect(openEstimateSummaryIsPresent).toBePresent();
    });

    it('should open the summary page', async () => {
        await pages("PricingCalculator").shareEstimate.openEstimateSummary.click();
        await pages("PricingCalculator").changeTab();

        expect(browser).toHaveTitle(smokeTestData.summaryPageTitle);
    });

    it('should display all elements on the summary page', async () => {
        const machineTypeIsPresent = await pages("SummaryPage").costEstimateSummary.machineType;
        expect(machineTypeIsPresent).toBePresent();

        const gpuModelIsPresent = await pages("SummaryPage").costEstimateSummary.gpuModel;
        expect(gpuModelIsPresent).toBePresent();

        const numberOfGpusIsPresent = await pages("SummaryPage").costEstimateSummary.numberOfGpus;
        expect(numberOfGpusIsPresent).toBePresent();

        const localSsdIsPresent = await pages("SummaryPage").costEstimateSummary.localSsd;
        expect(localSsdIsPresent).toBePresent();

        const numberOfInstancesIsPresent = await pages("SummaryPage").costEstimateSummary.numberOfInstances;
        expect(numberOfInstancesIsPresent).toBePresent();

        const operatingSystemIsPresent = await pages("SummaryPage").costEstimateSummary.operatingSystem;
        expect(operatingSystemIsPresent).toBePresent();

        const provisionalModelIsPresent = await pages("SummaryPage").costEstimateSummary.provisionalModel;
        expect(provisionalModelIsPresent).toBePresent();

        const addGpusIsPresent = await pages("SummaryPage").costEstimateSummary.addGpus;
        expect(addGpusIsPresent).toBePresent();

        const regionIsPresent = await pages("SummaryPage").costEstimateSummary.region;
        expect(regionIsPresent).toBePresent();

        const committedUseIsPresent = await pages("SummaryPage").costEstimateSummary.committedUse;
        expect(committedUseIsPresent).toBePresent();
    });

});