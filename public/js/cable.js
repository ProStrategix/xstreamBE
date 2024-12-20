// Data array with image paths and alt texts
const OPBASIC =[
    { src: "../../public/logos/epg.png", alt: "EPG" },
    { src: "../../public/logos/hotinfo.svg", alt: "HOTINFO" },
    { src: "../../public/logos/opinfo.svg", alt: "OPINFO" },
    { src: "../../public/logos/gl45.png", alt: "GL45" },
    { src: "../../public/logos/gators.svg", alt: "GATORS" },
    { src: "../../public/logos/wdsc15.svg", alt: "WDSC15" },
    { src: "../../public/logos/pbs24.png", alt: "PBS24" },
    { src: "../../public/logos/create.svg", alt: "CREATE" },
    { src: "../../public/logos/grit.svg", alt: "GRIT" },
    { src: "../../public/logos/comet.svg", alt: "COMET" },
    { src: "../../public/logos/charge.svg", alt: "CHARGE" },
    { src: "../../public/logos/yta.svg", alt: "YTA" },
    { src: "../../public/logos/superch.png", alt: "SUPERCH" },
    { src: "../../public/logos/ion.svg", alt: "ION" },
    { src: "../../public/logos/ionplus.png", alt: "IONPLUS" },
    { src: "../../public/logos/wefs.svg", alt: "WEFS" },
    { src: "../../public/logos/arts.png", alt: "ARTS" },
    { src: "../../public/logos/pbskids.png", alt: "PBSKIDS" },
    { src: "../../public/logos/news.svg", alt: "NEWS" },
    { src: "../../public/logos/fstv.svg", alt: "FSTV" }
];



// Select the carousel and dots container
const logoTrack = document.querySelector('.logo-track-op-basic');
const dotsContainer = document.querySelector('.dots-container-op-basic');

// Add images and dots dynamically
OPBASIC.forEach((image, index) => {
    // Create the slide div
    const slide = document.createElement('div');
    slide.classList.add('logo-slide');

    // Create the image element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    // Append image to slide
    slide.appendChild(img);

    // Append slide to track
    logoTrack.appendChild(slide);

    
});


document.querySelector(".left-btn").addEventListener("click", () => {
    document.querySelector(".logo-track-op-basic").scrollBy({ left: -100, behavior: "smooth" });
});

document.querySelector(".right-btn").addEventListener("click", () => {
    document.querySelector(".logo-track-op-basic").scrollBy({ left: 100, behavior: "smooth" });
});


