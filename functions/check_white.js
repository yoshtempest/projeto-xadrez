function checkWhite(n, values) {
    const piece = values[n];
    const scopes = [];
    let targetPosition = n;

    if (piece === "blackPawn") {
        // Movimento normal para frente
        let forward = targetPosition + 8;
        if (forward < 64 && values[forward] === 0) {
            scopes.push(forward);

            // Movimento inicial de duas casas
            if (n >= 8 && n <= 15 && values[forward + 8] === 0) {
                scopes.push(forward + 8);
            }
        }

        // Movimento diagonal para capturar peças adversárias
        let captureLeft = forward - 1;
        if (captureLeft >= 0 && captureLeft % 8 != 7 && "otmvlw".includes(values[captureLeft])) {
            scopes.push(captureLeft);
        }

        let captureRight = forward + 1;
        if (captureRight < 64 && captureRight % 8 != 0 && "otmvlw".includes(values[captureRight])) {
            scopes.push(captureRight);
        }
    }

    return scopes;
}
