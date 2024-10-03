import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  DataUrl,
  NgxImageCaptureModule,
  NgxImageCompressService,
  UploadResponse,
} from 'ngx-image-compress';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, NgxImageCaptureModule, FormsModule],
  providers: [NgxImageCompressService],
})
export class HomeComponent {
  protected imgResultBeforeCompress: DataUrl = '';
  protected imgResultAfterCompress: DataUrl = '';

  protected imgResultBeforeCompressSize: string = '';
  protected imgResultAfterCompressSize: string = '';
  protected quality: number = 50;
  protected size: number = 50;
  protected isRangeDisabled: boolean = false;
  protected isLoading: boolean = false;

  constructor(private imageCompress: NgxImageCompressService) {}

  ngOnInit() {
    this.imgResultBeforeCompress = '../../assets/no-image.png';
  }

  onQualityChange(newQuality: number) {
    this.quality = newQuality;
  }

  onSizeChange(newSize: number) {
    this.size = newSize;
  }

  byteCount(dataUrl: string): number {
    const base64 = dataUrl.split(',')[1];
    return Math.ceil((base64.length * 3) / 4);
  }

  public download() {
    if (this.imgResultAfterCompress) {
      this.isLoading = true;

      setTimeout(() => {
        const link = document.createElement('a');
        link.href = this.imgResultAfterCompress;
        link.download = 'compressed-image.jpg';
        link.click();
        this.isLoading = false;
      }, 4000);
    }
  }

  public clear() {
    this.imgResultAfterCompress = '';
    this.imgResultBeforeCompress = '../../assets/no-image.png';
    this.imgResultBeforeCompressSize = '';
    this.imgResultAfterCompressSize = '';
    this.isRangeDisabled = false;
  }

  public compressFile() {
    this.isRangeDisabled = true;
    return this.imageCompress
      .uploadFile()
      .then(({ image, orientation }: UploadResponse) => {
        this.imgResultBeforeCompress = image;

        this.imgResultBeforeCompressSize =
          'Size in bytes was: ' +
          this.imageCompress.byteCount(image) +
          ' bytes';

        this.imageCompress
          .compressFile(image, orientation, this.size, this.quality)
          .then((result: DataUrl) => {
            this.imgResultAfterCompress = result;

            this.imgResultAfterCompressSize =
              'Size in bytes is now: ' + this.byteCount(result) + ' bytes';
          });
      });
  }
}
