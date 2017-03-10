var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
	game.load.image('sky','assets/sky.png');
	game.load.image('ground','assets/platform.png');
	game.load.image('star','assets/star.png');
	game.load.spritesheet('dude','assets/dude.png',32,48);
	game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create() {
	// game.add.sprite(750,0,'ground');

	//enable Physics in the game
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.add.sprite(0,0,'sky');

	//Add platforms as a group that contain the ground and the 2 ledges that the user can jump on
	platforms = game.add.group();
	platforms.enableBody = true;

	//create the ground, 50 from the edge of the canvas
	var ground = platforms.create(0, game.world.height - 50, 'ground');
	ground.scale.setTo(2,2);
	//prevent the ground from falling when we jump on it, so we have to make it immovable
	ground.body.immovable = true;

	// Add the platforms
  	var ledge = platforms.create(400, 400, 'ground');
  	ledge.body.immovable = true;
  	ledge = platforms.create(-150, 250, 'ground');
  	ledge.body.immovable = true;

  	//Add a player to our canvas
  	player = game.add.sprite(32, game.world.height - 150, 'dude');
  	// Adding player animations
  	player.animations.add('left', [0, 1, 2, 3], 10, true);
  	player.animations.add('right', [5, 6, 7, 8], 10, true);
  	// Run some physics on the sprite
	game.physics.arcade.enable(player);



}

function update() {
}