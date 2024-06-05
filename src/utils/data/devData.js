const testData = {
    "searchQuery": "Google Cloud Platform Pricing Calculator",
    "instances": 4,
    "machineType": "n1-standard-8",
    "gpuModel": "NVIDIA V100",
    "numberOfGpus": 1,
    "localSsd": "2x375 GB",
    "region": "Netherlands (europe-west4)",
    "committedUse": "1 year",
    "operatingSystem": "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)",
    "provisionalModel": "Regular",
    "addGpus": "true",

    "expected": {
        "Cost": "ESTIMATED COST $[amount] / mo",
        "machineType": "n1-standard-8, vCPUs: 8, RAM: 30 GB",
        "gpuModel": "NVIDIA V100",
        "numberOfGpus": "1",
        "localSsd": "2x375 GB",
        "numberOfInstances": "4",
        "operatingSystem": "Free: Debian, CentOS, CoreOS, Ubuntu or BYOL (Bring Your Own License)",
        "provisionalModel": "Regular",
        "addGpus": "true",
        "region": "Netherlands (europe-west4)",
        "committedUse": "1 year"
    }
}

export{
    testData
}