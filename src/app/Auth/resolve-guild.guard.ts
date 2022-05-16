import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { resolve } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuildGuard implements Resolve<any>{
  
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
  }
  
}
