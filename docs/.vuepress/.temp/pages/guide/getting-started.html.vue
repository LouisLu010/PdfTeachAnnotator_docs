<template><div><h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始"><span>快速开始</span></a></h1>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="下载" tabindex="-1"><a class="header-anchor" href="#下载"><span>下载</span></a></h3>
<p>从 <a href="https://github.com/LouisLu010/PdfTeachAnnotator/releases" target="_blank" rel="noopener noreferrer">GitHub Releases</a> 页面下载最新版本：</p>
<ul>
<li><strong>便携版</strong>: <code v-pre>PdfTeachAnnotator.exe</code>（无需安装，直接运行）</li>
</ul>
<h3 id="系统要求" tabindex="-1"><a class="header-anchor" href="#系统要求"><span>系统要求</span></a></h3>
<ul>
<li><strong>操作系统</strong>: Windows 10 或更高版本</li>
<li><strong>运行环境</strong>: .NET 8.0 Runtime（安装包会自动检测并提示安装）</li>
<li><strong>磁盘空间</strong>: 至少 100 MB 可用空间</li>
</ul>
<h3 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h3>
<ol>
<li>双击下载的 <code v-pre>PdfTeachAnnotator.exe</code></li>
<li>无需安装，立即使用</li>
</ol>
<h2 id="首次使用" tabindex="-1"><a class="header-anchor" href="#首次使用"><span>首次使用</span></a></h2>
<h3 id="打开-pdf-文件" tabindex="-1"><a class="header-anchor" href="#打开-pdf-文件"><span>打开 PDF 文件</span></a></h3>
<p>有三种方式打开 PDF 文件：</p>
<ol>
<li><strong>点击按钮</strong>: 点击主页的&quot;打开 PDF&quot;按钮，在文件对话框中选择文件</li>
<li><strong>拖拽文件</strong>: 直接将 PDF 文件拖拽到应用窗口</li>
<li><strong>快捷键</strong>: 按 <code v-pre>Ctrl+O</code> 打开文件对话框</li>
</ol>
<h3 id="开始批注" tabindex="-1"><a class="header-anchor" href="#开始批注"><span>开始批注</span></a></h3>
<ol>
<li>文件打开后，工具栏会自动显示</li>
<li>点击画笔工具（或按快捷键）</li>
<li>选择颜色和粗细</li>
<li>在 PDF 页面上绘制批注</li>
</ol>
<h3 id="保存批注" tabindex="-1"><a class="header-anchor" href="#保存批注"><span>保存批注</span></a></h3>
<ul>
<li><strong>手动保存</strong>: 点击保存按钮或按 <code v-pre>Ctrl+S</code></li>
<li><strong>自动保存</strong>: 在设置中启用&quot;自动保存批注&quot;，关闭文件时自动保存</li>
</ul>
<h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h2>
<h3 id="工具栏" tabindex="-1"><a class="header-anchor" href="#工具栏"><span>工具栏</span></a></h3>
<p>工具栏位于窗口顶部，包含以下工具：</p>
<table>
<thead>
<tr>
<th>工具</th>
<th>说明</th>
<th>快捷键</th>
</tr>
</thead>
<tbody>
<tr>
<td>菜单</td>
<td>打开主菜单</td>
<td>-</td>
</tr>
<tr>
<td>打开</td>
<td>打开 PDF 文件</td>
<td><code v-pre>Ctrl+O</code></td>
</tr>
<tr>
<td>保存</td>
<td>保存批注</td>
<td><code v-pre>Ctrl+S</code></td>
</tr>
<tr>
<td>画笔</td>
<td>绘制批注</td>
<td>-</td>
</tr>
<tr>
<td>橡皮</td>
<td>擦除批注</td>
<td>-</td>
</tr>
<tr>
<td>清空</td>
<td>清空所有批注</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="缩放视图" tabindex="-1"><a class="header-anchor" href="#缩放视图"><span>缩放视图</span></a></h3>
<ul>
<li><strong>放大</strong>: 点击放大按钮或按 <code v-pre>Ctrl+鼠标滚轮向上</code></li>
<li><strong>缩小</strong>: 点击缩小按钮或按 <code v-pre>Ctrl+鼠标滚轮向下</code></li>
<li><strong>重置</strong>: 点击重置按钮恢复到 100% 缩放</li>
</ul>
<h3 id="颜色选择" tabindex="-1"><a class="header-anchor" href="#颜色选择"><span>颜色选择</span></a></h3>
<p>工具栏提供 8 种预设颜色：</p>
<ul>
<li>红色 🔴</li>
<li>蓝色 🔵</li>
<li>绿色 🟢</li>
<li>黄色 🟡</li>
<li>橙色 🟠</li>
<li>紫色 🟣</li>
<li>粉色 🩷</li>
<li>黑色 ⚫</li>
</ul>
<p>点击颜色圆圈即可切换画笔颜色。</p>
<h3 id="笔粗调整" tabindex="-1"><a class="header-anchor" href="#笔粗调整"><span>笔粗调整</span></a></h3>
<p>工具栏提供 4 种笔粗选项：</p>
<ul>
<li>细 (2px)</li>
<li>中 (4px)</li>
<li>粗 (6px)</li>
<li>特粗 (8px)</li>
</ul>
<p>点击对应的圆点即可切换笔粗。</p>
<h2 id="下一步" tabindex="-1"><a class="header-anchor" href="#下一步"><span>下一步</span></a></h2>
<ul>
<li>了解更多<a href="/guide/features" target="_blank" rel="noopener noreferrer">功能介绍</a></li>
<li>查看<a href="/guide/settings" target="_blank" rel="noopener noreferrer">设置选项</a></li>
<li>学习<a href="/guide/shortcuts" target="_blank" rel="noopener noreferrer">快捷键</a></li>
</ul>
</div></template>


