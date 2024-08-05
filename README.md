# SimLRC
轻量而美观的 Web 歌词组件
 
![simlrc](https://github.com/user-attachments/assets/38a5b970-92a6-4034-8652-150898081794)

## 在线演示站
https://yanji314.github.io/SimLRC/demo/

## 基本用法
1. 引入 SimLRC 的 css 和 js 文件
   ```html
   <link rel="stylesheet" href="path/to/simlrc.css">
   <script src="path/to/simlrc.js"></script>
   ```
2. 准备一个 audio 元素和一个歌词容器
   ```html
   <audio src="path/to/music.mp3" controls id="audio"></audio>
   <div id="container"></div>
   ```
3. 构造一个 SimLRC 实例
   ```javascript
   const lrc = new SimLRC("<LRC 格式的字符串>");
   ```
4. 使用默认配置渲染歌词 
   ```javascript
   lrc.render(document.getElementById("container"), document.getElementById("audio"));
   ```

## 按需求配置
在「渲染」一步，`lrc.render` 方法支持传入第三个参数用于进行配置。
```javascript
lrc.render(document.getElementById("container"), document.getElementById("audio"), options);
```
`options` 支持传入以下参数：
```javascript
const options = {
	blurStep: 1, // 上下歌词模糊层级，设为 0 以禁用此功能，推荐在移动设备禁用
	blurMin: 2, // 最小歌词模糊级别
	blurMax: 5, // 最大歌词模糊级别，设为 0 以禁用此功能
	normalColor: "#00000088", // 歌词闲置状态字体颜色
	activeColor: "#000000", // 歌词聚焦状态字体颜色
	clickUpdate: true, // 是否支持用户通过点击歌词调整播放进度
	multiLangSupport: true, // 开启多语言支持，开启后时间标签相同的不同歌词将作为多语言翻译渲染
	align: "center", // 文字排版方式，支持 left、center、right
	inactiveZoom: .8, // 歌词闲置状态缩放大小，设为 1 以禁止缩放
	lineSpace: .8, // 歌词行距倍数，设为 0 以使用紧凑布局
	scrollTimeout: 3000, // 在用户进行滚动操作后 n 毫秒后恢复自动滚动歌词
	callback: console.log // 在歌词更新时，将调用 callback(text)，用于设置网页标题等需求使用
};
```
