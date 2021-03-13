var Canvas = new fabric.Canvas("MyCanvas");

var BlockHeight = 30;
var BlockWidth = 30;

var PlayerX = 10;
var PlayerY = 10;

var PlayerObject = "";
var BlockObject = "";

function PlayerUpdate() {
    fabric.Image.fromURL("Player.png", function (img) {
        PlayerObject = img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(140);
        PlayerObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(PlayerObject);
    });
}

function NewImage(GetImage) {
    fabric.Image.fromURL(GetImage, function (img) {
        BlockObject = img;
        BlockObject.scaleToWidth(BlockWidth);
        BlockObject.scaleToHeight(BlockHeight);
        BlockObject.set({
            top: PlayerY,
            left: PlayerX
        });
        Canvas.add(BlockObject);
    });
}