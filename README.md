TypeScript Import Txt File as String Demo
=========================================

在Typescript如果要如果非ts/js文件，比如以文本方式引入`.txt`文件，那么只使用typescript是做不到的。
必须借助于其它的bundler，比如webpack。

有几点值得注意：

1. `txt.d.ts`：它定义了`.txt`的模块类型，没有它的错，typescript无法通过编译
2. `webpack.config.js`: 里面通过`raw-loader`导入txt文件的内容。没有它的话，虽然可以编译，但是得到的内容为空

但是当前的代码并不完美，因为不论是:

```
import username from './username.txt'
```

还是

```
import * as username from './username.txt'
```

都有各种各样的编译或运行问题，所以我当前的做法是：

```
const username = require('./username.txt') as string
```

希望能找到原因并改进。

```
npm install
npm run demo
```

