const User = `
    type User {
        todos: [Todo]
        uid: String
        email: String
    }
    
    input NewUser {
        email: String!
        password: String!
    }
`;

export default User;
