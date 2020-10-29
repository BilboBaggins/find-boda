let mySprite = sprites.create(img`
    . . . . 7 7 7 7 7 7 7 7 . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 f 7 7 7 7 f 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 f f f f 7 7 7 . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . e 7 7 7 7 7 7 7 7 e . . . 
    . . e e d d d e d d d d e e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    . . e d d d d e d d d d d e . . 
    `, SpriteKind.Player)
pause(100)
info.setScore(0)
