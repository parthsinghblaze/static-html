import nodemailer from 'nodemailer';

export default async function handler(request, response) {

    const { email } = request.body;
    console.log('email', email);

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
        host: 'smtp.office365.com', // Replace with your SMTP host
        port: 587, // Replace with your SMTP port
        secure: true, // false for TLS; true for SSL
        auth: {
            user: 'parthsingh@ghanshyamdigital.com', // Replace with your SMTP username
            pass: 'Ashuandcow1', // Replace with your SMTP password
        },
        tls: { ciphers: 'SSLv3', rejectUnauthorized: false, },
    });

    try {
        await transporter.sendMail({
            from: 'parthsingh@ghanshyamdigital.com', // Replace with your email address
            to: email, // Replace with the recipient's email address
            subject: 'Test Email',
            text: 'This is a test email',
        });
        console.log('Email sent successfully');
        return response.end('Email sent successfully', email);
    } catch (error) {
        console.error(error);
        return response.end('Error', error);
    }
}