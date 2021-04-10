
class SpellsView {

    resetBtns = () => {

        const spellsBox = document.getElementById("spellsBtns");
		const btns = document.getElementsByClassName("spellBtn");

        if(!btns) return;

		for(let i = btns.length - 1; i >= 0; i--) {
			spellsBox.removeChild(btns[i]);
		}
	}

    updeteClickedButton = () => {
        const btns = document.getElementsByClassName("spellBtn");

        if(!btns) return;

        for(let item of btns) {
            item.classList.remove("Clicked");
            if(!spell.getChoosen() && item.value == "move/attack") {
                item.classList.add("Clicked");
            } else if(item.value == spell.getChoosen()?.name) {
                item.classList.add("Clicked");
            }
        }

    }

    showSpellsButtons = (spells) => {

        const spellsBox = document.getElementById("spellsBtns");
		this.resetBtns();

        let _this = this;

		for(let i=0; i < spells.length; i++) {

			(function(j) {

				const btn = document.createElement("input");

                    btn.setAttribute("type", "button");
                    btn.setAttribute("class", "spellBtn btn btn-primary");
                    btn.setAttribute("value", spells[j].name);

                    if(spells[j].name == "move/attack") {
                        btn.classList.add("Clicked");
                    }

                btn.addEventListener("click", function() {
                    if(spells[j].name == "next/defence") {
                        gameListener.nextCharacterAction();
                    } else {
                        spell.setChoosen(spells[j]);
                        _this.updeteClickedButton();
                    }
                });

				spellsBox.appendChild(btn);
			})(i);
		}

    }

}