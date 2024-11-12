for (let y = 0; y < 64; y++) {
    // Verifica se o valor em 'values[y]' corresponde a uma das peças específicas
    if (Object.values(pieces.white).includes(values[y])) {
        let tmpScp = checkBlack(y, tmp) || [];
        for (let z = 0; z < tmpScp.length; z++) {
            // Calcula o efeito da peça capturada
            let effectValue = getEffectValue(tmp[tmpScp[z]]);

            // Atualiza o maior efeito encontrado
            if (effect < effectValue) {
                effect = effectValue;
            }
        }
    }
}

