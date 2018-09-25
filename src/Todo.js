import observable from "mobx"
class Todo {
	id = Math.random();
	@observable title = "";
	@observable finish = false;
}

export default Todo;
