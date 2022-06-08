let wordData, userInput;
const $word = $("#word");
const $definition = $("#definition");
const $offensive = $("#offensive");
const $pronunciation = $("#pronunciation");
const $input = $('input[type="text"]');

$("form").on("submit", handleGetData);
//www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=cec6fd31-d3a5-454a-a806-f997548b7cbf
https: function handleGetData(event) {
  const BASE_URL =
    "https://www.dictionaryapi.com/api/v3/references/collegiate/json";
  const API_KEY = "cec6fd31-d3a5-454a-a806-f997548b7cbf";
  event.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `${BASE_URL}/${userInput}?key=${API_KEY}`,
  }).then(
    (data) => {
      wordData = data;
      console.log(data);
      render();
    },
    (error) => {
      console.log("bad request", error);
    }
  );
}

function render() {
  $word.text(wordData.Word);
  $definition.text(wordData.Definition);
  $offensive.text(wordData.Offensive);
  $Pronunciation.text(wordData.Offensive);
}
/*
   // calling preventDefault() on a 'submit' event will prevent a page refresh  

*/
