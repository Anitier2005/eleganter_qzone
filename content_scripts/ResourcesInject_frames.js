//  插入页面样式
getResourceAsync("resource/Interface.css").then(content=>{
    const style = document.createElement('style');
    style.textContent = content;
    document.head.appendChild(style);
});