<template><div><h1 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍"><span>功能介绍</span></a></h1>
<h2 id="批注工具" tabindex="-1"><a class="header-anchor" href="#批注工具"><span>批注工具</span></a></h2>
<h3 id="画笔工具" tabindex="-1"><a class="header-anchor" href="#画笔工具"><span>画笔工具</span></a></h3>
<p>画笔是主要的批注工具，用于在 PDF 上绘制标记。</p>
<p><strong>特点：</strong></p>
<ul>
<li>8 种预设颜色可选</li>
<li>4 种笔粗可调（2px、4px、6px、8px）</li>
<li>支持平滑绘图（可在设置中启用）</li>
<li>自然的手写体验</li>
</ul>
<p><strong>使用方法：</strong></p>
<ol>
<li>点击工具栏中的画笔图标</li>
<li>选择颜色和笔粗</li>
<li>在 PDF 页面上按住鼠标左键拖动绘制</li>
</ol>
<h3 id="橡皮擦工具" tabindex="-1"><a class="header-anchor" href="#橡皮擦工具"><span>橡皮擦工具</span></a></h3>
<p>橡皮擦用于擦除不需要的批注。</p>
<p><strong>特点：</strong></p>
<ul>
<li>3 种橡皮大小可选（小、中、大）</li>
<li>精确擦除单个笔画</li>
<li>不会影响 PDF 原始内容</li>
</ul>
<p><strong>使用方法：</strong></p>
<ol>
<li>点击工具栏中的橡皮图标</li>
<li>选择橡皮大小</li>
<li>在要擦除的批注上拖动鼠标</li>
</ol>
<h3 id="清空所有批注" tabindex="-1"><a class="header-anchor" href="#清空所有批注"><span>清空所有批注</span></a></h3>
<p>快速清除当前 PDF 的所有批注。</p>
<p><strong>使用方法：</strong></p>
<ol>
<li>点击工具栏中的清空图标</li>
<li>滑动滑块到右侧确认清空</li>
<li>或点击&quot;取消&quot;按钮放弃操作</li>
</ol>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>清空操作不可撤销，请谨慎使用。建议在清空前先保存当前批注。</p>
</div>
<h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h2>
<h3 id="打开-pdf" tabindex="-1"><a class="header-anchor" href="#打开-pdf"><span>打开 PDF</span></a></h3>
<p>支持多种方式打开 PDF 文件：</p>
<p><strong>方式一：文件对话框</strong></p>
<ul>
<li>点击&quot;打开 PDF&quot;按钮</li>
<li>或按 <code v-pre>Ctrl+O</code> 快捷键</li>
<li>在对话框中选择 PDF 文件</li>
</ul>
<p><strong>方式二：拖拽文件</strong></p>
<ul>
<li>直接将 PDF 文件拖拽到应用窗口</li>
<li>支持从文件资源管理器拖拽</li>
</ul>
<p><strong>方式三：最近文件</strong></p>
<ul>
<li>在主页查看最近访问的文件列表</li>
<li>点击文件卡片快速打开</li>
</ul>
<h3 id="保存批注" tabindex="-1"><a class="header-anchor" href="#保存批注"><span>保存批注</span></a></h3>
<p>批注数据保存为独立的 <code v-pre>.annotations</code> 文件，与原 PDF 文件同名。</p>
<p><strong>手动保存：</strong></p>
<ul>
<li>点击保存按钮</li>
<li>或按 <code v-pre>Ctrl+S</code> 快捷键</li>
</ul>
<p><strong>自动保存：</strong></p>
<ul>
<li>在设置中启用&quot;自动保存批注&quot;</li>
<li>关闭文件时自动保存</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>批注文件与 PDF 文件分离存储，不会修改原始 PDF 文件。</p>
</div>
<h3 id="最近文件" tabindex="-1"><a class="header-anchor" href="#最近文件"><span>最近文件</span></a></h3>
<p>应用会自动记录最近访问的 PDF 文件。</p>
<p><strong>功能：</strong></p>
<ul>
<li>显示文件名、页数、最后访问时间</li>
<li>显示是否包含批注</li>
<li>最多记录 20 个文件（可在设置中调整）</li>
<li>支持清空所有记录</li>
</ul>
<h2 id="视图控制" tabindex="-1"><a class="header-anchor" href="#视图控制"><span>视图控制</span></a></h2>
<h3 id="缩放功能" tabindex="-1"><a class="header-anchor" href="#缩放功能"><span>缩放功能</span></a></h3>
<p>灵活调整 PDF 显示大小。</p>
<p><strong>缩放范围：</strong> 50% - 400%</p>
<p><strong>缩放方式：</strong></p>
<ul>
<li>点击放大/缩小按钮</li>
<li>按 <code v-pre>Ctrl+鼠标滚轮</code></li>
<li>点击重置按钮恢复 100%</li>
</ul>
<p><strong>显示：</strong></p>
<ul>
<li>工具栏实时显示当前缩放百分比</li>
<li>缩放时保持页面居中</li>
</ul>
<h3 id="滚动浏览" tabindex="-1"><a class="header-anchor" href="#滚动浏览"><span>滚动浏览</span></a></h3>
<p><strong>垂直滚动：</strong></p>
<ul>
<li>鼠标滚轮上下滚动</li>
<li>拖动右侧滚动条</li>
</ul>
<p><strong>水平滚动：</strong></p>
<ul>
<li>按住 <code v-pre>Shift+鼠标滚轮</code></li>
<li>拖动底部滚动条</li>
</ul>
<h2 id="界面布局" tabindex="-1"><a class="header-anchor" href="#界面布局"><span>界面布局</span></a></h2>
<h3 id="主页视图" tabindex="-1"><a class="header-anchor" href="#主页视图"><span>主页视图</span></a></h3>
<p>应用启动时显示的欢迎页面。</p>
<p><strong>内容：</strong></p>
<ul>
<li>快速操作区：打开 PDF 按钮</li>
<li>最近文件列表</li>
<li>空状态提示</li>
</ul>
<h3 id="pdf-视图" tabindex="-1"><a class="header-anchor" href="#pdf-视图"><span>PDF 视图</span></a></h3>
<p>打开 PDF 后的批注工作区。</p>
<p><strong>布局：</strong></p>
<ul>
<li>顶部：工具栏</li>
<li>中间：PDF 页面（支持滚动）</li>
<li>页面：卡片式设计，带阴影效果</li>
</ul>
<h3 id="设置视图" tabindex="-1"><a class="header-anchor" href="#设置视图"><span>设置视图</span></a></h3>
<p>个性化配置应用行为。</p>
<p><strong>分类：</strong></p>
<ul>
<li>常规设置</li>
<li>绘图设置</li>
<li>视图设置</li>
<li>最近文件设置</li>
<li>外观设置</li>
</ul>
<h2 id="主题支持" tabindex="-1"><a class="header-anchor" href="#主题支持"><span>主题支持</span></a></h2>
<p>应用支持浅色和深色主题。</p>
<p><strong>主题选项：</strong></p>
<ul>
<li>浅色主题</li>
<li>深色主题</li>
<li>跟随系统（自动切换）</li>
</ul>
<p><strong>设置方法：</strong></p>
<ol>
<li>打开设置页面</li>
<li>在&quot;外观&quot;部分选择主题</li>
<li>点击&quot;保存设置&quot;</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>主题切换会立即生效，无需重启应用。</p>
</div>
<h2 id="窗口管理" tabindex="-1"><a class="header-anchor" href="#窗口管理"><span>窗口管理</span></a></h2>
<h3 id="窗口状态" tabindex="-1"><a class="header-anchor" href="#窗口状态"><span>窗口状态</span></a></h3>
<ul>
<li>支持最大化/最小化/还原</li>
<li>支持拖动调整窗口大小</li>
<li>批注在窗口状态变化时自动保留</li>
</ul>
<h3 id="标题栏" tabindex="-1"><a class="header-anchor" href="#标题栏"><span>标题栏</span></a></h3>
<p>采用 Fluent Design 风格的自定义标题栏。</p>
<p><strong>特点：</strong></p>
<ul>
<li>标题栏与内容区域融合</li>
<li>支持拖动移动窗口</li>
<li>标准的窗口控制按钮</li>
</ul>
<h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化"><span>性能优化</span></a></h2>
<h3 id="渲染优化" tabindex="-1"><a class="header-anchor" href="#渲染优化"><span>渲染优化</span></a></h3>
<ul>
<li>按需渲染 PDF 页面</li>
<li>窗口大小变化时自动调整渲染质量</li>
<li>批注数据独立管理，不影响 PDF 渲染</li>
</ul>
<h3 id="内存管理" tabindex="-1"><a class="header-anchor" href="#内存管理"><span>内存管理</span></a></h3>
<ul>
<li>及时释放不需要的资源</li>
<li>关闭文件时清理内存</li>
<li>支持大型 PDF 文件</li>
</ul>
<h2 id="数据安全" tabindex="-1"><a class="header-anchor" href="#数据安全"><span>数据安全</span></a></h2>
<h3 id="批注存储" tabindex="-1"><a class="header-anchor" href="#批注存储"><span>批注存储</span></a></h3>
<ul>
<li>批注数据保存为二进制格式</li>
<li>与 PDF 文件分离存储</li>
<li>不修改原始 PDF 文件</li>
</ul>
<h3 id="自动保存" tabindex="-1"><a class="header-anchor" href="#自动保存"><span>自动保存</span></a></h3>
<ul>
<li>可选的自动保存功能</li>
<li>关闭应用时提示保存未保存的批注</li>
<li>防止意外丢失批注数据</li>
</ul>
</div></template>


