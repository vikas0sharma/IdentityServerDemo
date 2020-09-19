import { LogLevel, OidcConfigService } from 'angular-auth-oidc-client';

export function configureAuth(oidcConfigService: OidcConfigService) {
    return () =>
      oidcConfigService.withConfig({
        clientId: 'weatherapp',
        stsServer: 'https://localhost:44381',
        responseType: 'code',
        redirectUrl: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        scope: 'openid profile WeatherAPI',
        logLevel: LogLevel.Debug,
      });
  }