const solLuaContainer = document.querySelector(".sol-lua-container")

document.querySelector(".botão-mudar").addEventListener("click", function() {
    document.body.classList.toggle('dark')
    const currentRotation = parseInt(getComputedStyle(solLuaContainer)
    .getPropertyValue('--rotation'))
    solLuaContainer.style.setProperty('--rotation', currentRotation + 180)
}) 