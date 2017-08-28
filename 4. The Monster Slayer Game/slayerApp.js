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
        attack:function(isSpecial){
            var monsterHit = Math.floor(Math.random() * 10);
            var playerHit = Math.floor(Math.random() * 10) + 1;

            if(isSpecial){
                playerHit += 5;
            }

            if((this.playerHealth - monsterHit) > 0 ){
                this.playerHealth -= monsterHit;
                this.logAction('monster', monsterHit);
            }
            else{
                this.stopGame(false);
            }

            if((this.monsterHealth - playerHit) > 0 ){
                this.monsterHealth -= playerHit;
                this.logAction('player', playerHit);
            }
            else{
                this.stopGame(true);
            }
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
        }
    }
}
);