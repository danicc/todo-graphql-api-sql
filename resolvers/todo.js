import { Todo } from '../db/models';

const todoResolver = {
  Query: {
    todos: async () => {
      try {
        const todos = await Todo.all();
        return todos;
      } catch (exception) {
        throw new Error(exception);
      }
    },
    todo: async (root, { id }) => {
      try {
        const todo = await Todo.findById(id);
        return todo;
      } catch (exception) {
        throw new Error(exception);
      }
    },
  },
  Mutation: {
    createTodo: async (root, { createTodoParams }) => {
      try {
        const createdTodo = await Todo.create({
          title: createTodoParams.title,
          description: createTodoParams.description,
          dueDate: createTodoParams.dueDate,
          isCompleted: createTodoParams.isCompleted,
        });
        return createdTodo;
      } catch (exception) {
        throw new Error(exception);
      }
    },
    updateTodo: async (root, { id, updateTodoParams }, context) => {
      if (context.user) {
        try {
          const todo = await Todo.findById(id);
          const updatedTodo = await todo.update({
            title: updateTodoParams.title,
            description: updateTodoParams.description,
            dueDate: updateTodoParams.dueDate,
            isCompleted: updateTodoParams.isCompleted,
          });
          return updatedTodo;
        } catch (exception) {
          throw new Error(exception);
        }
      }
      return new Error('Unauthorized');
    },
    deleteTodo: async (root, { id }) => {
      try {
        const todo = await Todo.findById(id);
        await todo.destroy({ force: true });
        return todo;
      } catch (exception) {
        return new Error(exception);
      }
    },
  },
};

export default todoResolver;
