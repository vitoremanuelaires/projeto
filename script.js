function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")

  // pegar a tag imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (hmtl.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos escuro e camiseta preta."
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos de grau e camiseta preta."
    )
  }

  
  
}