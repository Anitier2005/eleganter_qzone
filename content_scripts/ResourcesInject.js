//  按钮图标svg
//  跟随系统 图标
const iconSystem = getResource('resource/system.svg');

//  根据时间 图标
const iconTime = getResource('resource/time.svg');

//  亮色模式 图标
const iconLight = getResource('resource/light.svg');

//  暗色模式 图标
const iconDark =  getResource('resource/dark.svg');

//  插入页面样式
getResourceAsync("resource/Interface.css").then(content=>{
    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
});

//  插入顶栏样式
getResourceAsync("resource/TopBar.css").then(content=>{
    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
});

//  异步获取资源
async function getResourceAsync(path){
    const url = chrome.runtime.getURL(path);
    const response  = await fetch(url);
    return await response.text();
}

//  同步获取资源
function getResource(path) {
    const url = chrome.runtime.getURL(path);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false); // 同步请求
    xhr.send();
    if (xhr.status === 200 || xhr.status === 0) return xhr.responseText;
}