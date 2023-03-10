const template = document.createElement("template");
template.innerHTML = `
	<style>
		span {
			display: block;
			color: red;
			font-size: 18px;
		}
	</style>
	<div id="contain">
		<span>
			<slot></slot>
		</span>
		<input type="text" id="input">
		<button>添加</button>
	</div>
`;

class MyComponent extends HTMLElement {
	constructor() {
		super();
		const content = template.content.cloneNode(true);
		const contain = document.querySelector("#contain");
		const input = document.querySelector("input");
		const btn = document.querySelector("button");

		console.log(this.dataset.arr);
		const arr = JSON.parse(this.dataset.arr);
		// const arr = JSON.parse(this.dataset.arr);
		// arr.forEach(item => {
		// 	const li = document.createElement("li");
		// 	li.innerText = item;
		// 	contain.appendChild(li);
		// });


		this.attachShadow({ mode: "closed" }).appendChild(content);
	}
}
window.customElements.define("my-component", MyComponent);
