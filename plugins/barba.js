import barba from "@barba/core";

function delay(n) {
  n = n || 2000;
  // Keep official documentation wording, done -> resolve
  // and make it more concise
  return new Promise(resolve => {
    setTimeout(resolve, n);
  });
}

function pageTransitionIn() {
  var tl = gsap.timeline();
  tl.to("ul.transition li");
}

barba.init({
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransitionIn();
        await delay(1500);
        done();
      }
    }
  ]
});
