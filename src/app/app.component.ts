import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as AOS from 'aos';

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
    },
    {
      title: 'Saudi National Bank',
      desc: `SNB Capital offers professional wealth management 
      services that encompass almost everything that impacts on your net worth`,
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
}
}
