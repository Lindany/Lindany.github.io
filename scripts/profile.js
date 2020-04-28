const autoType = () => {
  const job = $("#job").get(0);
  const typewriter = new Typewriter(job, { loop: true });

  typewriter
    .typeString("Full Stack Developer")
    .pauseFor(2500)
    .deleteAll()
    .typeString("Software Developer")
    .pauseFor(2500)
    .start();
};

const goToContact = () => {
  $(".button.contact").on("click", function() {
    $(".navbar a[name=contact]").click();
  });
};

const downloadCV = () => {
  $(".button.download").on("click", function() {
    window.open(
      "https://drive.google.com/open?id=1-p4yeL9GXkw1J8g4HypkmlnRF66Eqf_s"
    );
  });
};

export { autoType, downloadCV, goToContact };
