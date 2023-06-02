let song = document.getElementById("name")
let artist = document.getElementById("song");
let container = document.getElementById("container")


function songFunction(){
    
    let songName=song.value;
    let artistName=artist.value;

    console.log(songName)
    if(songName == "" || artistName == ""){
        alert("!!Please enter song name!!!")
    }
  
    let displaySongAndArtist = document.createElement("li");
    let textNode = document.createTextNode(`Song: ${songName} Artist: ${artistName}`);
    displaySongAndArtist.appendChild(textNode);
    container.appendChild(displaySongAndArtist)
    console.log("Song Added")

    song.value = "";
    artist.value = "";

}