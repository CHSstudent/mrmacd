let projectile: Sprite = null
let mrMacD = sprites.create(assets.image`MrMacD`, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.setBackgroundImage(assets.image`moonBase`)
mrMacD.scale = 1
controller.moveSprite(mrMacD)
mrMacD.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    projectile = sprites.createProjectileFromSide(assets.image`cherry`, 50, 0)
    projectile.setPosition(0, randint(0, 120))
})
