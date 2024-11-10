for (var y = 0; y < 64; y++) {
    if ("otmvlw".indexOf(values[y]) >= 0) {
        var tmpScp = checkBlack(y, tmp) || [];
        for (var z = 0; z < tmpScp.length; z++) {
            // Aqui você captura a peça na posição temporária do escopo
            var effectValue = getEffectValue(tmp[tmpScp[z]]); // Atribui o valor com base na peça a ser capturada
            
            // Se o valor retornado pela função for maior, atualizamos o effect
            if (effect < effectValue) {
                effect = effectValue;
            }
        }
    }
}
