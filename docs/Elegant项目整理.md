### 项目结构

    ├── test
    │   ├── removeDuplicate.test.js
    │   ├── random.test.js
    │   ├── memorize.test.js
    │   ├── index.test.js
    │   ├── format.test.js
    │   ├── curry.test.js
    │   ├── copy.test.js
    │   ├── compose.test.js
    │   └── cartNumber.test.js
    ├── src
    │   ├── removeDuplicate.js
    │   ├── random.js
    │   ├── memorize.js
    │   ├── index.js
    │   ├── format.js
    │   ├── curry.js
    │   ├── copy.js
    │   ├── compose.js
    │   ├── cartNumber.js
    │   └── .internal
    │       ├── judgeType.js
    │       └── errorHandler.js
    ├── package.json
    ├── gulpfile.babel.js   // 使用gulp进行打包编译
    ├── dist  // 打包之后的文件
    │   └── Elegant.min.js
    ├── README.md
    ├── .travis.yml  // 集成travis
    ├── .gitignore
    ├── .coveralls.yml // 集成coveralls
    └── .babelrc

#### 目录结构简介

 * src/

    存贮每个工具方法，也就是资源目录

 * src/.internal/

    存储的是内部使用的工具方法，不对外暴露

 * test/

    存储的是单元测试文件，对应src/里面的文件

 * dist/

    存储的是打包之后的文件

#### 单元测试

这里使用的单元测试框架是mocha(单元测试) + istanbul(测试覆盖率) + chai(断言库)

写单元测试的好处：
    
    程序健壮性的一个简单保证，至少保证你写的测试用例都能成功跑通，避免一些低级错误和逻辑错误

    方便以后的人维护代码，可以对照你的单元测试来进行修改，同时保证逻辑不出错

最好的单元测试就是能够覆盖代码的所有可能结果以及出错的地方

#### 集成travis和coverlalls(发包必备)

    travis是一个在线的持续集成工具(CI)，持续集成就是项目的自动化测试，部署(主要是集成各大代码仓储的webhook)

    coveralls是一个展示在线代码覆盖率的工具

最后的效果

![](http://7xrp7o.com1.z0.glb.clouddn.com/travis.png)