// Data array with image paths and alt texts
const preferred =  [
    { src: "../../public/logos/epg.png", alt: "EPG" },
    { src: "../../public/logos/hotinfo.svg", alt: "HOTINFO" },
    { src: "../../public/logos/opinfo.svg", alt: "OPINFO" },
    { src: "../../public/logos/gl45.png", alt: "GL45" },
    { src: "../../public/logos/gators.svg", alt: "GATORS" },
    { src: "../../public/logos/wdsc15.svg", alt: "WDSC15" },
    { src: "../../public/logos/pbs24.png", alt: "PBS24" },
    { src: "../../public/logos/create.svg", alt: "CREATE" },
    { src: "../../public/logos/grit.svg", alt: "GRIT" },
    { src: "../../public/logos/comet.svg", alt: "COMET" },
    { src: "../../public/logos/charge.svg", alt: "CHARGE" },
    { src: "../../public/logos/yta.svg", alt: "YTA" },
    { src: "../../public/logos/superch.png", alt: "SUPERCH" },
    { src: "../../public/logos/ion.svg", alt: "ION" },
    { src: "../../public/logos/ionplus.png", alt: "IONPLUS" },
    { src: "../../public/logos/wefs.svg", alt: "WEFS" },
    { src: "../../public/logos/arts.png", alt: "ARTS" },
    { src: "../../public/logos/pbskids.png", alt: "PBSKIDS" },
    { src: "../../public/logos/trvl.svg", alt: "TRVL" },
    { src: "../../public/logos/discovr.svg", alt: "DISCOVR" },
    { src: "../../public/logos/own.svg", alt: "OWN" },
    { src: "../../public/logos/tlc.svg", alt: "TLC" },
    { src: "../../public/logos/natgeo.svg", alt: "NATGEO" },
    { src: "../../public/logos/animal.svg", alt: "ANIMAL" },
    { src: "../../public/logos/id.svg", alt: "ID" },
    { src: "../../public/logos/disney.svg", alt: "DISNEY" },
    { src: "../../public/logos/dfamily.svg", alt: "DFAMILY" },
    { src: "../../public/logos/unikids.svg", alt: "UNIKIDS" },
    { src: "../../public/logos/cartoon.svg", alt: "CARTOON" },
    { src: "../../public/logos/ff.svg", alt: "FF" },
    { src: "../../public/logos/mainst.svg", alt: "MAINST" },
    { src: "../../public/logos/amgtv.svg", alt: "AMGTV" },
    { src: "../../public/logos/hallmrk.svg", alt: "HALLMRK" },
    { src: "../../public/logos/hmystery.svg", alt: "HMYSTERY" },
    { src: "../../public/logos/hfamily.svg", alt: "HFAMILY" },
    { src: "../../public/logos/insp.svg", alt: "INSP" },
    { src: "../../public/logos/tfc.svg", alt: "TFC" },
    { src: "../../public/logos/biztv.svg", alt: "BIZTV" },
    { src: "../../public/logos/cspan.svg", alt: "CSPAN" },
    { src: "../../public/logos/cspan2.svg", alt: "CSPAN2" },
    { src: "../../public/logos/cspan3.svg", alt: "CSPAN3" },
    { src: "../../public/logos/earthx.svg", alt: "EARTHX" },
    { src: "../../public/logos/trt.svg", alt: "TRT" },
    { src: "../../public/logos/cnbc.svg", alt: "CNBC" },
    { src: "../../public/logos/msnbc.svg", alt: "MSNBC" },
    { src: "../../public/logos/cnn.svg", alt: "CNN" },
    { src: "../../public/logos/hln.svg", alt: "HLN" },
    { src: "../../public/logos/foxbus.svg", alt: "FOXBUS" },
    { src: "../../public/logos/foxnews.svg", alt: "FOXNEWS" },
    { src: "../../public/logos/twc.svg", alt: "TWC" },
    { src: "../../public/logos/espn.svg", alt: "ESPN" },
    { src: "../../public/logos/espn2.svg", alt: "ESPN2" },
    { src: "../../public/logos/fs1.svg", alt: "FS1" },
    { src: "../../public/logos/rntv.svg", alt: "RNTV" },
    { src: "../../public/logos/nfl.svg", alt: "NFL" },
    { src: "../../public/logos/mlb.svg", alt: "MLB" },
    { src: "../../public/logos/nhl.svg", alt: "NHL" },
    { src: "../../public/logos/nba.svg", alt: "NBA" },
    { src: "../../public/logos/golf.svg", alt: "GOLF" },
    { src: "../../public/logos/motor.svg", alt: "MOTOR" },
    { src: "../../public/logos/magnoli.svg", alt: "MAGNOLI" },
    { src: "../../public/logos/cook.svg", alt: "COOK" },
    { src: "../../public/logos/hgtv.svg", alt: "HGTV" },
    { src: "../../public/logos/food.svg", alt: "FOOD" },
    { src: "../../public/logos/gsn.svg", alt: "GSN" },
    { src: "../../public/logos/e!.svg", alt: "E!" },
    { src: "../../public/logos/bravo.svg", alt: "BRAVO" },
    { src: "../../public/logos/usa.svg", alt: "USA" },
    { src: "../../public/logos/syfy.svg", alt: "SYFY" },
    { src: "../../public/logos/tnt.svg", alt: "TNT" },
    { src: "../../public/logos/trutv.svg", alt: "TRUTV" },
    { src: "../../public/logos/tbs.svg", alt: "TBS" },
    { src: "../../public/logos/fx.svg", alt: "FX" },
    { src: "../../public/logos/oxygen.svg", alt: "OXYGEN" },
    { src: "../../public/logos/lifetime.svg", alt: "LIFETIME" },
    { src: "../../public/logos/lmn.svg", alt: "LMN" },
    { src: "../../public/logos/classics.svg", alt: "CLASSICS" },
    { src: "../../public/logos/fxx.svg", alt: "FXX" },
    { src: "../../public/logos/a&e.svg", alt: "A&E" },
    { src: "../../public/logos/fyi.svg", alt: "FYI" },
    { src: "../../public/logos/history.svg", alt: "HISTORY" },
    { src: "../../public/logos/justice.svg", alt: "JUSTICE" },
    { src: "../../public/logos/vice.svg", alt: "VICE" },
    { src: "../../public/logos/funroad.svg", alt: "FUNROAD" }
];


