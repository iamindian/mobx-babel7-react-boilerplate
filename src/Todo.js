import {observable,autorun} from "mobx"
class Todo {
	id = Math.random();
	@observable title = "";
	@observable finished = false;
	constructor(title){
		this.title = title;
		autorun(()=>{
			console.log(`${this.id}:${this.finished}`);
		});
	}
}


export default Todo;
