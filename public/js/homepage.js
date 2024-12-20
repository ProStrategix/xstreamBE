document.addEventListener("DOMContentLoaded", function () {
    // Data for the slides
    const slides =  ["../../public/logos/3abn.svg", "../../public/logos/31.4_LXN.svg", "../../public/logos/abc9.svg", "../../public/logos/abc20.svg", "../../public/logos/accn.svg", "../../public/logos/ae.svg", "../../public/logos/ahc.svg", "../../public/logos/amgtv.svg", "../../public/logos/animal.svg", "../../public/logos/ant1.svg", "../../public/logos/antenna.svg", "../../public/logos/arts.png", "../../public/logos/awe.svg", "../../public/logos/b1g.svg", "../../public/logos/biztv.svg", "../../public/logos/bloom.svg", "../../public/logos/bounce.svg", "../../public/logos/bravo.svg", "../../public/logos/buzzr.svg",
   "../../public/logos/cars.svg", "../../public/logos/cartoon.svg", "../../public/logos/catchy.svg", "../../public/logos/cbs4.svg", "../../public/logos/cbs6.png", "../../public/logos/charge.svg", "../../public/logos/circle.svg", "../../public/logos/city27.svg", "../../public/logos/cnbc.svg", "../../public/logos/cnbcw.svg", "../../public/logos/cnn.svg", "../../public/logos/comedy.svg", "../../public/logos/comet.svg", "../../public/logos/cook.svg", "../../public/logos/court.svg", "../../public/logos/cowboy.png", "../../public/logos/cowgirl.png", "../../public/logos/cozi.svg", "../../public/logos/create.svg", "../../public/logos/crime.svg", "../../public/logos/cspan.svg", "../../public/logos/cspan2.svg", "../../public/logos/cspan3.svg", "../../public/logos/cw18.svg", "../../public/logos/dabl.svg", "../../public/logos/damerica.svg", "../../public/logos/daystar.svg", "../../public/logos/defy.svg", "../../public/logos/dfamily.svg", "../../public/logos/discovr.svg", "../../public/logos/disney.svg", "../../public/logos/disnjr.svg", "../../public/logos/disnxd.svg",
    "../../public/logos/pbs5.svg", "../../public/logos/pbs24.png", "../../public/logos/peru.svg", "../../public/logos/pets.svg", "../../public/logos/positiv.png", "../../public/logos/pursuit.svg", "../../public/logos/quest.svg", "../../public/logos/qvc.svg", "../../public/logos/qvc2.svg", "../../public/logos/qvc3.svg", "../../public/logos/recipe.svg", "../../public/logos/reelz.svg", "../../public/logos/rfdtv.svg", "../../public/logos/rntv.svg", "../../public/logos/science.svg", "../../public/logos/sec.svg", "../../public/logos/shophq.svg", "../../public/logos/shoplc.svg", "../../public/logos/smc.svg", "../../public/logos/sony.svg"];

    // Get the container for the slides
    const slideTrack = document.querySelector(".slide-track");

    // Populate the slide track with slide divs
    slides.forEach(src => {
        const slide = document.createElement("div");
        slide.classList.add("slide");

        const img = document.createElement("img");
        img.src = src;
        img.alt = ""; // Add alt text if needed
        slide.appendChild(img);

        slideTrack.appendChild(slide);
    });
});