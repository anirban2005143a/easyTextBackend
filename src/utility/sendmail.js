import nodeMailer from "nodemailer"
import dotenv from 'dotenv';
dotenv.config();

const sendMail = async (usermail , content) => {
    //create a email transporter
    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDING_GMAIL,
            pass: process.env.GMAIL_APP_PASS
        }
    })

    // config email content 
    const mailOption = {
        from: process.env.SENDING_GMAIL,
        to: process.env.RECEIVER_MAIL,
        subject: 'MAIL FROM EASYTEXT',
        text: `New mail from ${usermail} - \n\n\n ${content}`,
        // html : `<hr> <a href=${url}>${url}</a>`
    }

    //send mail
    try {
        const result = await transporter.sendMail(mailOption)
        return true
    } catch (error) {
        console.log(error)
        return false
    }

}

export default sendMail;