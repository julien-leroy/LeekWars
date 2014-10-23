/*

Ce code n'est bien entendu pas encore optimisé et meme pas commenté.
A suivre.

*/


// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();
var myPos = getCell();
var enemyPos = getCell(enemy);
var chipUsed = false;

var cellToUseWeapon = getCellToUseWeaponOnCell(WEAPON_SHOTGUN, enemyPos);

if (getTurn() < 2) {
	say("Blanchard, un margoulin Faisant le fièr a bras !");
}

var sayTab;

sayTab[1] = "Blanchard, un margoulin Fait le fièr a bras !";
sayTab[3] = "A L'ASSAUUUUUUUUUUT";
sayTab[5] = "Bande de chiens galeux !";
sayTab[10] = "Il faut que j'aille pisser...";
sayTab[20] = "Bon... on va cleaner tout ça !";

// say(sayTab[getTurn()]);

// Si l'enemy est loin : on avance vers lui
if (getDistance(myPos, enemyPos) > 10) {
	if (getWeapon() != WEAPON_PISTOL) {
		setWeapon(WEAPON_PISTOL);
	}
	moveToward(enemy);
} else {
// Si l'enemy est pres : on avance vers lui en ligne.
// moveTowardLine(myPos, enemyPos);
	//if(canUseChip(CHIP_HELMET, getLeek())){
		//useChip(CHIP_HELMET, getLeek());
		//chipUsed = true;
	//}
	useChip(CHIP_HELMET, getLeek());
// pour un plus bas niveau de script, on utilise cette methode :

	moveTowardCell(cellToUseWeapon);
}

 if (getDistance(myPos, enemyPos) < 8 && getDistance(myPos, enemyPos) > 5) {
// si l'enemie est a - de 8 cube : lui casser la geulle avec le flingue puis prendre le fusil a pompe
	if (getWeapon() != WEAPON_PISTOL) {
		setWeapon(WEAPON_PISTOL);
	}
	useWeapon(enemy);
	useWeapon(enemy);
	useWeapon(enemy);
	if (getWeapon() != WEAPON_SHOTGUN) {
		setWeapon(WEAPON_SHOTGUN);
	}
} else if (getDistance(myPos, enemyPos) < 6){
// si l'enemie est a - de 5 cube : lui peter les dents avec le shotgun
	if (getWeapon() != WEAPON_SHOTGUN) {
		setWeapon(WEAPON_SHOTGUN);
	}
	useWeapon(enemy);
	useWeapon(enemy);
}