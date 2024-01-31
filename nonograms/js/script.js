function Render() {
	let body = document.body;
	return body.innerHTML = `
    <table class="game">
      <tr class="game-tr">
        <td class="game-info null"></td>
        <td class="game-info gorizontal">
            <table class="game-block gorizontal"></table>
        </td>
      </tr>
      <tr class="game-tr">
        <td class="game-info vertical">
            <table class="game-block vertical"></table>
        </td>
        <td class="game-info gameplay">
            <table class="game-block game_window"></table>
        </td>
      </tr>
    </table>
    <button class="button" type="button">Показать ответ</button>
    <button class="button check" type="button">Проверить</button>
  `}
Render()


