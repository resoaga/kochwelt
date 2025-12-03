//Rösti


function updateIngredient() {
    // Hole den Wert der Portionen (Standardwert ist 4)
    const servings = document.getElementById("servings").value;

    // Zutaten-Variablen (die Basiswerte für 4 Portionen)
    const basePotato = 1; // in kg
    const baseOnion = 2; // Anzahl
    const baseEgg = 2; // Anzahl
    const baseButter = 2; // Esslöffel
    const baseSalt = 1; // Prise

    // Berechne die neuen Mengen basierend auf der Anzahl der Portionen
    const newPotato = (basePotato / 4) * servings;
    const newOnion = (baseOnion / 4) * servings;
    const newEgg = (baseEgg / 4) * servings;
    const newButter = (baseButter / 4) * servings;
    const newSalt = (baseSalt / 4) * servings;

    // Setze die neuen Werte in die Tabelle
    document.getElementById("potato").innerText = newPotato + " kg";
    document.getElementById("onion").innerText = newOnion;
    document.getElementById("egg").innerText = newEgg;
    document.getElementById("butter").innerText = newButter + " EL";
    document.getElementById("salt").innerText = newSalt + " Prise";
    }












//Filettopf


function updateIngredients() {
    // Hole den Wert der Portionen
    const servings = document.getElementById("servings").value;

    // Zutaten-Basiswerte für 6 Portionen (originale Menge)
    const baseIngredients = {
        meat: 1, // in kg
        oil: 1, // in EL
        butter: 1, // in EL
        onions: 2, // Anzahl
        garlic: 1, // Anzahl
        ham: 100, // in g
        mushrooms: 500, // in g
        broth: 200, // in ml
        cream: 200, // in ml
        cremeFraiche: 200, // in g
        tomatoPaste: 1, // in EL
        mustard: 1, // in TL
        parsley: 1, // Bund
    };

    // Berechne die Zutaten basierend auf der Portionenanzahl
    const adjustedIngredients = {
        meat: (baseIngredients.meat * servings) / 6,
        oil: (baseIngredients.oil * servings) / 6,
        butter: (baseIngredients.butter * servings) / 6,
        onions: (baseIngredients.onions * servings) / 6,
        garlic: (baseIngredients.garlic * servings) / 6,
        ham: (baseIngredients.ham * servings) / 6,
        mushrooms: (baseIngredients.mushrooms * servings) / 6,
        broth: (baseIngredients.broth * servings) / 6,
        cream: (baseIngredients.cream * servings) / 6,
        cremeFraiche: (baseIngredients.cremeFraiche * servings) / 6,
        tomatoPaste: (baseIngredients.tomatoPaste * servings) / 6,
        mustard: (baseIngredients.mustard * servings) / 6,
        parsley: (baseIngredients.parsley * servings) / 6
    };

    // Update der Zutaten in der Tabelle
    document.getElementById("meat").textContent = `${adjustedIngredients.meat.toFixed(0)} kg`;
    document.getElementById("oil").textContent = `${adjustedIngredients.oil.toFixed(0)} EL`;
    document.getElementById("butter").textContent = `${adjustedIngredients.butter.toFixed(0)} EL`;
    document.getElementById("onions").textContent = `${adjustedIngredients.onions.toFixed(0)}`;
    document.getElementById("garlic").textContent = `${adjustedIngredients.garlic.toFixed(0)}`;
    document.getElementById("ham").textContent = `${adjustedIngredients.ham.toFixed(0)} g`;
    document.getElementById("mushrooms").textContent = `${adjustedIngredients.mushrooms.toFixed(0)} g`;
    document.getElementById("broth").textContent = `${adjustedIngredients.broth.toFixed(0)} ml`;
    document.getElementById("cream").textContent = `${adjustedIngredients.cream.toFixed(0)} ml`;
    document.getElementById("creme_fraiche").textContent = `${adjustedIngredients.cremeFraiche.toFixed(0)} g`;
    document.getElementById("tomato").textContent = `${adjustedIngredients.tomatoPaste.toFixed(0)} EL`;
    document.getElementById("mustard").textContent = `${adjustedIngredients.mustard.toFixed(0)} TL`;
    document.getElementById("parsley").textContent = `${adjustedIngredients.parsley.toFixed(0)} Bund`;
}



// Lasagne

