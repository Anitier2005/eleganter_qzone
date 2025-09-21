//  设置按钮
// 设置按钮的HTML
const toggleButtonHTML = `
<a href="javascript:;" id="tb_theme_toggle" class="theme-toggle " title="切换主题">
    <i class="ui-icon icon-theme">
        <span id="themeIcon"></span>
    </i>
</a>
`;

// 将按钮插入顶栏
const userInfo = document.querySelector('.user-info');
if (userInfo && !document.getElementById('tb_theme_toggle')) {
    userInfo.innerHTML += toggleButtonHTML;
}

//  获取按钮DOM
const toggleButton = document.getElementById('tb_theme_toggle');
//  获取按钮图标DOM
const toggleButtonIcon = document.getElementById('themeIcon');


//  绑定点击事件
if (toggleButton) {
    toggleButton.addEventListener('click', toggle);
}

//  当前模式索引 默认为0
//  0跟随系统   1跟随时间    2亮色    3暗色
let currentIndex = 0;

//  若储存值严格等于0、1、2、3、中任意数 则 覆盖当前值
//  若不合法的数据输入 重写储存值为 默认值
const storage = parseInt(localStorage.getItem('themeIndex'));
if(storage === 0 || storage === 1 || storage === 2 || storage === 3 ){
    currentIndex = storage;
}else{
    localStorage.setItem('themeIndex', currentIndex);
}

render();

//  切换主题按钮逻辑
function toggle() {
    //  自加取模 然后 控制渲染
    currentIndex = (currentIndex + 1) % 4;
    localStorage.setItem('themeIndex', currentIndex);
    render();
}

//  渲染控制
function render() {
    console.log(iconDark,iconDark,iconSystem,iconTime);
    switch(currentIndex){
        case 0:  systemLike(); break;
        case 1: relyTime(); break;
        case 2:  {
            //  修改按钮样式 变更为亮色主题
            toggleButtonIcon.innerHTML = iconLight;
            turnLight();
            break;
        }
        case 3:  {
            //  修改按钮样式 变更为暗色主题
            toggleButtonIcon.innerHTML = iconDark;
            turnDark();
            break;
        }
        default: systemLike();
    }
}

//  判断系统的主题
function systemLike(){
    //  修改按钮样式
    toggleButtonIcon.innerHTML = iconSystem;

    //  判断主题样式
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        // 系统为亮色
        turnLight();
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // 系统为暗色
        turnDark();
    } else {
        // 浏览器不支持查询系统设置或者无设置
        window.alert("浏览器不支持查询系统设置或者无设置,已默认更改为亮色");
    }
}

function relyTime(){
    //  修改按钮样式
    toggleButtonIcon.innerHTML = iconTime;
}

//  切换亮色主题 不含图标变更
function turnLight(){

}

//  切换为暗色主题 不含图标表更
function turnDark(){

}
