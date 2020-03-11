# Micro LED

## Toggel LED

Drag the code to toggle the LED

```blocks
// Part 1
basic.forever(function () {
    led.toggle(0,0)
})
```
## Randomize x

Drag the code to pick a random ``x`` index between ``0`` and ``4``

```blocks
// Part 2
basic.forever(function () {
    led.toggle(Math.randomRange(0, 4), 0)
})
```

## Randomize y

Drag the code to pick a random ``y`` index between ``0`` and ``4``

```blocks
// Part 1
basic.forever(function () {
    led.toggle(Math.randomRange(0, 4), Math.randomRange(0, 4))
})
```