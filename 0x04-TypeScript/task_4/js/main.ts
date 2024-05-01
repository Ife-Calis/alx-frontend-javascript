import { Subject } from './Subject';

const cpp: Subject.Cpp = new Subject.Cpp();
const react: Subject.React = new Subject.React();
const java: Subject.Java = new Subject.Java();

const cTeacher: Subject.Teacher = {
  firstName: 'Gabie',
  lastName: 'Stoke',
  eexperienceTeachingC: 10,
};

const cppTeacher: Subject.Cpp = new Subject.Cpp();
console.log('C++');
cppTeacher.setTeacher(cTeacher);
console.log(cppTeacher.getRequirements());
console.log(cppTeacher.getAvailableTeacher());

const javaTeacher: Subject.Java = new Subject.Java();
console.log('Java');
javaTeacher.setTeacher(cTeacher);
console.log(javaTeacher.getRequirements());
console.log(javaTeacher.getAvailableTeacher());

const reactTeacher: Subject.React = new Subject.React();
console.log('Java');
reactTeacher.setTeacher(cTeacher);
console.log(reactTeacher.getRequirements());
console.log(reactTeacher.getAvailableTeacher());

export { cpp, react, java, cTeacher };
