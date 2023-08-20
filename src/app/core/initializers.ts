import { APP_INITIALIZER } from '@angular/core';

import { StartupService } from './bootstrap/startup.service';
import { TranslateLangService } from './bootstrap/translate-lang.service';


export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
export function TranslateLangServiceFactory(translateLangService: TranslateLangService) {
  return () => translateLangService.load();
}

export const appInitializerProviders = [
  {
    provide: APP_INITIALIZER,
    useFactory: TranslateLangServiceFactory,
    deps: [TranslateLangService],
    multi: true,
  },
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true,
  },
];
