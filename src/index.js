//index.js文件中包含了 import Generator Function这些es5-es6的语法，在低版本node中需要使用babel编译才能执行

import fs from 'fs';
import co from 'co';
import { promisify } from 'util';

co(function*() {
    let data = yield promisify(fs.readFile)('./package.json');
    data = JSON.parse(data);
    console.log(data.name);
});
