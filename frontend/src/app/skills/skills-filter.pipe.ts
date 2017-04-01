import { Pipe, PipeTransform } from '@angular/core';
import { isString } from 'util';

@Pipe({
  name: 'skillsFilter'
})
export class SkillsFilterPipe implements PipeTransform {
  transform(value: string[], filterBy: string): string[] {
    if (isString(filterBy)) {
      filterBy = filterBy.toLocaleLowerCase();
      return value.filter(
        (skill: string) => skill.toLocaleLowerCase().includes(filterBy)
      );
    }
    return value;
  }
}
