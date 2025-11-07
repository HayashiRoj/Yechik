document.addEventListener('DOMContentLoaded', function() {
    // 保持原有的获取元素方式
    const listBtn = document.getElementById('listBtn');
    const topDockContent = document.querySelector(".topDockContent");
    const topDock = document.querySelector('.topDock');
    const cover = document.querySelector('.cover');

    // 1. 检查所有必要元素是否都成功获取
    if (!listBtn || !topDockContent || !topDock || !cover) {
        console.error('初始化失败：页面中缺少必要的DOM元素。');
        return;
    }

    // 2. 使用数组统一管理需要操作的元素
    const elementsToToggle = [listBtn, topDockContent, topDock, cover];

    // 3. 优化函数，功能单一明确
    function toggleDock() {
        const isCurrentlyOn = listBtn.classList.contains('on');
        
        if (isCurrentlyOn) {
            // 如果当前是打开状态，点击后关闭
            elementsToToggle.forEach(el => el.classList.remove('on'));
            document.body.style.overflow = 'auto'; // 恢复页面滚动
        } else {
            // 如果当前是关闭状态，点击后打开
            elementsToToggle.forEach(el => el.classList.add('on'));
            document.body.style.overflow = 'hidden'; // 禁用页面滚动
        }
    }

    // 4. 初始状态设置为关闭（移除所有 'on' 类）
    elementsToToggle.forEach(el => el.classList.remove('on'));
    document.body.style.overflow = 'auto'; // 确保初始状态是可滚动的

    // 5. 保持原有的点击事件绑定方式
    listBtn.addEventListener('click', function() {
        toggleDock();
    });

    // 6. 增加点击遮罩层关闭功能
    cover.addEventListener('click', function() {
        elementsToToggle.forEach(el => el.classList.remove('on'));
        document.body.style.overflow = 'auto'; // 恢复页面滚动
    });
});

