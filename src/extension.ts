import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('change-to-language-mode.changToHTML', () => {
		const activeEditor = vscode.window.activeTextEditor;
		if (!activeEditor) {
			return;
		}

		vscode.languages.setTextDocumentLanguage(activeEditor.document, 'html');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
