## 使用babel让node支持es5-es7的语法

### 一、需要用到的库

```
npm i babel-cli babel-preset-env -D
npm i -S babel-plugin-transform-runtime babel-runtime
```

### 二、.babelrc配置

```
{
    "presets": [
        [
            "env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ],
    "plugins": [
        [
            "transform-runtime",
            {
                "polyfill": false,
                "regenerator": true
            }
        ]
    ]
}
```

### 三、编写package.json中执行的脚本

程序文件结构

```
.
├── dist
│   ├── ex.js
│   ├── ex.js.map
│   ├── index.js //ndex.js文件中包含了 import Generator Function这些es5-es6的语法，在低版本node中需要使用babel编译才能执行
│   └── index.js.map
├── package-lock.json
├── package.json
└── src
    ├── ex.js
    └── index.js
```

package.json脚本内容

```json
"scripts": {
  		//使用rimraf库删除dist文件夹并使用babel编译src文件夹中的文件到dist文件夹中
        "build": "rimraf dist && babel src -s -D -d dist",
  		//使用nodemon监听src文件夹下修改并使用babel-node运行index.js文件  或者直接执行   `./node_modules/.bin/babel-node src/index.js`
        "dev": "nodemon -w src --exec 'babel-node src/index.js --presets env'"
    },
```

### 四、demo地址
[babel-demo](https://github.com/GitWuJun/babel-demo)




