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
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//add cursors as keyboard input
	cursors = game.input.keyboard.createCursorKeys();

	//add a group of stars
	stars = game.add.group();
	stars.enableBody = true;
	// Let's make 12 stars, evenly spaced
	for (var i = 0; i < 12; i++){
		//create a star in stars group
	  	var star = stars.create(i * 70, 0, 'star');
	  	//add in gravity
	  	star.body.gravity.y = 200;
	  	//make them bounce at a different value
	  	star.body.bounce.y = 0.7 + Math.random() * 0.2;
	}

}

function update() {
	 //  Collision between the player and the platforms
    game.physics.arcade.collide(player, platforms);

    //reset player's velocity to zero once we lift off the cursors key
    player.body.velocity.x = 0;

    // Left / right key pressed
  	if (cursors.left.isDown){
    	player.body.velocity.x = -150; //moving sprite left
    	player.animations.play('left');
  	} else if (cursors.right.isDown){
    	player.body.velocity.x = 150; //moving sprite right
    	player.animations.play('right');
  	} else {
    	player.animations.stop();
    	player.frame = 4;
  	}

  	// Player can jump if touching ground
  	if (cursors.up.isDown && player.body.touching.down){
    	player.body.velocity.y = -300;
  	}

}