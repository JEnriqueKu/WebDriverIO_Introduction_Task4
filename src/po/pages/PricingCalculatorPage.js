import {AddEstimate} from "../components/pricing_calculator/AddEstimate.js";
import {ComputeEngine} from "../components/pricing_calculator/ComputeEngine.js";
import {CostDetails} from "../components/pricing_calculator/CostDetails.js";
import {ShareEstimate} from "../components/pricing_calculator/ShareEstimate.js";
import {changeTab}  from "../../utils/commonFunctions.js"


export class PricingCalculatorPage {
    constructor() {
        this.addEstimate = new AddEstimate();
        this.computeEngine = new ComputeEngine();
        this.costDetails = new CostDetails();
        this.shareEstimate = new ShareEstimate();
    }

    get addEstimateButton(){
        return $("span.UywwFc-vQzf8d")
    }

    changeTab(){
        return changeTab();
    }

    async closeMessageContainer(){
        try {
            await $("#container .close").click();
        } catch (e){

        }
    }
}