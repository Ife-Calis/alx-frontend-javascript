namespace Subjects {
  export interface Teacher {
    firstName: string;
    lastName: string;
  }

  export class Subject {
    private _teacher: Teacher | null = null;

    get teacher(): Teacher | null {
      return this._teacher;
    }

    setTeacher(teacher: Teacher): void {
      this._teacher = teacher;
    }
  }
}
