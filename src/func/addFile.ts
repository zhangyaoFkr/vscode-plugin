import { writeFileSync } from 'fs';
import { join } from 'path';

export default function addFile(path: string, componentName: string) {
    // 路径分隔符在 window 和 linux 内核是不一样的
    // console.log('代码位置', __dirname);
    // console.log('当前执行路径', process.cwd());
    // 暂时只能在文件夹上右键新建文件
    const abPath = join(path, `${componentName}.js`);
    // 这里可以搞一个根据输入后缀名来填充不同的模板的功能
    const reactClassSnippet = "\nclass Comp extends React.Component {\n\trender() {\n\t\treturn (\n\n\t\t);\n\t}\n}";
    try {
        writeFileSync(abPath, reactClassSnippet, "utf-8");
    } catch (error) {
        console.log(error);
    }
}