// Select the carousel and dots container
const logoTrack2 = document.querySelector('.logo-track-preferred');
const dotsContainer2 = document.querySelector('.dots-container-preferred');

// Add images and dots dynamically
preferred.forEach((image, index) => {
    
    // Create the slide div
    const slide = document.createElement('div');
    slide.classList.add('logo-slide2');

    // Create the image element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    // Append image to slide
    slide.appendChild(img);

    // Append slide to track
    logoTrack2.appendChild(slide);

    
});



document.querySelector(".left-btn2").addEventListener("click", () => {
    document.querySelector(".logo-track-preferred").scrollBy({ left: -100, behavior: "smooth" });
});

document.querySelector(".right-btn2").addEventListener("click", () => {
    document.querySelector(".logo-track-preferred").scrollBy({ left: 100, behavior: "smooth" });
});



// Data array with image paths and alt texts
const choice =[
    { src: "../../public/logos/wesh2.svg", alt: "WESH2" },
    { src: "../../public/logos/metv.svg", alt: "METV" },
    { src: "../../public/logos/story.svg", alt: "STORY" },
    { src: "../../public/logos/cbs6.png", alt: "CBS6" },
    { src: "../../public/logos/dabl.svg", alt: "DABL" },
    { src: "../../public/logos/cozi.svg", alt: "COZI" },
    { src: "../../public/logos/start.svg", alt: "START" },
    { src: "../../public/logos/abc9.svg", alt: "ABC9" },
    { src: "../../public/logos/laff.svg", alt: "LAFF" },
    { src: "../../public/logos/mystery.svg", alt: "MYSTERY" },
    { src: "../../public/logos/cw18.svg", alt: "CW18" },
    { src: "../../public/logos/tcn.svg", alt: "TCN" },
    { src: "../../public/logos/city27.svg", alt: "CITY27" },
    { src: "../../public/logos/court.svg", alt: "COURT" },
    { src: "../../public/logos/amcrime.svg", alt: "AMCRIME" },
    { src: "../../public/logos/fox35.svg", alt: "FOX35" },
    { src: "../../public/logos/buzzr.svg", alt: "BUZZR" },
    { src: "../../public/logos/foxwx.svg", alt: "FOXWX" },
    { src: "../../public/logos/gettv.svg", alt: "GETTV" },
    { src: "../../public/logos/quest.svg", alt: "QUEST" },
    { src: "../../public/logos/fox51.svg", alt: "FOX51" },
    { src: "../../public/logos/movies!.svg", alt: "MOVIES!" },
    { src: "../../public/logos/catchy.svg", alt: "CATCHY" },
    { src: "../../public/logos/bounce.svg", alt: "BOUNCE" },
    { src: "../../public/logos/fox35+.svg", alt: "FOX35+" },
    { src: "../../public/logos/h&i.svg", alt: "H&I" },
    { src: "../../public/logos/thegrio.svg", alt: "THEGRIO" },
    { src: "../../public/logos/shoplc.svg", alt: "SHOPLC" },
    { src: "../../public/logos/jtv.svg", alt: "JTV" },
    { src: "../../public/logos/shophq.svg", alt: "SHOPHQ" },
    { src: "../../public/logos/gem.svg", alt: "GEM" },
    { src: "../../public/logos/hsn.svg", alt: "HSN" },
    { src: "../../public/logos/hsn2.svg", alt: "HSN2" },
    { src: "../../public/logos/qvc.svg", alt: "QVC" },
    { src: "../../public/logos/qvc2.svg", alt: "QVC2" },
    { src: "../../public/logos/qvc3.svg", alt: "QVC3" },
    { src: "../../public/logos/3abn.svg", alt: "3ABN" },
    { src: "../../public/logos/jbs.svg", alt: "JBS" },
    { src: "../../public/logos/positiv.svg", alt: "POSITIV" },
    { src: "../../public/logos/daystar.svg", alt: "DAYSTAR" },
    { src: "../../public/logos/ewtn.svg", alt: "EWTN" },
    { src: "../../public/logos/inspire.svg", alt: "INSPIRE" },
    { src: "../../public/logos/tbn.svg", alt: "TBN" },
    { src: "../../public/logos/godtv.svg", alt: "GODTV" },
    { src: "../../public/logos/byu.svg", alt: "BYU" },
    { src: "../../public/logos/gebtv.svg", alt: "GEBTV" },
    { src: "../../public/logos/metoons.svg", alt: "METOONS" },
    { src: "../../public/logos/smile.svg", alt: "SMILE" },
    { src: "../../public/logos/3abn kids.svg", alt: "3ABN Kids" },
    { src: "../../public/logos/fmc.svg", alt: "FMC" },
    { src: "../../public/logos/fetv.svg", alt: "FETV" },
    { src: "../../public/logos/zliving.svg", alt: "ZLIVING" },
    { src: "../../public/logos/merit.png", alt: "MERIT" },
    { src: "../../public/logos/cgtnews.png", alt: "CGTNEWS" },
    { src: "../../public/logos/nhk.png", alt: "NHK" },
    { src: "../../public/logos/cgtndoc.png", alt: "CGTNDOC" }
];



