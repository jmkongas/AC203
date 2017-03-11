var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png',32,48);
	game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create() {
	//enable acrade game physics in the game
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//create sky
	game.add.sprite(0,0,'sky');

	//add platforms as a group, that contains ground and the 2 ledges
	platforms = game.add.group();
	platforms.enableBody = true;

	//create the ground inside the group
	var ground = platforms.create(0,game.world.height-50,'ground');

}

function update() {
}