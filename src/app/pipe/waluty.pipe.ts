import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'waluty'
})
export class WalutyPipe implements PipeTransform {

  transform(value: unknown ): unknown {
    return `${value} PLN`;
  }

}
