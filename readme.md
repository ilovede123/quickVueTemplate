## 这是一个用于快速生成vue模板的package
## 使用 
## 1.安装到全局
```
npm install quickvue2001 -g
```
## 2.使用 
提供一个--html指令用于快速生成模板,减少上课不必要浪费的时间,
--html后面接你想要创建的项目名字
比如
```
qfv2001 --html 01.测试内容
```
那么会在你当前的目录下 创建一个'01.测试内容.html'

-title指令可以创建head标签中和 legend标签中的内容
```
qfv2001 --html 01.测试内容 -title 测试
```

## 3.也可以局部安装 在当前项目下 
```
npm install quickVue2001 --save
```
使用的时候加上npx 如果没有npx请安装
```
npm i npx -g 
```
装好只用使用方式
```
npx qfv2001 --html 01.测试内容
```
#### 后续将会添加更多功能 有更好的建议可以联系我
ilovede123@github.com
qq:718781500