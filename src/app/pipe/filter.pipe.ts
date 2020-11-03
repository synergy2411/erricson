import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure : false
})
export class FilterPipe implements PipeTransform {
  transform(todos: any, filteredStatus: string): any {
    if (filteredStatus === '' || todos.length === 0) {
      return todos;
    }

    const resultArray = [];
    for (const todo of todos) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }
    return resultArray;
  }
}
