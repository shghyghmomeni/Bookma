const sliderDiv = document.getElementById("slider");
window.addEventListener("load", sliderPage);
function sliderPage() {
  let data = [
    {
      id: 1,
      imgSrc: "../images/slide1.webp",
      description: "ما بهترین کتاب ها و محصولات چاپی را برای شما تهیه میکنیم",
    },
    {
      id: 2,
      imgSrc: "../images/slide2.jfif",
      description: "رضایت شما اولویت شماره یک ما است",
    },
    {
      id: 3,
      imgSrc: "../images/slide3.png",
      description: "در هر زمینه و رده ی سنی کتاب مورد نظر خود را پیدا کنید",
    },
  ];

  currentslide = data[0].id;

  const parentDiv = document.createElement("div");
  parentDiv.classList.add(
    "container",
    "w-[100%]",
    "h-[100vh]",
    "flex",
    "flex-col",
    "justify-between"
  );
  sliderDiv.append(parentDiv);

  const sliderImgBox = document.createElement("div");
  parentDiv.append(sliderImgBox);
  sliderImgBox.classList.add("slider-img-box");

  const image = document.createElement("img");
  image.classList.add("w-[428px]", "h-[602px]", "object-cover");
  sliderImgBox.append(image);
  image.src = data[0].imgSrc;

  const textDiv = document.createElement("div");
  textDiv.classList.add(
    "slider-text",
    "font-semibold",
    "text-2xl",
    "p-4",
    "text-center"
  );
  textDiv.innerText = data[0].description;
  parentDiv.append(textDiv);

  const boletDiv = document.createElement("div");
  boletDiv.classList.add("flex", "flex-row", "justify-center", "gap-2");
  parentDiv.append(boletDiv);

  for (let i = 0; i < data.length; i++) {
    const bolet = document.createElement("div");
    bolet.classList.add("bolets", "w-7", "bg-black", "h-1", "rounded-xl");
    bolet.id = i;
    if (i == 0) {
      bolet.classList.add("opacity-100");
    } else {
      bolet.classList.add("opacity-50");
    }
    boletDiv.append(bolet);
  }
  const btn = document.createElement("button");
  btn.classList.add(
    "slider-btn",
    "bg-[#212529]",
    "text-white",
    "font-bold",
    "mx-6",
    "my-8",
    "py-4",
    "rounded-full"
  );
  btn.innerText = "ادامه";
  parentDiv.append(btn);

  btn.addEventListener("click", nextSlide);
  function nextSlide() {
    console.log(currentslide);
    const bolets = document.querySelectorAll(".bolets");
    bolets.forEach((elem) => {
      if (elem.classList.contains("opacity-100")) {
        elem.classList.remove("opacity-100");
        elem.classList.add("opacity-50");
      }
      if (currentslide < 3) {
        bolets[currentslide].classList.remove("opacity-50");
        bolets[currentslide].classList.add("opacity-100");
      }
    });

    console.log(bolets);
    updateSlide(currentslide++);
  }
  function updateSlide(id) {
    if (id < data.length) {
      image.src = data[id].imgSrc;
      textDiv.innerText = data[id].description;
    }
    if (currentslide == data.length) {
      btn.innerText = "ورود به بوکما";
    }
    if (currentslide == data.length + 1) {
      sliderDiv.classList.add("hidden");
      window.open("../pages/login.html", "_self");
    }
  }
}
