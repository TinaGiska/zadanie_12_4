
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '2979',
  'X-Auth-Token': '6b55c3b53c435e0e92f78d010bfc58ab'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
    url: baseUrl + '/board',
    method: 'GET',
    success: function(response) {
      setupColumns(response.columns);
    }
});

function setupColumns(columns) {
      columns.forEach(function (column) {
  		 var col = new Column(column.id, column.name);
      board.createColumn(col);
				function setupCards(col, cards) {
			cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}
});
}
