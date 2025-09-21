emojiFix();
gameCenterRemove();
leftListOptimize();
rightListOptimize();
QMposterLinkRemove();
topListOptimize();
floatBarOptimize();
posterContainerRemove();

// 修复表情的标签未能正确显示的错误
function emojiFix(){
    // 找到所有符合条件的 span 元素
    const spans = document.querySelectorAll("span.user-name.textoverflow");

    spans.forEach((span) => {
        const htmlText = span.innerHTML;

        // 使用正则替换 &lt;...&gt; 为真实的 HTML 标签
        const imgRegex = /&lt;(img[^&]+)&gt;/g;
        // 替换 span 的 innerHTML
        span.innerHTML = htmlText.replace(imgRegex, "<$1>");
    });
}

// 删除游戏中心列表
function gameCenterRemove(){
    const targetElement = document.querySelector("#leftMenu > div.mod-side-nav.mod-side-nav-recently-used");
    if(targetElement){
        targetElement.remove();
    }
}

// 左边栏优化
function leftListOptimize(){
    // 取得菜单
    const menuList = document.querySelector("#tab_menu_list");

    // 删除 空间达人
    menuList.querySelector("li[type='mv']").remove();

    // 删除 课堂
    menuList.querySelector("li[type='class']").remove();

    // 删除 游戏应用
    menuList.querySelector("li[type='app']").remove();

    // 获取主菜单第二个 li 作为模板（避免第一个是 active 状态）
    const templateLi = menuList.querySelectorAll("li")[1];

    // 获取隐藏菜单
    const hideList = document.querySelector("#tab_hide_list");

    // 遍历隐藏列表中的 li
    const items = Array.from(hideList.querySelectorAll("li"));
    items.forEach((li) => {
        const newLi = document.createElement("li");

        // 复制模板 li 的 class（不复制第一个 li 的 "current" 状态）
        newLi.className = templateLi.className;

        // 复制原始 li 中的 a 标签内容（保留事件、图标等结构）
        const originalA = li.querySelector("a");
        if (originalA) {
            newLi.innerHTML = originalA.outerHTML;
        } else {
            newLi.textContent = li.textContent.trim();
        }

        // 插入到主菜单中
        menuList.appendChild(newLi);
    });

    // 删除 tab_switch
    document.querySelector("#tab_switch").remove();

    // 删除隐藏菜单
    hideList.remove();
}

// 右边栏优化
function rightListOptimize(){
    // 删除空白的块 #QM_Container_100005
    const rightList = document.querySelector("#QM_Container_100005");
    if(rightList){
        rightList.remove();
        rightList.style.marginBottom = "12px";
    }
}

// 删除 发表 里无用的那个链接按钮
function QMposterLinkRemove(){
    const Link = document.querySelector(
        "#QM_Mood_Poster_Inner > div.qz-poster-attach-side > div.attach > div.item.bor3.bg4.item-other"
    );
    if(Link){
        Link.remove();
    }
}

// 优化顶栏
function topListOptimize(){
    // 删除 游戏应用 装扮
    document.querySelector("#tb_app_li").remove();
    document.querySelector("#tb_dress_li").remove();

    // 删除失效的点赞键
    const like = document.querySelector("#like_button_pannel");
    if(like){
        like.remove();
    }
}

// 优化右边悬浮按键
function floatBarOptimize(){
    // 删除失效的热点键
    // 页面加载后3秒左右才出现
    function remove(){
        document.querySelector("#site_hot_btn").remove();
    }
    setTimeout(remove,3000);

    // 修改顶栏样式
    const style = document.createElement('style');
    style.textContent = `
body > div.fix-layout{
    position: fixed;
    border-radius: 22px;
    right: 5em;
    top: 30em;
    z-index: 20;
}

#_returnTop_layout_inner{
    border-radius: 22px;
}

#goto_top_btn{
    border-radius: 22px;
}
`;
    document.head.appendChild(style);
}

// 删除 个人中心 已经失效的发表框
function posterContainerRemove(){
    const posterContainer = document.querySelector("#QM_Mood_Poster_Container");
    if(posterContainer){
        posterContainer.remove();
    }
}

