import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  http = inject(HttpClient);
  // id = new Subject<number>();

  constructor() {}

  public upload(description: string, elementRef: ElementRef): Promise<any> {
    const formData = new FormData();
    formData.set('description', description);
    formData.set('myfile', elementRef.nativeElement.files[0]);

    return firstValueFrom(this.http.post<any>('upload', formData))

  }
}
