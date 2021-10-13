// https://ethereal.email/
module.exports = {
    service: {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        user: 'eloise.cremin93@ethereal.email',
        password: '9GaqXT1SH4CFzq4GFG'
    },
    registerVerification: {
        from: 'Hyper Coach Interface <noreply@hci.com>',
        subject: 'Confirmación de email',
        htmlBodyTemplate:
            `<div>
                <h1 style="text-align: center;">
                    <strong>Le damos la bienvenida a <span style="color: #fc987e;">Hyper Coach Interface</span></strong>
                </h1>
                <p>
                    <span>¡Es hora de hacer ejercicio!</span>
                </p>
                <p>
                    <span>Link válido hasta <%EXPIRATION_DATE%></span>
                </p>
                <div>
                    <a href="<%CONFIRM_LINK%>">Click para confirmar</a>
                <div>
                <h1 style="text-align: center;">
                    <strong>Tu código es <span style="color: #fc987e;"><%CODE%></span></strong>
                </h1>
            </div>`,
        confirmationLink: 'http://localhost:8080/verification?user=<%USER_ID%>&code=<%CODE%>',
        codeExpirationInterval: 24 * 60 * 60 * 1000
    }
}