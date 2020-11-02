let mySprite = sprites.create(img`
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
    `, SpriteKind.Player)
pause(100)
info.setScore(0)
