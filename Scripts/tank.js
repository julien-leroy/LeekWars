// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();
var myPos = getCell();
var enemyPos = getCell(enemy);

var cellToUseWeapon = getCellToUseWeaponOnCell(WEAPON_SHOTGUN, enemyPos);

var sayTab;

sayTab[1] = "Blanchard, un margoulin près de l'étable !";
sayTab[3] = "A L'ASSAUUUUUUUUUUT";
sayTab[5] = "Bande de chiens galeux !";
sayTab[10] = "Il faut que j'aille pisser...";
sayTab[20] = "Bon... on va cleaner tout ça !";

say(sayTab[getTurn()]);

// Si l'enemy est loin : on avance vers lui
if (getDistance(myPos, enemyPos) > 7) {
	moveToward(enemy);
} else {
// Si l'enemy est pres : on avance vers lui en ligne.
// moveTowardLine(myPos, enemyPos);
	say("je m'en va te fendre de part en part !");
// pour un plus bas niveau de script, on utilise cette methode :
	moveToward(cellToUseWeapon);
}


// si l'enemie est a + de 7 cube : prendre le pistol
if (getDistance(myPos, enemyPos) > 7) {
	if (getWeapon() != WEAPON_PISTOL) {
		setWeapon(WEAPON_PISTOL);
	}
} else if (getDistance(myPos, enemyPos) < 8) {
// si l'enemie est a - de 8 cube : lui casser la geulle avec le flingue (3 fois) puis prendre le fusil a pompe
	useWeapon(enemy);
	useWeapon(enemy);
	useWeapon(enemy);
	if (getWeapon() != WEAPON_SHOTGUN) {
		setWeapon(WEAPON_SHOTGUN);
	}
} else if (getDistance(myPos, enemyPos) < 5){
// si l'enemie est a - de 5 cube : lui peter les dents avec le shotgun (2fois)
	useWeapon(WEAPON_SHOTGUN);
	useWeapon(WEAPON_SHOTGUN);
}