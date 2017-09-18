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
            var playerHitMinDamage = isSpecial? 10: 3;
            var playerHitMaxDamage = isSpecial? 20: 10;
            var playerHit = this.calculateDamage(playerHitMinDamage,
                                                 playerHitMaxDamage);
            this.logAction('player', playerHit);

            if(this.checkPlayerWin(playerHit)){
                return;
            }

            this.monsterAttacks();
        },
        heal:function(){
            var healScore = Math.floor(Math.random() * 10);

            if(this.playerHealth <= 90){
                playerHealth += 10;
                this.logAction('healing score', 10);
            }
            else{
                this.playerHealth = 100;
                this.logAction('fully recovered');
            }
            
            this.monsterAttacks();
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
                message: type + (score? ': ' + score: '')
                });
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkPlayerWin: function(playerHit){       
            if((this.monsterHealth - playerHit) > 0 ){
                this.monsterHealth -= playerHit;
            }
            else{
                this.monsterHealth = 0;
                this.stopGame(true);
                return true;
            }
        },
        checkMonsterWin: function(monsterHit){  
            if((this.playerHealth - monsterHit) > 0 ){
                this.playerHealth -= monsterHit;
            }
            else{
                this.playerHealth = 0;
                this.stopGame(false);
            }
        },
        monsterAttacks(){
            var monsterHit = this.calculateDamage(5, 12);
            this.logAction('monster', monsterHit);
            this.checkMonsterWin(monsterHit);
        }
    }
}
);