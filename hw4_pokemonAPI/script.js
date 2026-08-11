const btn=document.getElementById('search-btn');
// console.log(btn)

btn.addEventListener('click', async function() {
  const input = document.getElementById("input")
  //what they tpye
  const value = input.value;
  // console.log(value);
  getData(value);

})

async function getData(value) {
  const url = "https://pokeapi.co/api/v2/pokemon/" + value;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}