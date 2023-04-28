export default function handler(request, response) {
    const { email } = request.query;
    return response.end(`Hello ${email}!`);
}