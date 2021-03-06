/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        for(let i=1;i<=10;i++){
            this.load.image('idle'+ i, 'Characters/boy/boy_style_5/PNG/idle2/Layer-' + i + '.png');
        }
        for(let i=1;i<=6;i++){
            this.load.image('ennemyIdle'+ i, 'Characters/enemy 2/PNG/idle/Layer-' +i+'.png');
        }
        for(let i=1;i<=8;i++){
            this.load.image('ennemyattack'+ i, 'Characters/enemy 2/PNG/attack/Layer-' + i + '.png');
        }

        for(let i=1;i<=3;i++){
            this.load.image('trap'+ i, 'Characters/trap 1/PNG/close/Layer-' + i + '.png');
        }
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg-mush-2', 'assets/level/background-1/bg-mushroom-2.png');


        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gWB', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gBox', 'assets/level/ground/g-box-2.png');
        this.load.image('gVine', 'assets/level/ground/g-vine-a.png');
        this.load.image('gRight2', 'assets/level/ground/g-right.png');
        this.load.image('z6', 'assets/zombie/z6.png');
        this.load.image('Grassz', 'assets/level/ground/g-grass-4.png');
        this.load.image('Grassz2', 'assets/level/ground/g-grass-4.png');
        this.load.image('Ftree1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('z1', 'assets/zombie/z1.png');
        this.load.image('gLeft2', 'assets/level/ground/g-left.png');
        this.load.image('gMid5', 'assets/level/ground/g-mid.png');
        this.load.image('gRight3', 'assets/level/ground/g-right.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-2.png');
        this.load.image('gtreez', 'assets/level/ground/g-tree-1.png');
        this.load.image('z12', 'assets/zombie/z12.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }



        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let i=1;i<=3;i++) {
            this.load.image('filterFilm' + i, 'assets/level/filters/bloody/frame' + i + '.png');
        }


        this.load.image('filterW1', 'assets/level/weather/rain/frame1.png');
        this.load.image('filterW2', 'assets/level/weather/rain/frame2.png');
        this.load.image('filterW3', 'assets/level/weather/rain/frame3.png');




        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }
    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        let bg2terrain1=this.add.image(710,100, 'bg2-terrain1').setOrigin(0,0);
        this.bg2Container.add(bg2terrain1);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès
        let bg2Tree3=this.add.image(0,-100, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10; //pencher l'arbre de -5 degrès
        let bg2Tree1=this.add.image(710,-40, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.angle=-10; //pencher l'arbre de -5 degrès





        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let bgtree1=this.add.image(0,-100, 'bg-tree-1').setOrigin(0,0);
        this.bg1Container.add(bgtree1);
        let bgtree3=this.add.image(150,-250, 'bg-tree-3').setOrigin(0,0);
        this.bg1Container.add(bgtree3);

        /**
         * champignons
         * @type {Phaser.GameObjects.Image}
         */
        let bgmush2=this.add.image(0,0, 'bg-mush-2').setOrigin(0,0);
        this.bg1Container.add(bgmush2);

        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-300,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);







        this.boy = this.add.sprite(0, 60, 'idle1').setOrigin(0,0);


        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */

        let tree2=this.add.image(250,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.setScale(0.7)

        let tree3=this.add.image(30,375, 'gTree3').setOrigin(0,1);
        this.groundContainer.add(tree3);
        tree3.setScale(0.7)

        let tree1=this.add.image(900,375, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.setScale(0.7)
        tree1.angle=-10

        let gtreez=this.add.image(1515,0, 'gtreez').setOrigin(0,0);
        this.groundContainer.add(gtreez);
        gtreez.setScale(0.7)
        gtreez.angle=-10

        let Ftree1=this.add.image(1130,320, 'Ftree1').setOrigin(0,0);
        this.groundContainer.add(Ftree1);
        Ftree1.setScale(1)
        Ftree1.angle=-2






        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(-150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);


        /**
         * Herbe marine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass7=this.add.image(425,400, 'g-grass-4').setOrigin(0,0);
        gGrass7.setScale(2.5)
        this.groundContainer.add(gGrass7);

        let gGrass8=this.add.image(575,400, 'g-grass-4').setOrigin(0,0);
        gGrass8.setScale(2.5)
        this.groundContainer.add(gGrass8);

        let gGrass9=this.add.image(685,400, 'g-grass-4').setOrigin(0,0);
        gGrass9.setScale(2.5)
        this.groundContainer.add(gGrass9);
        /**
         * De l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWater=this.add.image(425,385, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        /**
         *
         * Zombie
         *  @type {Phaser.GameObjects.TileSprite}
         */
        let z6=this.add.image(930,280, 'z6').setOrigin(0,0);
        z6.setScale(0.6)
        this.groundContainer.add(z6);

        let z1=this.add.image(1355,400, 'z1').setOrigin(0,0);
        z1.setScale(2)
        this.groundContainer.add(z1);

        let z12=this.add.image(1100,450, 'z12').setOrigin(0,0);
        z12.setScale(2)
        this.groundContainer.add(z12);


        /**
         * Stone
         * @type {Phaser.GameObjects.Image}
         */
        let gStone2=this.add.image(350,335, 'gStone2').setOrigin(0,0);
        this.groundContainer.add(gStone2);

        let gStone4=this.add.image(790,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone4);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);

        let gMid5=this.add.image(1750,365, 'gMid5').setOrigin(0,0);
        this.groundContainer.add(gMid5);

        let gRight2=this.add.image(975,364, 'gRight2').setOrigin(0,0);
        this.groundContainer.add(gRight2);

        let gRight3=this.add.image(1780,365, 'gRight3').setOrigin(0,0);
        this.groundContainer.add(gRight3);



        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(775,365, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);
        let gLeft2=this.add.image(1580,365, 'gLeft2').setOrigin(0,0);
        this.groundContainer.add(gLeft2);
        /**
         * De l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass5=this.add.image(175,300, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass3=this.add.image(105,300, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass6=this.add.image(875,325, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass6);

        let Grassz=this.add.image(980,320, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(Grassz);
        let Grassz2=this.add.image(1100,320, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(Grassz2);

        let gSpike=this.add.image(1600,270, 'gSpike').setOrigin(0,0);
        this.groundContainer.add(gSpike);

        /**
         *
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gMushroom1=this.add.image(140,268, 'gMushroom1').setOrigin(0,0);
        gMushroom1.angle=10;
        this.groundContainer.add(gMushroom1);
        /**
         * WB
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWB=this.add.image(425,300, 'gWB').setOrigin(0,0);
        gWB.setScale(0.8)
        this.groundContainer.add(gWB);
        /**
         * Caisse
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gBox=this.add.image(525,293, 'gBox').setOrigin(0,0);
        gBox.setScale(0.6)
        gBox.angle=5
        this.groundContainer.add(gBox);

        /**
         * Vine
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gVine=this.add.tileSprite(570,-3, 20, 400,'gVine').setOrigin(0,0);
        gVine.setScale(0.5)
        this.groundContainer.add(gVine);
        let gVine2=this.add.tileSprite(600,-3, 20, 250,'gVine').setOrigin(0,0);
        gVine2.setScale(0.5)

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        this.filterRain = this.add.sprite(0, 0, 'filterW').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'filterW',
            frames: [
                {key:'filterW1'},
                {key:'filterW2'},
                {key:'filterW3'},
            ],
            frameRate: 16,
            repeat: -1,
        });
        this.filterRain.play('filterW');



        this.filterFilm = this.add.sprite(0, 0, 'filterFilm').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames:this.getFrames('filterFilm',3),
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');
        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */

        //animation perso idle2
        this.anims.create({
            key: 'boy',
            frames: this.getFrames('idle', 10),
            frameRate: 16,
            repeat: -1
        });
        this.boy2 = this.add.sprite(500, 0, 'ennemyIdle').setOrigin(0,0);
        this.anims.create({
            key: 'Eidle',
            frames: this.getFrames('ennemyIdle', 6),
            frameRate: 16,
            repeat: -1
        });


        this.ennemy = this.add.sprite(1000, 0, 'ennemyattack').setOrigin(0,0);
        this.anims.create({
            key: 'Ennemy',
            frames: this.getFrames('ennemyattack', 6),
            frameRate: 11,
            repeat: -1

        });

        this.trap = this.add.sprite(1585, 200,'trap').setOrigin(0,0);
        this.anims.create({
            key: 'Trap',
            frames: this.getFrames('trap', 3),
            frameRate: 10,
            repeat: 2

        });
        this.boy2.scale=0.5
        this.boy2.flipX=true
        this.boy.scale-=0.2
        this.ennemy.scale=0.5
        this.trap.scale=0.5



        this.boy.play('boy');
        this.boy2.play('Eidle');
        this.ennemy.play('Ennemy')
        this.trap.play('Trap')

        this.tweens.add({
            targets: this.ennemy,
            x: 700,
            duration: 3000,
            ease: 'Power2',
            yoyo: true,
            delay: 1000
        })


        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2000, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterRain.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;

    }

    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-5;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    me.trap.play('Trap');
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=0;
                    break;
            }
        });

    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
