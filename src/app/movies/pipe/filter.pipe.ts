import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[],filterSting:String,movieName:any): any {
    const result:any=[]

    if(!value || filterSting=="" || movieName==""){
      return value
    }
    else{
      value.forEach((item:any)=>{
        if(item[movieName].trim().toLowerCase().includes(filterSting.trim().toLowerCase()))
        result.push(item)
      })
      return result
    }

    return null;
  }

}
