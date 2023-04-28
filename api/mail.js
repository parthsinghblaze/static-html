export default function handler(request, response) {
    const { email } = request.body;
    console.log('email', email);
    return response.end(`Hello!`);

    // console.log(request)
    // console.log('email', email)
    // return response.end(`Hello ${email}!`);
}