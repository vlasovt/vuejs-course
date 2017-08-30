new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameInProgress:false,
        gameOver: false,
        gameWon: false,
        log: []
    },
    methods:{
        startNewGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameInProgress = true;
            this.gameWon = false;
            this.gameOver =  false;
            this.log = [];
        },
        attack:function(){
            var playerHit = this.calculateDamage(12, 5);

            if(!this.checkWin()){
                var monsterHit = this.calculateDamage(3, 10);
                this.checkLoose();
            }   
        },
        specialAttack: function(){

        },
        heal:function(){
            var healScore = Math.floor(Math.random() * 10);

            if((this.playerHealth + healScore) > 100){
                playerHealth = 100;
            }
            else{
                this.playerHealth += healScore;
            }

            this.logAction('healing score', healScore);
        },
        giveUp:function(){
            this.stopGame(false);
        },
        stopGame: function(isWon){
            this.gameInProgress = false;
            this.gameOver = true;
            this.gameWon = isWon;
        },
        logAction: function(type, score){
            this.log.push(
                {type:type, 
                message: type + ': ' + score
                });
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function(){       
            if((this.monsterHealth - playerHit) > 0 ){
                this.monsterHealth -= playerHit;
                this.logAction('player', playerHit);
            }
            else{
                this.monsterHealth = 0;
                this.stopGame(true);
                return true;
            }
        },
        checkLoose: function(){  
            if((this.playerHealth - monsterHit) > 0 ){
                this.playerHealth -= monsterHit;
                this.logAction('monster', monsterHit);
            }
            else{
                this.playerHealth = 0;
                this.stopGame(false);
            }
        }
    }
}
);