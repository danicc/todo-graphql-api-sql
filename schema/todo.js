const Todo = `
    type Todo {
        id: ID!
        title: String
        description: String
        dueDate: String
        isCompleted: Boolean
    }
    
    input CreateTodo {
        title: String!
        description: String
        dueDate: String
        isCompleted: Boolean
    }

    input UpdateTodo {
        title: String
        description: String
        dueDate: String
        isCompleted: Boolean
    }
`;

export default Todo;

