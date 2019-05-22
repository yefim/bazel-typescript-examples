import {forEach} from 'lodash-es';

(function() {
  class Person {
    constructor(private name: string, private email: string) {
    }

    getDisplayName() {
      return `${this.name} <${this.email}>`;
    }
  }

  const p1 = new Person('Harry Potter', 'harry@potter.com');
  const p2 = new Person('Ron Weasley', 'ron@w.com');
  const people = [p1, p2];

  forEach(people, (p) => {
    console.log(p.getDisplayName());

    const pTag = document.createElement('p');
    const node = document.createTextNode(p.getDisplayName());
    pTag.appendChild(node);
    document.body.appendChild(pTag);
  });
})();
