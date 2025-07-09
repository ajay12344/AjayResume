import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ajay-resume';
  name = 'Ajay Rangam';
  skills = [
    'Angular',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'JavaScript',
    'Python',
    'RxJS',
  ];
  projects = [
    {
      title: 'Deutsche Bank',
      desc: `Deutsche Bank Wealth Management is one of the world’s 
      largest wealth managers and the valued partner of individuals, 
      entrepreneurs, family offices and foundations.`,
      img: './assets/img/dustcheBankLogo.png',
    },
    {
      title: 'Saudi National Bank',
      desc: `SNB Capital offers professional wealth management 
      services that encompass almost everything that impacts on your net worth`,
      img: './assets/img/SNBLogo.png',
    },
  ];
  ngOnInit() {
    AOS.init({ duration: 1500 }); //AOS - 2
  }
  ngAfterViewInit(): void {
    AOS.refresh();
  }

  // onSubmit(details : NgForm){
  //   console.log(details)
  // }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      const nativeForm = document.querySelector('form') as HTMLFormElement;
      if (nativeForm) {
        nativeForm.reportValidity(); // This will show the "Please fill out this field" message
      }
      return;
    }

    // Submit the form data
    console.log('Form Submitted', form.value);

    emailjs
      .send(
        'service_ygo258n',
        'template_koj2de5',
        {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message,
        },
        'QC-5jLVk6r_d1qUv6'
      )
      .then(
        () => {
          alert('✅ Email sent successfully!');
          form.resetForm();
        },
        (error) => {
          console.error('❌ Failed to send email:', error);
          alert('❌ Failed to send email.');
        }
      );
  }

  openDocument() {
    const fileUrl = './assets/Ajay_Resume.pdf';
    window.open(fileUrl, '_blank');
  }

  // sendEmail(event: Event) {

  //   if (form.invalid) return;

  //   event.preventDefault();

  //   emailjs.sendForm(
  //     'service_ygo258n',     // e.g., service_xxxx
  //     'template_g81whqy',    // e.g., template_abcd
  //     event.target as HTMLFormElement,
  //     'QC-5jLVk6r_d1qUv6'      // e.g., MZxkYxxxxXxxx
  //   ).then(() => {
  //     alert('✅ Email sent successfully!');
  //   }, (error) => {
  //     console.error('❌ Email send error:', error);
  //     alert('❌ Failed to send email.');
  //   });
  // }
}
