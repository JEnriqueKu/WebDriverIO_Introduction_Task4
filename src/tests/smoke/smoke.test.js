import {pages} from "../../po/index.js";

describe('Google Cloud Pricing Calculator Smoke Tests', () => {

    it('should open the home page', async () => {
        await pages("HomePage").open();
        await browser.maximizeWindow();

        expect(browser).toHaveTitle(pages("HomePage").pageTitle);
    });

    it('should display the search field and search button on the home page', async () => {
        const searchFieldIsPresent = await pages("HomePage").header.searchField;
        const searchFieldButtonIsPresent = await pages("HomePage").header.searchFieldButton;

        expect(searchFieldIsPresent).toBePresent();
        expect(searchFieldButtonIsPresent).toBePresent();
    });

    it('should open the result page', async () => {
        await pages("HomePage").header.searchInSearchField("Google Cloud Platform Pricing Calculator");

        expect(browser).toHaveTitle(pages("ResultsPage").pageTitle);
    });

    it('should display the desired result on the results page', async () => {
        const desiredResultIsPresent = await pages("ResultsPage").desiredResult;

        expect(desiredResultIsPresent).toBePresent();
    });


    it('should open the pricing calculator page', async () => {
        await pages("ResultsPage").desiredResult.click();

        expect(browser).toHaveTitle(pages("PricingCalculator").pageTitle);
    });

    it('should display all elements on the pricing calculator page', async () => {
        const addEstimateIsPresent = await pages("PricingCalculator").addEstimateButton;
        expect(addEstimateIsPresent).toBePresent();

        await pages("PricingCalculator").addEstimateButton.click();

        const computeEngineIsPresent = await pages("PricingCalculator").computeEngine;
        expect(computeEngineIsPresent).toBePresent();

        await pages("PricingCalculator").computeEngine.click();

        const plusNumberOfInstancesIsPresent = await pages("PricingCalculator").plusNumberOfInstances;
        expect(plusNumberOfInstancesIsPresent).toBePresent();

        const machineTypeIsPresent = await pages("PricingCalculator").machineType;
        expect(machineTypeIsPresent).toBePresent();

        const machineTypeOptionN1Standard8IsPresent = await pages("PricingCalculator").machineTypeOptionN1Standard8;
        expect(machineTypeOptionN1Standard8IsPresent).toBePresent();

        const addGpusButtonIsPresent = await pages("PricingCalculator").addGpusButton;
        expect(addGpusButtonIsPresent).toBePresent();

        const gpuModelButtonIsPresent = await pages("PricingCalculator").gpuModelButton;
        expect(gpuModelButtonIsPresent).toBePresent();

        const numberOfGpusButtonIsPresent = await pages("PricingCalculator").numberOfGpusButton;
        expect(numberOfGpusButtonIsPresent).toBePresent();

        const localSsdButtonIsPresent = await pages("PricingCalculator").localSsdButton;
        expect(localSsdButtonIsPresent).toBePresent();

        const regionButtonIsPresent = await pages("PricingCalculator").regionButton;
        expect(regionButtonIsPresent).toBePresent();

        const estimatedCostIsPresent = await pages("PricingCalculator").estimatedCost;
        expect(estimatedCostIsPresent).toBePresent();

        const shareButtonIsPresent = await pages("PricingCalculator").shareButton;
        expect(shareButtonIsPresent).toBePresent();

        await pages("PricingCalculator").closeMessageContainer();
        await pages("PricingCalculator").clickShareButton();

        const openEstimateSummaryIsPresent = await pages("PricingCalculator").openEstimateSummary;
        expect(openEstimateSummaryIsPresent).toBePresent();
    });

    it('should open the summary page', async () => {
        await pages("PricingCalculator").openEstimateSummary.click();
        await pages("PricingCalculator").changeTab();

        expect(browser).toHaveTitle(pages("SummaryPage").pageTitle);
    });

    it('should display all elements on the summary page', async () => {
        const machineTypeIsPresent = await pages("SummaryPage").machineType;
        expect(machineTypeIsPresent).toBePresent();

        const gpuModelIsPresent = await pages("SummaryPage").gpuModel;
        expect(gpuModelIsPresent).toBePresent();

        const numberOfGpusIsPresent = await pages("SummaryPage").numberOfGpus;
        expect(numberOfGpusIsPresent).toBePresent();

        const localSsdIsPresent = await pages("SummaryPage").localSsd;
        expect(localSsdIsPresent).toBePresent();

        const numberOfInstancesIsPresent = await pages("SummaryPage").numberOfInstances;
        expect(numberOfInstancesIsPresent).toBePresent();

        const operatingSystemIsPresent = await pages("SummaryPage").operatingSystem;
        expect(operatingSystemIsPresent).toBePresent();

        const provisionalModelIsPresent = await pages("SummaryPage").provisionalModel;
        expect(provisionalModelIsPresent).toBePresent();

        const addGpusIsPresent = await pages("SummaryPage").addGpus;
        expect(addGpusIsPresent).toBePresent();

        const regionIsPresent = await pages("SummaryPage").region;
        expect(regionIsPresent).toBePresent();

        const committedUseIsPresent = await pages("SummaryPage").committedUse;
        expect(committedUseIsPresent).toBePresent();
    });

});