# js_reverse_xigua



# 安装

```
pip install PyExecJS
pip install beautifulsoup4
pip install requests
```

# 运行脚本

python lyc.py

![捕获](.\1.PNG)



得到结果

![捕获2](.\2.PNG)



# 注意事项

###      1. 执行js的环境位Node.js (V8)

​         需要先安装node环境

###      2.加载js 文件可能报编码错，可参考https://blog.csdn.net/Aacheng123/article/details/121947833进行规避

​       execjs.compile(open(r'.\xigu.js', 'r', encoding='utf-8').read())

​      

