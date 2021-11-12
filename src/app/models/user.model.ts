export class User {
  name: string = '';
  age: number | null = null;

  constructor(name: string, age:number | null) {
    this.name = name;
    this.age = age;
  }
}