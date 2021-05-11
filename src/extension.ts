import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	function changeTo(cmd: string, language: string) {
		const disposable = vscode.commands.registerCommand(`change-to-language-mode.${cmd}`, () => {
			const activeEditor = vscode.window.activeTextEditor;
			if (!activeEditor) {
				return;
			}

			vscode.languages.setTextDocumentLanguage(activeEditor.document, language);
		});

		context.subscriptions.push(disposable);
	}

	function changeToAndFormat(cmd: string, language: string) {
		const disposable = vscode.commands.registerCommand(`change-to-language-mode.${cmd}AndFormat`, () => {
			const activeEditor = vscode.window.activeTextEditor;
			if (!activeEditor) {
				return;
			}

			vscode.languages.setTextDocumentLanguage(activeEditor.document, language)
				.then(() => {
					vscode.commands.executeCommand('editor.action.formatDocument');
				});
		});

		context.subscriptions.push(disposable);
	}

	const arr = [{
		cmd: 'changeToHTML',
		fmt: 'html',
	}, {
		cmd: 'changeToJavaScript',
		fmt: 'javascript',
	}, {
		cmd: 'changeToCSS',
		fmt: 'css',
	}, {
		cmd: 'changeToJSON',
		fmt: 'json',
	}, {
		cmd: 'changeToTypeScript',
		fmt: 'typescript',
	}];
	arr.forEach(item => {
		changeTo(item.cmd, item.fmt);
		changeToAndFormat(item.cmd, item.fmt);
	});
}

export function deactivate() { }
