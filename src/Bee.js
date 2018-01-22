var Bee = function () {
  Grub.call();
  this.age = 5;
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

Bee.prototype.color = 'yellow';