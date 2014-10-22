//--------------------------------
//------- Code de base -----------
//--------------------------------

// On prend le pistolet
setWeapon(WEAPON_PISTOL); // Attention : coûte 1 PT

// On récupère l'ennemi le plus proche
var enemy = getNearestEnemy();

// On avance vers l'ennemi
moveToward(enemy);

// On essaye de lui tirer dessus a 3 reprises (pistol = 3PA)
useWeapon(enemy);
useWeapon(enemy);
useWeapon(enemy);