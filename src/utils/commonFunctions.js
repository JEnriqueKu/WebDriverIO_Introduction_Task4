
export async function openPage(url) {
    return browser.url(url);
}

export async function changeTab() {
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[handles.length - 1]);
}