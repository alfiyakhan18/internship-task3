function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const jokeText = `${data.setup} 🤔<br>${data.punchline} 😂`;
      document.getElementById("joke").innerHTML = jokeText;
    })
    .catch(function(error) {
      document.getElementById("joke").innerText = "Oops! Couldn't fetch a joke.";
      console.error("Error fetching joke:", error);
    });
}