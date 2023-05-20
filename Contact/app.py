from flask import Flask, render_template, redirect, url_for, flash
from form import ContactForm
from flask_mail import Mail, Message
from email.message import EmailMessage
import csv
import ssl
import smtplib

app = Flask(__name__, static_url_path='/static')
app.config["SECRET_KEY"] = "Kptivbbqusppu123!"

@app.route("/", methods=["GET", "POST"])
def home():
    form = ContactForm()
    if form.validate_on_submit():
        with open("form_data.csv", "a", newline="") as file:
             writer = csv.writer(file)
             writer.writerow([form.name.data, form.email.data, form.message.data])
        flash("Thanks for getting in touch, we will reach out shortly!")

        email_sender = 'joshuaaptroot@googlemail.com'
        email_password = 'namnuvqgpnstvsga'
        email_reciever = 'aptrootwork@googlemail.com'

      
        subject = "Message for Jeans Ditial"
        body = (f"From: {form.name.data} Contact Details: {form.email.data} Message:{form.message.data}")

        em = EmailMessage()
        em['From'] = email_sender
        em['To'] = email_reciever
        em['Subject'] = subject
        em.set_content(body)

       
        context = ssl.create_default_context()

     
        with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
            smtp.login(email_sender, email_password)
            smtp.sendmail(email_sender, email_reciever, em.as_string())

        print('email sent')
            
        return redirect(url_for("home"))
    return render_template("contact.html", form=form)



if __name__ == "__main__":
        app.run(debug=True)