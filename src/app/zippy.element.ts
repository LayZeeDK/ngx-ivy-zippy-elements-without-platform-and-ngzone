import { NgElementConstructor } from '@angular/elements';

import { createCustomIvyElement } from './create-custom-ivy-element';
import { ZippyComponent } from './zippy.component';

export const ZippyElement: NgElementConstructor<ZippyComponent> =
  createCustomIvyElement(ZippyComponent);