// Select the carousel and dots container
const logoTrack3 = document.querySelector('.logo-track-choice');
const dotsContainer3 = document.querySelector('.dots-container-choice');

// Add images and dots dynamically
choice.forEach((image, index) => {
    
    // Create the slide div
    const slide = document.createElement('div');
    slide.classList.add('logo-slide3');

    // Create the image element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    // Append image to slide
    slide.appendChild(img);

    // Append slide to track
    logoTrack3.appendChild(slide);

    
});



document.querySelector(".left-btn3").addEventListener("click", () => {
    document.querySelector(".logo-track-choice").scrollBy({ left: -100, behavior: "smooth" });
});

document.querySelector(".right-btn3").addEventListener("click", () => {
    document.querySelector(".logo-track-choice").scrollBy({ left: 100, behavior: "smooth" });
});

// Data array with image paths and alt texts
const expanded = [
    { src: "../../public/logos/dlife.svg", alt: "DLIFE" },
    { src: "../../public/logos/crime.svg", alt: "CRIME" },
    { src: "../../public/logos/mhc.svg", alt: "MHC" },
    { src: "../../public/logos/ahc.svg", alt: "AHC" },
    { src: "../../public/logos/damerica.svg", alt: "DAMERICA" },
    { src: "../../public/logos/mydest.svg", alt: "MYDEST" },
    { src: "../../public/logos/awe.svg", alt: "AWE" },
    { src: "../../public/logos/ngw.svg", alt: "NGW" },
    { src: "../../public/logos/science.svg", alt: "SCIENCE" },
    { src: "../../public/logos/pets.svg", alt: "PETS" },
    { src: "../../public/logos/disnjr.svg", alt: "DISNJR" },
    { src: "../../public/logos/disnxd.svg", alt: "DISNXD" },
    { src: "../../public/logos/estv.svg", alt: "ESTV" },
    { src: "../../public/logos/lrw.svg", alt: "LRW" },
    { src: "../../public/logos/gfam.svg", alt: "GFAM" },
    { src: "../../public/logos/gliv.svg", alt: "GLIV" },
    { src: "../../public/logos/uptv.svg", alt: "UPTV" },
    { src: "../../public/logos/fuse.svg", alt: "FUSE" },
    { src: "../../public/logos/bloom.svg", alt: "BLOOM" },
    { src: "../../public/logos/dw.svg", alt: "DW" },
    { src: "../../public/logos/cnbcw.svg", alt: "CNBCW" },
    { src: "../../public/logos/newsmax.svg", alt: "NEWSMAX" },
    { src: "../../public/logos/oan.svg", alt: "OAN" },
    { src: "../../public/logos/tac.svg", alt: "TAC" },
    { src: "../../public/logos/ant1.svg", alt: "ANT1" },
    { src: "../../public/logos/espnews.svg", alt: "ESPNEWS" },
    { src: "../../public/logos/espnu.svg", alt: "ESPNU" },
    { src: "../../public/logos/fs2.svg", alt: "FS2" },
    { src: "../../public/logos/b1g.svg", alt: "B1G" },
    { src: "../../public/logos/sec.svg", alt: "SEC" },
    { src: "../../public/logos/accn.svg", alt: "ACCN" },
    { src: "../../public/logos/cars.svg", alt: "CARS" },
    { src: "../../public/logos/rfdtv.svg", alt: "RFDTV" },
    { src: "../../public/logos/magnoli.svg", alt: "MAGNOLI" },
    { src: "../../public/logos/cook.svg", alt: "COOK" },
    { src: "../../public/logos/recipe.svg", alt: "RECIPE" },
    { src: "../../public/logos/reelz.svg", alt: "REELZ" },
    { src: "../../public/logos/comedy.svg", alt: "COMEDY" },
    { src: "../../public/logos/sony.svg", alt: "SONY" },
    { src: "../../public/logos/fxm.svg", alt: "FXM" }
];

  


