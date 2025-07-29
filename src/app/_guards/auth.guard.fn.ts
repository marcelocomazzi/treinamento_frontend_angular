import { CanMatchFn, Route } from "@angular/router";

export const authLoadGuard: CanMatchFn = (route: Route) => {
    /*
  const authService = inject(AuthService);

  const router = inject(Router);

  const user = authService.getUser();

  if (authService.loginStatus() && user) {
    const tipUser: number[] = route.data["Tip_usuario"] as number[];

    if (tipUser) {
      if (tipUser.find((i) => i == user.Tip_usuario)) return true;
      else {
        router.navigate(["/proibido"]);
        return false;
      }
    }
    return true;
  }

  router.navigate(["/login"]);
  return false;
  */
    return true;
};
