import { _ } from "core-js";

export default {
  actions: {
    // async fetchTodos(store) {
    //   fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
    //     .then((body) => {
    //       return body.json();
    //     })
    //     .then((todos) => {
    //       store.commit("updateTodos", todos);
    //     });
    // },

    removeTodo(store, id) {
      store.commit("removeTodo", id);
    },

    toggleInput(store, id, completed) {
      store.commit("toggleInput", id, completed);
    },

    takeItem(store, id) {
      store.commit("setSelectedTodo", id);
    },
  },
  // похожи на мутации, но вместо того, чтобы мутировать состояние,
  // они совершают (commit) мутации.
  // Главное отличие действий от мутаций это то что действия асинхронны, то есть предназначены для выполнения асинхронных задач;
  // когда эти задачи выполнены, нам нужно фиксировать (commit) мутацию, которая, в свою очередь, обновляет состояние.

  // асинхронны похоже на mutations, когда выполнилось нужно зафиксировать через commit которая обновляет состояние state

  //делает запрос на бекенд

  mutations: {
    updateTodos(state, todos) {
      state.todos = todos;
    },

    removeTodo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },

    toggleInput(state, id) {
      const findId = state.selectedTodosIds.find(
        (selectedTodoId) => selectedTodoId === id
      );

      if (!findId) {
        state.selectedTodosIds.push(id);
      } else {
        state.selectedTodosIds = state.selectedTodosIds.filter(
          (selectedTodoId) => selectedTodoId !== id
        );
      }

      state.todos = state.todos.map((todoItem) => {
        if (todoItem.id == id) {
          todoItem.completed = !todoItem.completed;
        }
        return todoItem;
      });
    },

    setSelectedTodo(state, id) {
      state.selectedTodo = state.todos.find((todo) => todo.id == id);
    },

    updateTitleTodos(state, payload) {
      state.todos = state.todos.map((todo) => {
        if (todo.id == state.selectedTodo.id) {
          todo.title = payload.todoTitle;
          todo.description = payload.todoDescription;
        }
        return todo;
      });
    },

    deleteSelectedTask(state) {
      state.todos = state.todos.filter(
        (todo) => !state.selectedTodosIds.includes(todo.id)
      );
    },

    addTask(state, todo) {
      state.todos.push(todo);
    },

    deleteAll(state) {
      state.todos = [];
    },
  },
  // Мутации — единственный способ, которым мы можем обновить наше состояние Vuex.
  // Они выполняют одну и только одну задачу: установить состояние.
  // Это функция, которая принимает два аргумента, состояние (state) и полезную нагрузку (payload), где полезная нагрузка не обязательна.

  // отвечают за установление нового состояния (state,[payload])

  state: {
    todos: [],
    selectedTodosIds: [],
    selectedTodo: {},
  },
  // Это один объект, который содержит все данные.
  // Это похоже на ключевое слово data в структуре отдельных компонентов, за исключением того,
  // что к этому состоянию можно получить доступ более чем из одного компонента, и, когда это состояние обновляется,
  // все компоненты, обращающиеся к нему, также получают это изменение.

  // содержит все данные похоже на date,но к нему можно получить доступ из любого компонента

  getters: {
    todos: (state) => {
      return state.todos;
    },

    selectTodo: (state) => {
      return state.selectedTodo;
    },

    getState: (state) => (id) => {
      return state.subTask.find((el) => el.id == id);
    },
  },
};

// Они позволяют нам генерировать новое состояние на основе текущего состояния — например, вычисляя, сколько товаров у нас в корзине.

// getters==computed
