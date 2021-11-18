const nodemailer = require('nodemailer')

export default function handler(req, res) {

    const { method, body } = req
    
    console.log("ERRO ==>")

    if (method === 'POST') {


        function mensagemEmail() {

            let mensagemPadrao

            if (body.empresa) {
                return mensagemPadrao = `<p> E-mail recebido de ${body.nome} da empresa ${body.empresa}.</p>`
            } else {
                return mensagemPadrao = `<p> E-mail recebido de ${body.nome}.</p> `
            }
        }

        let transport = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_HOST,
            port: process.env.NEXT_PUBLIC_PORT,
            auth: {
                user: process.env.NEXT_PUBLIC_AUTH_USER,
                pass: process.env.NEXT_PUBLIC_AUTH_PASS,
            }
        });

        let message = {
            from: `"ERO'SOFT ATENDIMENTO" <contato@erosoft.com.br>`,
            replyTo: `${body.email}`,
            to: `contato@erosoft.com.br, ${body.email}`,
            subject: `${body.assunto}`,
            text: `${body.mensagem}`,
            html: `<P>${mensagemEmail()}</P><p>${body.mensagem}</p>`,
        };
        
        return new Promise((resolve, reject) => {


            transport.sendMail(message)

                .then(response => {
                    res.statusCode = 200
                    res.setHeader('Content-Type', 'application/json');
                    res.setHeader('Cache-Control', 'max-age=180000');
                    res.end(JSON.stringify(response))
                    resolve();

                })

                .catch(error => {
                    console.log("ERRO ==>", error)
                    reject();
                });
        })
    } else {
        res.status(403).end();
    }
}

