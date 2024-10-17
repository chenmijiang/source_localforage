# source localforage

localforage 使用 grunt 打包，不方便调试，已手动改成 rollup 打包，方便调试。

## 代码调试方式 (VSCode环境)

1. 下载依赖

```bash
$ pnpm install & pnpm run install
```

2. 打包并 yalc 发布

```bash
$ pnpm run build

$ pnpm run publish
```

> 更新使用 `pnpm run push`


3. 下载本地包

```bash
$ pnpm run add
```

4. 调试

> 单独打开 demo-vite 项目调试，不然源码无法映射

vscode 调试环境已经配置，启动项目打好断点，然后 VSCode 调试面板选择 `Launch Chrome` 即可。
