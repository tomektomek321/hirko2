
class AttackManager {


    static #instance;

    static getInstance = () => {
        if(this.#instance) {
            return this.#instance;
        }

        this.#instance = new AttackManager();
        return this.#instance;
    }



    defaultAttack = (attacker, enemy_) => {
        return new Promise((resolve, reject) => {

            const enemy = enemy_
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

                    newAmount = totalDef / def;
                    newAmount = newAmount.toFixed();
                    newAmount = parseInt(newAmount);

                } else {

                    totalDef = totalDef - totalDemage;

                    modul = totalDef % def;

                    newAmount = enemy.getAmount();

                }

                Logger.logAttack()


                enemy.setAmount(newAmount);console.log(modul);

                enemy.setLifeOfLast(modul);
                resolve("OK2");
            }
        });

    }







}











