import { Directive, ElementRef } from '@angular/core';
import { PlatformDetectorService } from 'src/app/core/plataform/platform-detector.service';

@Directive({
  selector: '[appImmediateClick]'
})
export class ImmediateClickDirective {

  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService) {}

    ngOnInit(): void {
        this.platFormDetector.isPlatformBrowser &&
        this.element.nativeElement.click();

}

}
