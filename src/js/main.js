console.log('hello world!');

window.onload = function() {
  new TypeIt("#typeIt", {
    // strings: ["Designeri de Interior", "Arhitecti", "Game Designers"],
    speed: 50,
    loop: true,
    lifelike: true,
    waitUntilVisible: true
  })
  .type("Designeri de Interior", {delay: 2000})
  .delete()
  .type("Arhitecți", {delay: 2000})
  .delete()
  .type("Game Designeri", {delay: 2000})
  .go();
}