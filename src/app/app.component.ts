import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from './upload.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-day37lesson3';

  @ViewChild('uploadFile')
  private uploadFile!: ElementRef;

  fb = inject(FormBuilder);
  svc = inject(UploadService);
  router = inject(Router);
  id!: number;
  route = inject(ActivatedRoute);

  uploadForm!: FormGroup;

  ngOnInit() {
    this.uploadForm = this.fb.group({
      description: this.fb.control<string>(''),
    });
  }

  processForm() {
    const value = this.uploadForm.value;
    console.log(this.uploadForm);
    this.svc
      .upload(value.description, this.uploadFile)
      .then((data) => {
        this.id = data.id;
        console.log(this.id);
        this.router.navigate(['content/', this.id], {relativeTo: this.route});
      })
      .catch((error) => {
        console.log(error);
      });
    
  }
}
