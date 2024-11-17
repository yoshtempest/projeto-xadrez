export function victoryScenario()
{
    const WINNING_SCORE = 100;

    var bestEffect = Math.min.apply(null, effects);
    if (bestEffect >= WINNING_SCORE)
    {
        alert("Você Venceu!");
        setTimeout(resetBoard, 100);
    }
}