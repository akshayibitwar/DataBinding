import { Pipe, PipeTransform } from "@angular/core";


// @Pipe({
//     name : "summery",
// })

// export class SummeryPipe implements PipeTransform{
//         transform(value: string, limit : number) {
//           return value.substring(0, limit) + "...."
           
//         }
// }

@Pipe({
    name : "Taskpipe",
})

export class Taskpipe implements PipeTransform{
        transform(value: string, words : number) {
            return value.substring(0, words) + '....'
        }
}