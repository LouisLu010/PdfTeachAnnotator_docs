<template><div><h1 id="设置选项" tabindex="-1"><a class="header-anchor" href="#设置选项"><span>设置选项</span></a></h1>
<h2 id="常规设置" tabindex="-1"><a class="header-anchor" href="#常规设置"><span>常规设置</span></a></h2>
<h3 id="自动保存批注" tabindex="-1"><a class="header-anchor" href="#自动保存批注"><span>自动保存批注</span></a></h3>
<p>关闭文件时自动保存批注，无需手动保存。</p>
<p><strong>默认值：</strong> 关闭</p>
<p><strong>说明：</strong></p>
<ul>
<li>启用后，关闭 PDF 文件或退出应用时自动保存批注</li>
<li>禁用时，需要手动按 <code v-pre>Ctrl+S</code> 保存</li>
</ul>
<p><strong>推荐：</strong> 建议启用此选项，避免忘记保存导致批注丢失。</p>
<h3 id="启动时显示主页" tabindex="-1"><a class="header-anchor" href="#启动时显示主页"><span>启动时显示主页</span></a></h3>
<p>应用启动时显示主页和最近文件。</p>
<p><strong>默认值：</strong> 开启</p>
<p><strong>说明：</strong></p>
<ul>
<li>启用后，应用启动时显示主页视图</li>
<li>禁用后，应用启动时显示空白的 PDF 视图</li>
</ul>
<p><strong>推荐：</strong> 如果经常需要打开最近文件，建议启用此选项。</p>
<h3 id="显示工具提示" tabindex="-1"><a class="header-anchor" href="#显示工具提示"><span>显示工具提示</span></a></h3>
<p>鼠标悬停时显示工具提示。</p>
<p><strong>默认值：</strong> 开启</p>
<p><strong>说明：</strong></p>
<ul>
<li>启用后，鼠标悬停在按钮上时显示功能说明</li>
<li>禁用后，不显示任何工具提示</li>
</ul>
<p><strong>推荐：</strong> 新用户建议启用，熟悉后可以禁用以获得更简洁的界面。</p>
<h2 id="绘图设置" tabindex="-1"><a class="header-anchor" href="#绘图设置"><span>绘图设置</span></a></h2>
<h3 id="默认画笔粗细" tabindex="-1"><a class="header-anchor" href="#默认画笔粗细"><span>默认画笔粗细</span></a></h3>
<p>设置画笔工具的默认粗细。</p>
<p><strong>范围：</strong> 1 - 20 像素</p>
<p><strong>默认值：</strong> 4 像素</p>
<p><strong>说明：</strong></p>
<ul>
<li>打开新 PDF 文件时使用此粗细</li>
<li>可以在工具栏随时调整</li>
</ul>
<h3 id="默认橡皮大小" tabindex="-1"><a class="header-anchor" href="#默认橡皮大小"><span>默认橡皮大小</span></a></h3>
<p>设置橡皮擦工具的默认大小。</p>
<p><strong>范围：</strong> 5 - 50 像素</p>
<p><strong>默认值：</strong> 20 像素</p>
<p><strong>说明：</strong></p>
<ul>
<li>打开新 PDF 文件时使用此大小</li>
<li>可以在工具栏随时调整</li>
</ul>
<h3 id="平滑绘图" tabindex="-1"><a class="header-anchor" href="#平滑绘图"><span>平滑绘图</span></a></h3>
<p>启用笔画平滑处理，使线条更流畅。</p>
<p><strong>默认值：</strong> 开启</p>
<p><strong>说明：</strong></p>
<ul>
<li>启用后，绘制的线条会自动平滑处理</li>
<li>禁用后，线条保持原始轨迹</li>
</ul>
<p><strong>推荐：</strong> 建议启用，可以获得更自然的手写效果。</p>
<h2 id="视图设置" tabindex="-1"><a class="header-anchor" href="#视图设置"><span>视图设置</span></a></h2>
<h3 id="默认缩放级别" tabindex="-1"><a class="header-anchor" href="#默认缩放级别"><span>默认缩放级别</span></a></h3>
<p>设置打开 PDF 文件时的默认缩放级别。</p>
<p><strong>范围：</strong> 50% - 200%</p>
<p><strong>默认值：</strong> 100%</p>
<p><strong>说明：</strong></p>
<ul>
<li>打开新 PDF 文件时使用此缩放级别</li>
<li>可以在工具栏随时调整</li>
</ul>
<p><strong>推荐：</strong></p>
<ul>
<li>小屏幕设备建议设置为 80% - 90%</li>
<li>大屏幕设备可以设置为 100% - 120%</li>
</ul>
<h2 id="最近文件设置" tabindex="-1"><a class="header-anchor" href="#最近文件设置"><span>最近文件设置</span></a></h2>
<h3 id="最大记录数量" tabindex="-1"><a class="header-anchor" href="#最大记录数量"><span>最大记录数量</span></a></h3>
<p>设置最近文件列表保存的最大文件数量。</p>
<p><strong>范围：</strong> 5 - 20 个</p>
<p><strong>默认值：</strong> 10 个</p>
<p><strong>说明：</strong></p>
<ul>
<li>超过此数量时，最旧的记录会被自动删除</li>
<li>设置为较小值可以保持列表简洁</li>
</ul>
<h3 id="清空最近访问" tabindex="-1"><a class="header-anchor" href="#清空最近访问"><span>清空最近访问</span></a></h3>
<p>删除所有最近访问记录。</p>
<p><strong>说明：</strong></p>
<ul>
<li>点击&quot;清空&quot;按钮会弹出确认对话框</li>
<li>确认后会删除所有最近文件记录</li>
<li>此操作不可撤销</li>
</ul>
<div class="hint-container warning">
<p class="hint-container-title">注意</p>
<p>清空最近访问记录不会删除 PDF 文件或批注文件，只是清除访问历史。</p>
</div>
<h2 id="外观设置" tabindex="-1"><a class="header-anchor" href="#外观设置"><span>外观设置</span></a></h2>
<h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h3>
<p>选择应用程序主题。</p>
<p><strong>选项：</strong></p>
<ul>
<li><strong>浅色</strong>：明亮的浅色主题</li>
<li><strong>深色</strong>：护眼的深色主题</li>
<li><strong>跟随系统</strong>：自动跟随系统主题设置</li>
</ul>
<p><strong>默认值：</strong> 跟随系统</p>
<p><strong>说明：</strong></p>
<ul>
<li>主题切换会立即生效</li>
<li>深色主题适合在光线较暗的环境使用</li>
</ul>
<h2 id="保存设置" tabindex="-1"><a class="header-anchor" href="#保存设置"><span>保存设置</span></a></h2>
<p>完成设置调整后，点击&quot;保存设置&quot;按钮保存更改。</p>
<p><strong>说明：</strong></p>
<ul>
<li>设置会保存到本地配置文件</li>
<li>下次启动应用时自动加载保存的设置</li>
<li>点击&quot;返回&quot;按钮可以返回上一个视图</li>
</ul>
<h2 id="设置文件位置" tabindex="-1"><a class="header-anchor" href="#设置文件位置"><span>设置文件位置</span></a></h2>
<p>设置保存在用户配置目录：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">%APPDATA%\PdfTeachAnnotator\settings.json</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>内容：</strong></p>
<ul>
<li>所有用户设置</li>
<li>最近文件列表</li>
<li>窗口状态</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果需要重置所有设置，可以删除此文件，应用会在下次启动时创建默认配置。</p>
</div>
<h2 id="推荐配置" tabindex="-1"><a class="header-anchor" href="#推荐配置"><span>推荐配置</span></a></h2>
<h3 id="教师用户" tabindex="-1"><a class="header-anchor" href="#教师用户"><span>教师用户</span></a></h3>
<p>适合在课堂上批注教学材料的配置：</p>
<ul>
<li>✅ 自动保存批注：开启</li>
<li>✅ 启动时显示主页：开启</li>
<li>✅ 显示工具提示：关闭（熟悉后）</li>
<li>📏 默认画笔粗细：6 像素（更醒目）</li>
<li>📏 默认橡皮大小：30 像素</li>
<li>✅ 平滑绘图：开启</li>
<li>🔍 默认缩放级别：120%（投影时更清晰）</li>
<li>📁 最大记录数量：15 个</li>
<li>🎨 主题：浅色</li>
</ul>
<h3 id="学生用户" tabindex="-1"><a class="header-anchor" href="#学生用户"><span>学生用户</span></a></h3>
<p>适合个人学习和笔记的配置：</p>
<ul>
<li>✅ 自动保存批注：开启</li>
<li>✅ 启动时显示主页：开启</li>
<li>✅ 显示工具提示：开启</li>
<li>📏 默认画笔粗细：4 像素</li>
<li>📏 默认橡皮大小：20 像素</li>
<li>✅ 平滑绘图：开启</li>
<li>🔍 默认缩放级别：100%</li>
<li>📁 最大记录数量：10 个</li>
<li>🎨 主题：跟随系统</li>
</ul>
<h3 id="演示用户" tabindex="-1"><a class="header-anchor" href="#演示用户"><span>演示用户</span></a></h3>
<p>适合会议演示和讲解的配置：</p>
<ul>
<li>✅ 自动保存批注：关闭（演示后可能不需要保存）</li>
<li>✅ 启动时显示主页：关闭</li>
<li>✅ 显示工具提示：关闭</li>
<li>📏 默认画笔粗细：8 像素（最粗，最醒目）</li>
<li>📏 默认橡皮大小：40 像素</li>
<li>✅ 平滑绘图：开启</li>
<li>🔍 默认缩放级别：150%</li>
<li>📁 最大记录数量：5 个</li>
<li>🎨 主题：浅色</li>
</ul>
</div></template>


