import {forEach} from 'lodash-es';
import 'jquery';

const $ = (window as any).jQuery;

$(document).ready(function() {
  class Wizard {
    constructor(private name: string, private email: string) {
    }

    getDisplayName() {
      return `${this.name} &lt;${this.email}&gt;`;
    }
  }

  const databaseOfWizards: Wizard[] = [];

  const addWizard = (wizard: Wizard): void => {
    $('#wizards').append(`<p>${wizard.getDisplayName()}</p>`);
  }

  const p1 = new Wizard('Harry Potter', 'harry@potter.com');
  const p2 = new Wizard('Ron Weasley', 'ron@w.com');

  databaseOfWizards.push(p1);
  databaseOfWizards.push(p2);

  forEach(databaseOfWizards, addWizard);

  $('form').on('submit', function(e) {
    e.preventDefault();
    const [name, email] = [(this as any).name.value, (this as any).email.value];
    (this as any).reset();
    databaseOfWizards.push(new Wizard(name, email));
    addWizard(databaseOfWizards[databaseOfWizards.length - 1]);
  });
});
