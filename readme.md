# source localforage

localforage 使用 grunt 打包，不方便调试，已手动改成 rollup 打包，方便调试。

## 代码调试方式 (VSCode环境)

1. 下载依赖

```bash
$ pnpm install & pnpm run install
```

2. 打包并本地发布

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

```bash
$ pnpm run dev
```

vscode 调试环境已经配置，启动项目打好断点，然后 VSCode 调试面板选择 `Launch Chrome` 即可。了解更多[调试技巧](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)
