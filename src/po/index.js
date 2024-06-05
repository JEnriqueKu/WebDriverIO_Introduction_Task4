import {HomePage} from "./pages/HomePage.js";
import {PricingCalculatorPage} from "./pages/PricingCalculatorPage.js";
import {ResultsPage} from "./pages/ResultsPage.js";
import {SummaryPage} from "./pages/SummaryPage.js";


/**
 *
 * @param name {'HomePage' | 'PricingCalculator' | 'ResultsPage' | 'SummaryPage'}
 * @returns {*}
 */
function pages (name) {
    const pagesOptions = {
        homepage: new HomePage(),
        pricingcalculator: new PricingCalculatorPage(),
        resultspage: new ResultsPage(),
        summarypage: new SummaryPage(),
    }
    return pagesOptions[name.toLowerCase()];
}

export {
    pages
}
