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

	changeTo('changeToHTML', 'html');
	changeTo('changeToJavaScript', 'javascript');
	changeTo('changeToCSS', 'css');
	changeTo('changeToJSON', 'json');
	changeTo('changeToTypeScript', 'typescript');
}

export function deactivate() {}
