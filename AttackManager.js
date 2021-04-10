
class AttackManager {

    defaultAttack = (attacker, enemy_) => {
        return new Promise((resolve, reject) => {
            console.log(enemy_);

            const enemy =  charManager.getChar(enemy_[0], enemy_[1] );
            const length = attacker.getAmount();

            let damage;

            damage = attacker.getDamage();console.log(damage);

            let totalDemage = damage * length;

            let def = enemy.getLife();

            const lastDef = enemy.getLifeOfLast();

            let totalDef = (def * (enemy.getAmount() - 1)) + lastDef;console.log(totalDef);

            let newAmount, modul;
            if(totalDemage > totalDef) {

                enemy.makeDead();
                resolve("OK2");

            } else {

                if(totalDemage > lastDef) {

                    totalDef = totalDef - totalDemage;

                    modul = totalDef % def

                    newAmount = parseInt((totalDef / def).toFixed());

                } else {

                    totalDef = totalDef - totalDemage;

                    modul = totalDef % def;

                    newAmount = enemy.getAmount();

                }

                Logger.logAttack(attacker, enemy, charManager.getSelectedTeamAndChar(), totalDemage);


                enemy.setAmount(newAmount);console.log(modul);

                enemy.setLifeOfLast(modul);
                resolve("OK2");
            }
        });

    }

}

