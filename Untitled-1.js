// 声明一个常量数组来保存图片文件名
const imageFilenames = ['pic1.jpg'];

// 声明一个对象来保存每张图片的替代文本
const imageAltTexts = {
  'pic1.jpg': '这是一张图片的描述'
};

// 获取缩略图栏的 div 元素引用
const thumbnailBar = document.getElementById('thumbnail-bar');

// 遍历图片文件名数组，并为每张图片创建一个 img 元素
imageFilenames.forEach((filename) => {
  // 创建一个新的 img 元素
  const img = document.createElement('img');
  
  // 设置 img 元素的 src 属性
  img.src = `images/${filename}`; // 假设图片位于名为 images 的文件夹中
  
  // 设置 img 元素的 alt 属性，以提供替代文本
  img.alt = imageAltTexts[filename];
  
  // 设置 img 元素的样式，例如宽度
  img.style.width = '100px'; // 你可以根据需要调整宽度
  
  // 将 img 元素添加到缩略图栏的 div 中
  thumbnailBar.appendChild(img);
});
