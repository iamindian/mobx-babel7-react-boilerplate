import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';
import TodoList from './TodoList.js';
import Todo from './Todo.js';
@observer
class TodoListView extends Component{
	render(){
		return <div>
			<ul>
				{this.props.todoList.todos.map(todo =>
					<TodoView todo={todo} key={todo.id} />
				)}
			</ul>
			Tasks left: {this.props.todoList.unfinishedTodoCount}
		</div>
	}
}

const TodoView = observer(({todo}) => 
	<li>
		<input
			type='checkbox'
			checked={todo.finished}
			onChange = {()=>{}}
			onClick={()=> todo.finished = !todo.finished}
		/>{todo.title}
	</li>
)

const store = new TodoList();

ReactDOM.render(<TodoListView todoList={store}/>,document.getElementById('mount'));

store.todos.push(
	new Todo("a person"),
	new Todo("another person")
);
store.todos[0].finished = true;