function updateIngredient2() {
    // Anzahl der Portionen aus dem Eingabefeld holen
    const servings = document.getElementById("servings").value;

    // Basiswerte der Zutaten für 4 Portionen (Originalwerte)
    const baseIngredients = {
        lasagnaPlates: 8, // Anzahl Lasagneplatten
        mincedMeat: 500, // g
        oliveOil: 3, // EL
        onion: 1, // Stück
        garlic: 1, // Zehe
        tomatoes: 500, // g passierte Tomaten
        saltPepper: 1, // Salz und Pfeffer (wird hier nicht multipliziert)
        butter: 40, // g
        flour: 40, // g
        milk: 500, // ml
        cheese: 200 // g
    };

    // Berechnung der Zutaten basierend auf der Anzahl der Portionen
    const adjustedIngredient2 = {
        lasagnaPlates: (baseIngredients.lasagnaPlates * servings) / 4,
        mincedMeat: (baseIngredients.mincedMeat * servings) / 4,
        oliveOil: (baseIngredients.oliveOil * servings) / 4,
        onion: Math.round((baseIngredients.onion * servings) / 4), // Rundung
        garlic: Math.round((baseIngredients.garlic * servings) / 4), // Rundung
        tomatoes: (baseIngredients.tomatoes * servings) / 4,
        butter: (baseIngredients.butter * servings) / 4,
        flour: (baseIngredients.flour * servings) / 4,
        milk: (baseIngredients.milk * servings) / 4,
        cheese: (baseIngredients.cheese * servings) / 4
    };

    // Zutaten in der Tabelle aktualisieren
    document.querySelector(".amount[data-ingredient='lasagnaPlates']").textContent = `${adjustedIngredient2.lasagnaPlates} Lasagneplatten`;
    document.querySelector(".amount[data-ingredient='mincedMeat']").textContent = `${adjustedIngredient2.mincedMeat} g`;
    document.querySelector(".amount[data-ingredient='oliveOil']").textContent = `${adjustedIngredient2.oliveOil} EL `;
    document.querySelector(".amount[data-ingredient='onion']").textContent = `${adjustedIngredient2.onion} `;
    document.querySelector(".amount[data-ingredient='garlic']").textContent = `${adjustedIngredient2.garlic} `;
    document.querySelector(".amount[data-ingredient='tomatoes']").textContent = `${adjustedIngredient2.tomatoes} g`;
    document.querySelector(".amount[data-ingredient='butter']").textContent = `${adjustedIngredient2.butter} g`;
    document.querySelector(".amount[data-ingredient='flour']").textContent = `${adjustedIngredient2.flour} g`;
    document.querySelector(".amount[data-ingredient='milk']").textContent = `${adjustedIngredient2.milk} ml`;
    document.querySelector(".amount[data-ingredient='cheese']").textContent = `${adjustedIngredient2.cheese} g `;
}




// Rezept des Tages

function  updateIngredients2(){


const servings = document.getElementById("servings").value;


 // Basiswerte der Zutaten für 12 Portionen
 const basedIngredients = {
        wheat: 50, // g
        egg: 1, // Stück
        oil: 2, // EL
        toast: 2, // Stück
        sugar: 75, // g
        zimt: 1, // TL
        nuts: 50, // g
        apple: 1, // kg
        citrus: 2, // EL
        cranberry: 50, // g
        butter: 5, // EL
        powderdsugar: 2, // EL
  }

    // Berechnung der Zutaten basierend auf der Anzahl der Portionen
    const adjustedIngredients2 = {
        wheat: (basedIngredients.wheat * servings) / 12,
        egg: Math.round((basedIngredients.egg * servings) / 12,),
        oil: (basedIngredients.oil * servings) / 12,
        toast: (basedIngredients.toast * servings) / 12,
        sugar: (basedIngredients.sugar * servings) / 12,
        zimt: (basedIngredients.zimt * servings) / 12,
        nuts: (basedIngredients.nuts * servings) / 12,
        apple: (basedIngredients.apple * servings) / 12,
        citrus: (basedIngredients.citrus * servings) / 12,
        cranberry: (basedIngredients.cranberry * servings) / 12,
        butter: (basedIngredients.butter * servings) / 12,
        powderdsugar: (basedIngredients.powderdsugar * servings) / 12,
        
    };
    // Zutaten in der Tabelle aktualisieren
        document.getElementById("wheat").textContent = `${adjustedIngredients2.wheat.toFixed(0)} g`;
    document.getElementById("egg").textContent = `${adjustedIngredients2.egg.toFixed(0)} `;
    document.getElementById("oil").textContent = `${adjustedIngredients2.oil.toFixed(0)} EL`;
    document.getElementById("toast").textContent = `${adjustedIngredients2.toast.toFixed(0)} Scheiben`;
    document.getElementById("sugar").textContent = `${adjustedIngredients2.sugar.toFixed(0)} g`;
    document.getElementById("zimt").textContent = `${adjustedIngredients2.zimt.toFixed(0)} TL`;
    document.getElementById("nuts").textContent = `${adjustedIngredients2.nuts.toFixed(0)} g`;
    document.getElementById("apple").textContent = `${adjustedIngredients2.apple.toFixed(0)} kg`;
    document.getElementById("citrus").textContent = `${adjustedIngredients2.citrus.toFixed(0)} EL`;
    document.getElementById("cranberry").textContent = `${adjustedIngredients2.cranberry.toFixed(0)} g`;
    document.getElementById("butter").textContent = `${adjustedIngredients2.butter.toFixed(0)} EL`;
    document.getElementById("powderdsugar").textContent = `${adjustedIngredients2.powderdsugar.toFixed(0)} EL`;
   







}