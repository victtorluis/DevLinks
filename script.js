function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  html.classList.toggle("light")

  // colocando imagens diferentes em cada um dos modos light e dark
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-victor.png")
  } else {
    img.setAttribute("src", "./assets/avatar-victor-dark.png")
  }
}
