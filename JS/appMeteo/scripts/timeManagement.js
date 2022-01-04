const dayOfWeek = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

let day = new Date();
let options = {weekday: 'long'};

let actualDay = day.toLocaleDateString('fr-FR', options);

// console.log(actualDay, day);

// actualDay = actualDay.charAt(0).toUpperCase + actualDay.slice(1);

let arrDaysOrder = dayOfWeek.slice(dayOfWeek.indexOf(actualDay)).concat(dayOfWeek.slice(0, dayOfWeek.indexOf(actualDay)));
// console.log(arrDaysOrder);

export default arrDaysOrder;
