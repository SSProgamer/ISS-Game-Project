var game={ 
	level: 1, 
	turn: 0, 
  score: 0,
	active: false, 
	handler: false, 
	shape: '.shape', 
	genSequence1: [[1],[1,3],[1,3,4],[1,3,4,4],[1,3,4,4,2],[1,3,4,4,2,1],[1,3,4,4,2,1,1]],
  genSequence: [],
	plaSequence: [],
	
	init: function(){				
		if(this.handler === false){		
			this.initPadHandler();		
		}
		this.newGame();			

	},

	initPadHandler: function(){

		that=this;

		$('.pad').on('mouseup',function(){

			if(that.active===true){

				var pad=parseInt($(this).data('pad'),10);
					
				that.flash($(this),1,300, pad);

				that.logPlayerSequence(pad);

			}
		});

		this.handler=true;

	},

	newGame: function(){			

		this.level=1;
		this.score=0;
		this.newLevel();
		this.displayLevel();
    this.displayScore();

	},

	newLevel: function(){
		
		this.genSequence.length=0;
		this.plaSequence.length=0;
		this.pos=0;
		this.turn=0;
		this.active=true;
		this.randomizePad(this.level); 
		this.displaySequence(); 

	},
	
	flash: function(element, times, speed, pad){ 

		var that = this;					

		if(times > 0){
			that.playSound(pad);				
			element.stop().animate({opacity: '1'}, {		
				duration: 50,
				complete: function(){
				element.stop().animate({opacity: '0.5'}, 200);
				}
			});											

		}

		if (times > 0) {									
			setTimeout(function () {
				that.flash(element, times, speed, pad);
			}, speed);
			times -= 1;						
		}
	},

	playSound: function(clip){				


		var sound= $('.sound'+clip)[0];
		sound.currentTime=0;				
		sound.play();					


	},

	randomizePad: function(passes){
    for(i=0;i<passes;i++){
			this.genSequence.push(this.genSequence1[passes][i]);
    }
	},

	logPlayerSequence: function(pad){		

		this.plaSequence.push(pad);
		this.checkSequence(pad);
		
	
	},

	checkSequence: function(pad){			

		that=this;

		if(pad !== this.genSequence[this.turn]){	
				
				this.incorrectSequence();

			}
    else{									
				this.turn++;					
			}
		if(this.turn === this.genSequence.length){
			this.level++;
			this.displayLevel();
			this.active=false;
      if(this.level === 3){
        this.score++;
        this.displayScore();
      }
      else if(this.level ===5){
        this.score++;
        this.displayScore();
      }
      else if(this.level === 7){
        this.score++;
        this.displayScore();
        this.incorrectSequence();
      }
      if(this.level !==7){
        setTimeout(function(){
				  that.newLevel();},1000);
        }
      }
    else{
      
    }
    
	},

	displaySequence: function(){				
		
		var that=this;

		$.each(this.genSequence, function(index, val) {		
			
			setTimeout(function(){
				
				that.flash($(that.shape+val),1,300,val);
			
			},500*index);		
		});
	},

	displayLevel: function(){						
		
		$('.level h2').text('Level: '+this.level);

	},
  displayScore: function(){						
		
		$('.score h2').text('Star: '+this.score);

	},
	
	incorrectSequence: function(){						

		var corPad = this.genSequence[this.turn],		
			
			that = this;
			this.active=false;
			this.displayLevel();

		setTimeout(function(){						
			that.flash($(that.shape+corPad),4,300,corPad);
		},500);
    $('.level h2').text('Level: END');
		$('.start').show();				
	

	}

};
$(document).ready(function(){							

	$('.start').on('mouseup', function(){			
		$(this).hide();
    setTimeout(function(){
      game.init();
    }, 500); 

	});


});