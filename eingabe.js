function updateIngredients() {
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





function updateIngredient() {
    // Hole den Wert der Portionen
    const servings = document.getElementById("servings").value;

    // Zutaten-Basiswerte für 6 Portionen (originale Menge)
    const baseIngredients = {
        potato: 1, // in kg
        oil: 1, // in EL
        butter: 1, // in EL
        onion: 2, // Anzahl
        garlic: 1, // Anzahl
        ham: 100, // in g
        mushrooms: 500, // in g
        broth: 200, // in ml
        cream: 200, // in ml
        cremeFraiche: 200, // in g
        tomatoPaste: 1, // in EL
        mustard: 1, // in TL
        parsley: 1 // Bund
    };

    // Berechne die Zutaten basierend auf der Portionenanzahl
    const adjustedIngredients = {
        potato: (baseIngredients.potato * servings) / 6,
        oil: (baseIngredients.oil * servings) / 6,
        butter: (baseIngredients.butter * servings) / 6,
        onion: (baseIngredients.onion * servings) / 6,
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
    document.getElementById("potato").textContent = `${adjustedIngredients.potato.toFixed(2)} kg`;
    document.getElementById("oil").textContent = `${adjustedIngredients.oil.toFixed(2)} EL`;
    document.getElementById("butter").textContent = `${adjustedIngredients.butter.toFixed(2)} EL`;
    document.getElementById("onion").textContent = `${adjustedIngredients.onion.toFixed(0)}`;
    document.getElementById("garlic").textContent = `${adjustedIngredients.garlic.toFixed(0)}`;
    document.getElementById("ham").textContent = `${adjustedIngredients.ham.toFixed(0)} g`;
    document.getElementById("mushrooms").textContent = `${adjustedIngredients.mushrooms.toFixed(0)} g`;
    document.getElementById("broth").textContent = `${adjustedIngredients.broth.toFixed(0)} ml`;
    document.getElementById("cream").textContent = `${adjustedIngredients.cream.toFixed(0)} ml`;
    document.getElementById("creme_fraiche").textContent = `${adjustedIngredients.cremeFraiche.toFixed(0)} g`;
    document.getElementById("tomato").textContent = `${adjustedIngredients.tomatoPaste.toFixed(2)} EL`;
    document.getElementById("mustard").textContent = `${adjustedIngredients.mustard.toFixed(2)} TL`;
    document.getElementById("parsley").textContent = `${adjustedIngredients.parsley.toFixed(0)} Bund`;
}



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
        onion: Math.round((baseIngredients.onion * servings) / 4), // Rundung, da Zwiebeln nicht in Bruchteilen vorhanden sind
        garlic: Math.round((baseIngredients.garlic * servings) / 4), // Rundung für Knoblauch
        tomatoes: (baseIngredients.tomatoes * servings) / 4,
        butter: (baseIngredients.butter * servings) / 4,
        flour: (baseIngredients.flour * servings) / 4,
        milk: (baseIngredients.milk * servings) / 4,
        cheese: (baseIngredients.cheese * servings) / 4
    };

    // Zutaten in der Tabelle aktualisieren
    document.querySelector(".amount[data-ingredient='lasagnaPlates']").textContent = `${adjustedIngredients.lasagnaPlates} Lasagneplatten`;
    document.querySelector(".amount[data-ingredient='mincedMeat']").textContent = `${adjustedIngredients.mincedMeat} g`;
    document.querySelector(".amount[data-ingredient='oliveOil']").textContent = `${adjustedIngredients.oliveOil} EL `;
    document.querySelector(".amount[data-ingredient='onion']").textContent = `${adjustedIngredients.onion} `;
    document.querySelector(".amount[data-ingredient='garlic']").textContent = `${adjustedIngredients.garlic} `;
    document.querySelector(".amount[data-ingredient='tomatoes']").textContent = `${adjustedIngredients.tomatoes} g`;
    document.querySelector(".amount[data-ingredient='butter']").textContent = `${adjustedIngredients.butter} g`;
    document.querySelector(".amount[data-ingredient='flour']").textContent = `${adjustedIngredients.flour} g`;
    document.querySelector(".amount[data-ingredient='milk']").textContent = `${adjustedIngredients.milk} ml`;
    document.querySelector(".amount[data-ingredient='cheese']").textContent = `${adjustedIngredients.cheese} g `;
}