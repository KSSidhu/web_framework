export class UserForm {
	constructor(public parent: Element) {}

	template(): string {
		return `
		<div>
			<h1>User Form</div>
			<input /> 
		</div>
		`;
	}

	render(): void {
		const templateElement = document.createElement("template");
		templateElement.innerHTML = this.template();
		this.parent.append(templateElement.content);
	}
}
