class Man{
	constructor(){
		this.strength=Math.floor(Math.random() * 40) + 1;
		this.health=Math.floor(Math.random() * 100) + 50;
	}
}

class Viking extends Man{
	constructor(nam,weapon){
		super();
		this.name=nam;
		this.weapon=weapon;
		if(weapon!=undefined){
			this.strength=this.strength + weapon.strength;
		}
	}
}

class Saxon extends Man{

}

class Weapon{
	constructor(name,strength){
		this.name=name;
		this.strength=strength;
	}
}

Man.prototype.hit = function(){
	console.log(this.name + ' hit ' + this.strength)
	return this.strength;
}

Man.prototype.hurt= function(damage){
	this.health=this.health-damage;
	console.log(this.name +' hurt, health: '+ this.health);
}


class Pit{
	constructor(train){
		this.train=train;
	}
}

Pit.prototype.fightContinues=function(warrior1, warrior2){
	if(this.train){
		return (warrior1.health>warrior2.strength && warrior2.health>warrior1.strength);
	}
	else{
		if (warrior1.health>0 && warrior2.health>0){
			return true;
		}
		else {
			return false;
		}
	}
}

Pit.prototype.fight=function(warrior1, warrior2){
	while(this.fightContinues(warrior1,warrior2)){
		warrior1.hurt(warrior2.hit());
		warrior2.hurt(warrior1.hit());
	}
	if(warrior1.health>warrior2.health){
		console.log('Winner '+warrior1.name);
		return warrior1;
	}
	else{
		console.log('Winner '+warrior2.name);
		return warrior2;
	}

}
function train(){
	var vikings=makeVikingsArmy(10);
	var winner
	var trainPit=new Pit(true);
	while(vikings.length>1){
		winner=trainPit.fight(vikings.pop(),vikings.pop());
		vikings.push(winner);
	}
}

function sack(){
	var vikings=makeVikingsArmy(10);
	vikings=vikingsArmed(4,vikings);
	var saxons=makeSaxonsArmy(10);
	var sackPit=new Pit(false);
	while(vikings.length>0 && saxons.length>0){
		winner=sackPit.fight(vikings.pop(), saxons.pop());
		if (winner instanceof Viking){
			vikings.push(winner);
		}
		else{
			saxons.push(winner);
		}
	}
	if (vikings.length>0){
		console.log('Winners are Vikings');
	}
	else{
		console.log('Winners are Saxons');
	}
}

function makeVikingsArmy(numWarriors){
	var vikings =[];
	for (var i=0;i<numWarriors;i++){
		vikings.push(new Viking(i));
	}
	return vikings;
}

function vikingsArmed(numWeapons, vikings){
	for (var i=0;i<numWeapons-1;i++){
		vikings[(this.strength=Math.floor(Math.random() * 10) + 1)].weapon=new Weapon("axe",4);
	}
	return vikings;
}

function makeSaxonsArmy(numWarriors){
	var saxons =[];
	for (var i=0;i<numWarriors;i++){
		saxons.push(new Saxon(i));
	}
	return saxons;
}
//crea vikings y saxon