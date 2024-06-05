export async function loadTestData(env) {
    switch (env) {
        case 'dev':
            return (await import("../../utils/data/devData.js")).testData;
        case 'test':
            return (await import("../../utils/data/testData.js")).testData;
    }
}