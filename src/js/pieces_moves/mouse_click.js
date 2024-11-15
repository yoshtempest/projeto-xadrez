export function mouseMove()
{
    let draggedPiece = null;
    let draggedPieceInitialIndex = null;

    // Adicionando eventos de arrastar às peças
    Array.from(squares).forEach((square, index) =>
    {
        if (board.flat()[index] !== pieces.nothing)
        {
            square.innerHTML = fonts[board.flat()[index]];
        }
        square.addEventListener("mousedown", (event) => startDrag(event, index));
    });

    // Função para iniciar o arraste
    function startDrag(event, index)
    {
        draggedPiece = event.target; // O elemento que será arrastado
        draggedPieceInitialIndex = index;

        // Mudando o estilo para indicar que está sendo arrastado
        draggedPiece.style.position = "absolute";
        draggedPiece.style.zIndex = "1000";

        // Atualizando posição inicial
        moveAt(event.pageX, event.pageY);

        // Eventos de movimento e soltura
        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", stopDrag);
    }

    // Atualiza a posição da peça enquanto ela é arrastada
    function moveAt(pageX, pageY)
    {
        const containerRect = container.getBoundingClientRect();
        draggedPiece.style.left = `${pageX - containerRect.left - draggedPiece.offsetWidth / 2}px`;
        draggedPiece.style.top = `${pageY - containerRect.top - draggedPiece.offsetHeight / 2}px`;
    }

    // Função chamada durante o movimento
    function onDrag(event) {
        moveAt(event.pageX, event.pageY);
    }

    // Finaliza o arraste
    function stopDrag(event)
    {
        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("mouseup", stopDrag);

        // Determinar onde a peça foi solta
        const containerRect = container.getBoundingClientRect();
        const x = Math.floor((event.pageX - containerRect.left) / draggedPiece.offsetWidth);
        const y = Math.floor((event.pageY - containerRect.top) / draggedPiece.offsetHeight);
        const targetIndex = y * 8 + x;

        // Verificar se o movimento é válido (a lógica de validação será sua lógica de movimentação)
        if (isValidMove(draggedPieceInitialIndex, targetIndex))
        {
            // Atualizar o tabuleiro com a nova posição
            board.flat()[targetIndex] = board.flat()[draggedPieceInitialIndex];
            board.flat()[draggedPieceInitialIndex] = pieces.nothing;

            // Atualizar o tabuleiro visualmente
            updateBoard();
        } else {
            // Reverter a posição visual da peça se o movimento for inválido
            updateBoard();
        }

        draggedPiece = null;
        draggedPieceInitialIndex = null;
    }

    // Verifica se o movimento é válido (você deve usar sua lógica de movimentação existente)
    function isValidMove(fromIndex, toIndex)
    {
        // Adicione aqui as regras para cada peça (por exemplo, uso das funções de movimentação que você já criou)
        return true; // Simplesmente permite todos os movimentos por enquanto
    }
}