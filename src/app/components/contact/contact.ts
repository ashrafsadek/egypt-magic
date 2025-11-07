import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  statusMessage: string = '';
  showValidationMessage: boolean = false;
  
ngAfterViewInit() {
  const form = document.querySelector('form');
  form?.addEventListener('input', () => {
    const allInputsFilled = Array.from(form.querySelectorAll('input, textarea')).every(
      (el: any) => el.value.trim() !== ''
    );
    if (allInputsFilled) {
      this.showValidationMessage = false;
    }
  });
}
  sendEmail(contactForm: NgForm) {

    if (contactForm.invalid) {
      this.showValidationMessage = true;
      Object.values(contactForm.controls).forEach(control => {
        control.markAsTouched();
      });
      this.statusMessage = '';
      return;
    }

    this.showValidationMessage = false;

    const formValues = contactForm.value;

    emailjs
      .send(
        'service_j8trhqf',
        'template_7sajfli',
        {
          to_email: 'finalnxt@gmail.com',
          from_name: formValues.from_name,
          from_email: formValues.from_email,
          subject: formValues.subject,
          message: formValues.message,
        },
        '4CvOjmziJcRLl-Uj5'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          this.statusMessage = ' Your message has been sent successfully!';
          console.log(result.text);
          contactForm.resetForm();
        },
        (error) => {
          this.statusMessage = ' Failed to send message. Please try again.';
          console.error(error.text);
        }
      );
  }
}
