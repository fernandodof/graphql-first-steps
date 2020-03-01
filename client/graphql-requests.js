async function graphqlRequest(query, variables = {}) {
    const request = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ query, variables })
    };
    const response = await fetch('http://localhost:3000/graphql', request);
    const responseBody = await response.json();

    return responseBody.data;
};

async function getUser() {
    const query = `
        query UserQuery($id: ID!) {
            user(id: $id) {
                name
                email
            }
        }    
    `;

    const variables = { id: 1 };

    const data = await graphqlRequest(query, variables);
    console.log(data.user);
    return data.user;
}