export const manageClasses = () => {
  const classOne = document.querySelector('.one');
  classOne.classList.add('selected');
  //=> class = "one selected"

  const classTwo = document.querySelector('.two');
  classTwo.classList.remove('selected');
  //=> class = "one"

  const classThree = document.querySelector('.three');
  classThree.classList.toggle('three_done');
  //=> class="three three_done" => class="three"

  const classFour = document.querySelector('.four');
  if (classFour.classList.contains('some-class')) {
    classFour.classList.add('another-class');
  }
};

//manageClasses();
