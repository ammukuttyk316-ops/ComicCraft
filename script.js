function generateComic() {
  const storyIdea = document.getElementById("story").value;
  const genre = document.getElementById("genre").value;
  const outputDiv = document.getElementById("output");

  if (!storyIdea) {
    outputDiv.innerHTML = "<p style='color:red;'>Please enter a story idea!</p>";
    return;
  }

  // Story generation logic
  const title = `The ${genre} Tale`;
  
  const generatedStory = `
    <h3>COMIC TITLE: ${title}</h3>
    <p><strong>GENRE:</strong> ${genre}</p>
    <p><strong>STORY IDEA:</strong> ${storyIdea}</p>
    <br>
    <h4>SCENE 1: THE BEGINNING</h4>
    <p>Once upon a time, ${storyIdea.toLowerCase().replace('.', '')}. Everything started on a mysterious day.</p>
    
    <h4>SCENE 2: THE CONFLICT</h4>
    <p>As the adventure unfolded in a ${genre.toLowerCase()} setting, new challenges arose unexpectedly.</p>
    
    <h4>SCENE 3: THE RESOLUTION</h4>
    <p>Using sheer determination, the hero triumphed! The whole city was saved and everyone celebrated.</p>
    <br>
    <p><strong>THE END</strong></p>
  `;

  outputDiv.innerHTML = generatedStory;
}