import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'key',
  pure: false
})
export class KeyPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
    for(let key in value) {
      keys.push(key)
    }
    return keys;
  }

}
