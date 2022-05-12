export const createUserSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
            minLength: 4,
        },
        email: {
            format: 'email',
        },
        phone: {
            type: 'string',
            minLength: 10,
        },
        password: {
            type: 'string',
            minLength: 3,
            maxLength: 10,
        },
        sex: {
            enum: ['m', 'f'],
        },
        role: {
            enum: ['newbie', 'student', 'teacher'],
        },
    },
    required: ['name', 'email', 'phone', 'password', 'sex'],
    additionalProperties: false,
};


// {
//     "name": "John Doe",
//     "email": "jdoe@example.com",
//     "phone": "+380662332377",
//     "password": "ab12345Cd",
//     "sex": "m",
//     "role": "newbie"
// }