
export async function openPage(url) {
    return browser.url(url);
}

export async function changeTab() {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
}

export async function loadTestData(env) {
    switch (env) {
        case 'dev':
            return (await import("../utils/data/devData.js")).testData;
        case 'test':
            return (await import("../utils/data/testData.js")).testData;
    }
}