// Select the carousel and dots container
const logoTrack4 = document.querySelector('.logo-track-expanded');
const dotsContainer4 = document.querySelector('.dots-container-expanded');

// Add images and dots dynamically
expanded.forEach((image, index) => {
    
    // Create the slide div
    const slide = document.createElement('div');
    slide.classList.add('logo-slide4');

    // Create the image element
    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    // Append image to slide
    slide.appendChild(img);

    // Append slide to track
    logoTrack4.appendChild(slide);

    
});



document.querySelector(".left-btn4").addEventListener("click", () => {
    document.querySelector(".logo-track-expanded").scrollBy({ left: -100, behavior: "smooth" });
});

document.querySelector(".right-btn4").addEventListener("click", () => {
    document.querySelector(".logo-track-expanded").scrollBy({ left: 100, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function () {
    // Data for the slides
    const slides =["../../public/logos/3abn.svg", "../../public/logos/31.4_LXN.svg", "../../public/logos/abc9.svg", "../../public/logos/abc20.svg", "../../public/logos/accn.svg", 
        "../../public/logos/ae.svg", "../../public/logos/ahc.svg", "../../public/logos/amgtv.svg", "../../public/logos/animal.svg", "../../public/logos/ant1.svg", "../../public/logos/antenna.svg", "../../public/logos/arts.png", "../../public/logos/awe.svg", "../../public/logos/b1g.svg", 
        "../../public/logos/biztv.svg", "../../public/logos/bloom.svg", "../../public/logos/bounce.svg", "../../public/logos/bravo.svg", "../../public/logos/buzzr.svg","../../public/logos/3abn.svg", "../../public/logos/31.4_LXN.svg", "../../public/logos/abc9.svg", "../../public/logos/abc20.svg", "../../public/logos/accn.svg", 
        "../../public/logos/ae.svg", "../../public/logos/ahc.svg", "../../public/logos/amgtv.svg", "../../public/logos/animal.svg", "../../public/logos/ant1.svg", "../../public/logos/antenna.svg", "../../public/logos/arts.png", "../../public/logos/awe.svg", "../../public/logos/b1g.svg", 
        "../../public/logos/biztv.svg", "../../public/logos/bloom.svg", "../../public/logos/bounce.svg", "../../public/logos/bravo.svg", "../../public/logos/buzzr.svg"]

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

document.addEventListener("DOMContentLoaded", function () {
    // Data for the slides
    const slides2 = [
        "../../public/logos/cars.svg", "../../public/logos/cartoon.svg", "../../public/logos/catchy.svg", "../../public/logos/cbs4.svg", 
        "../../public/logos/cbs6.png", "../../public/logos/charge.svg", "../../public/logos/circle.svg", "../../public/logos/city27.svg", 
        "../../public/logos/cnbc.svg", "../../public/logos/cnbcw.svg", "../../public/logos/cnn.svg", "../../public/logos/comedy.svg", "../../public/logos/comet.svg",
         "../../public/logos/cook.svg", "../../public/logos/court.svg", "../../public/logos/cowboy.png", "../../public/logos/cowgirl.png", "../../public/logos/cozi.svg",
          "../../public/logos/create.svg", "../../public/logos/crime.svg", "../../public/logos/cspan.svg", "../../public/logos/cspan2.svg", "../../public/logos/cspan3.svg", 
          "../../public/logos/cw18.svg", "../../public/logos/dabl.svg", "../../public/logos/damerica.svg", "../../public/logos/daystar.svg", "../../public/logos/defy.svg", 
          "../../public/logos/dfamily.svg", "../../public/logos/discovr.svg", "../../public/logos/disney.svg", "../../public/logos/disnjr.svg", "../../public/logos/disnxd.svg",
          "../../public/logos/cars.svg", "../../public/logos/cartoon.svg", "../../public/logos/catchy.svg", "../../public/logos/cbs4.svg", "../../public/logos/cbs6.png",
           "../../public/logos/charge.svg", "../../public/logos/circle.svg", "../../public/logos/city27.svg", "../../public/logos/cnbc.svg", "../../public/logos/cnbcw.svg",
            "../../public/logos/cnn.svg", "../../public/logos/comedy.svg", "../../public/logos/comet.svg", "../../public/logos/cook.svg", "../../public/logos/court.svg", 
            "../../public/logos/cowboy.png", "../../public/logos/cowgirl.png", "../../public/logos/cozi.svg", "../../public/logos/create.svg", "../../public/logos/crime.svg",
             "../../public/logos/cspan.svg", "../../public/logos/cspan2.svg", "../../public/logos/cspan3.svg", "../../public/logos/cw18.svg", "../../public/logos/dabl.svg",
              "../../public/logos/damerica.svg", "../../public/logos/daystar.svg", "../../public/logos/defy.svg", "../../public/logos/dfamily.svg", "../../public/logos/discovr.svg", 
              "../../public/logos/disney.svg", "../../public/logos/disnjr.svg", "../../public/logos/disnxd.svg"
    ];

    // Get the container for the slides
    const slideTrack2 = document.querySelector(".slide-track2");

    // Populate the slide track with slide divs
    slides2.forEach(src => {
        const slide2 = document.createElement("div");
        slide2.classList.add("slide2");

        const img2 = document.createElement("img");
        img2.src = src;
        img2.alt = ""; // Add alt text if needed
        slide2.appendChild(img2);
        
        slideTrack2.appendChild(slide2);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Data for the slides
    const slides3 = [
       "../../public/logos/pbs5.svg", "../../public/logos/pbs24.png", "../../public/logos/peru.svg", "../../public/logos/pets.svg", 
       "../../public/logos/positiv.png", "../../public/logos/pursuit.svg", "../../public/logos/quest.svg", "../../public/logos/qvc.svg",
        "../../public/logos/qvc2.svg", "../../public/logos/qvc3.svg", "../../public/logos/recipe.svg", "../../public/logos/reelz.svg", "../../public/logos/rfdtv.svg", 
        "../../public/logos/rntv.svg", "../../public/logos/science.svg", "../../public/logos/sec.svg", "../../public/logos/shophq.svg", "../../public/logos/shoplc.svg",
         "../../public/logos/smc.svg", "../../public/logos/sony.svg","../../public/logos/pbs5.svg", "../../public/logos/pbs24.png", "../../public/logos/peru.svg", "../../public/logos/pets.svg",
          "../../public/logos/positiv.png", "../../public/logos/pursuit.svg", "../../public/logos/quest.svg", "../../public/logos/qvc.svg", "../../public/logos/qvc2.svg", 
          "../../public/logos/qvc3.svg", "../../public/logos/recipe.svg", "../../public/logos/reelz.svg", "../../public/logos/rfdtv.svg", "../../public/logos/rntv.svg", 
          "../../public/logos/science.svg", "../../public/logos/sec.svg",
        "../../public/logos/shophq.svg", "../../public/logos/shoplc.svg", "../../public/logos/smc.svg", "../../public/logos/sony.svg"
    ];

    // Get the container for the slides
    const slideTrack3 = document.querySelector(".slide-track3");

    // Populate the slide track with slide divs
    slides3.forEach(src => {
        const slide3 = document.createElement("div");
        slide3.classList.add("slide3");

        const img3 = document.createElement("img");
        img3.src = src;
        img3.alt = ""; // Add alt text if needed
        slide3.appendChild(img3);

        slideTrack3.appendChild(slide3);
    });
});