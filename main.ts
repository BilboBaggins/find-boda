namespace SpriteKind {
    export const Boda = SpriteKind.create()
}
function Score () {
    if (otherSprite.overlapsWith(mySprite)) {
        info.changeScoreBy(1)
    } else {
        if (otherSprite.overlapsWith(mySprite3)) {
            info.changeScoreBy(-1)
        }
    }
    if (info.score() == 5) {
        game.over(true, effects.confetti)
    } else if (info.score() == -5) {
        game.over(false)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Score()
    Placement()
})
function Placement () {
    mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    mySprite3.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    if (mySprite.overlapsWith(mySprite3)) {
        mySprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
        mySprite3.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    }
}
let otherSprite: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . 6 6 6 6 f 6 6 6 6 f 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . 6 6 6 f f f f 6 6 6 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . e 6 6 6 6 6 6 6 6 e . . . 
    . . e e d d d e d d d d e e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    `, SpriteKind.Boda)
mySprite3 = sprites.create(img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `, SpriteKind.Player)
otherSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f . . . . . . . 
    . . . f 3 3 3 3 3 f f . . . . . 
    . . . f 3 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 3 3 3 3 3 3 3 f f . 
    . . . f 3 3 3 3 3 3 3 3 3 3 3 f 
    . . . f 3 3 3 3 3 3 3 3 3 3 f . 
    . . . . f 3 3 3 3 3 3 3 3 f . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . . f 3 3 3 3 3 3 3 f . . 
    . . . . . f 3 3 3 3 f 3 3 3 f . 
    . . . . . . f 3 3 f . f 3 3 3 f 
    . . . . . . f 3 f . . . f 3 3 f 
    . . . . . . . f . . . . . f f f 
    `, SpriteKind.Player)
controller.moveSprite(otherSprite)
Placement()
info.setScore(0)
