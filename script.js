function Hero(image, top, left, size){

    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function(){
        return  '<img width="'+ this.size + '"' +
                ' height="'+ this.size + '"' +
                ' src="' + this.image +'"' +
                ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
    }

    this.moveRight = function(){
        this.left += 50;
        console.log('ok '+this.left );
    }
    this.moveDown=function () {

        this.top+=20;
        console.log("top"+this.top);
    }
    this.moveLeft=function () {
        this.left=this.left-30;

    }
    this.moveUp=function () {
        this.top=this.top-20;
    }
}

let hero = new Hero('oto.jpg', 20, 30, 100 );
// let hero1 = new Hero('maybay.jpg',100,30,100);
// document.write(hero1);

function start(){
    if(hero.left < window.innerWidth - hero.size){
        hero.moveRight();
    }else if(hero.top <  window.innerHeight - hero.size) {
        hero.moveDown();
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 500);

}

start();
