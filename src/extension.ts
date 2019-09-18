// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "first-demo" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	const disposable2 = vscode.commands.registerCommand('extension.hiYou', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hi You, Right!');
	});

	const createFunctionalComponent = vscode.commands.registerCommand('extension.createFunctionalComponent', param => {
		/*
		param:
			$mid:1
			fsPath:"d:\workspace\cookie\xxx"
			_sep:1
			external:"file:///d%3A/workspace/cookie/xxx"
			path:"/d:/workspace/cookie/xxx"
			scheme:"file"
		*/
		// get folder's absolute path
		// fsPath:"d:\workspace\cookie\xxx"
		// path:"/d:/workspace/cookie/xxx"
		const folderPath = param.fsPath;
		// the options pass to window.showInputBox
		const options = {
			prompt: "Please input component name",
			placeholder: "Component name"
		};
		vscode.window.showInputBox(options).then(value => {
			if (!value) {
				return;
			}
			const componentName = value;
			// 路径分隔符在 window 和 linux 内核是不一样的
			const fullPath = `${folderPath}/${componentName}`;
			// TODO: 创建一个文件并写入模板
		});

	});

	context.subscriptions.push(disposable, disposable2);
	context.subscriptions.push(createFunctionalComponent);
}

// this method is called when your extension is deactivated
export function deactivate() {}
